/**
 * GeoQuiz Master - Interactive Application Engine
 * Handles Quiz State, Timer, Audio Synthesis, CO Breakdown,
 * Mistakes Segregation, Retake Mode, and Local Storage.
 */

(function () {
  'use strict';

  // Sound Synthesizer via Web Audio API (Zero external audio file dependencies)
  const soundFX = {
    ctx: null,
    enabled: true,
    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      }
    },
    playTone(freq, type, duration, delay = 0) {
      if (!this.enabled) return;
      try {
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + delay);
        osc.stop(this.ctx.currentTime + delay + duration);
      } catch (e) {
        // AudioContext autoplay restrictions or disabled
      }
    },
    click() {
      this.playTone(600, 'sine', 0.04);
    },
    correct() {
      this.playTone(523.25, 'triangle', 0.1, 0); // C5
      this.playTone(659.25, 'triangle', 0.15, 0.08); // E5
      this.playTone(783.99, 'triangle', 0.25, 0.16); // G5
    },
    wrong() {
      this.playTone(220, 'sawtooth', 0.15, 0);
      this.playTone(180, 'sawtooth', 0.25, 0.12);
    },
    finish() {
      this.playTone(440, 'triangle', 0.12, 0);
      this.playTone(554.37, 'triangle', 0.12, 0.1);
      this.playTone(659.25, 'triangle', 0.15, 0.2);
      this.playTone(880, 'triangle', 0.4, 0.32);
    }
  };

  // Main State Object
  const state = {
    allQuestions: window.QUIZ_DATA.questions,
    meta: window.QUIZ_DATA.meta,
    activeList: [],
    currentIndex: 0,
    userAnswers: {},   // { [qId]: 'A' | 'B' | 'C' | 'D' }
    flagged: new Set(),
    mode: 'exam',      // 'exam' | 'practice'
    timerSeconds: 0,
    timerInterval: null,
    quizStartTime: null,
    quizTypeTitle: '',
    results: null,
    activeMistakeFilter: 'ALL'
  };

  // DOM Elements
  const el = {
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    soundToggleBtn: document.getElementById('soundToggleBtn'),
    viewDashboard: document.getElementById('viewDashboard'),
    viewQuiz: document.getElementById('viewQuiz'),
    viewResults: document.getElementById('viewResults'),
    viewBank: document.getElementById('viewBank'),
    navDashboardBtn: document.getElementById('navDashboardBtn'),
    navBankBtn: document.getElementById('navBankBtn'),
    historyBtn: document.getElementById('historyBtn'),
    historyModal: document.getElementById('historyModal'),
    closeHistoryBtn: document.getElementById('closeHistoryBtn'),
    clearHistoryBtn: document.getElementById('clearHistoryBtn'),
    historyList: document.getElementById('historyList'),

    // Quiz elements
    quizTitleBadge: document.getElementById('quizTitleBadge'),
    quizTimer: document.getElementById('quizTimer'),
    progressBarFill: document.getElementById('progressBarFill'),
    progressCountText: document.getElementById('progressCountText'),
    progressPercentText: document.getElementById('progressPercentText'),
    qBadge: document.getElementById('qBadge'),
    qFlagBtn: document.getElementById('qFlagBtn'),
    questionText: document.getElementById('questionText'),
    optionsList: document.getElementById('optionsList'),
    instantExplanation: document.getElementById('instantExplanation'),
    expText: document.getElementById('expText'),
    btnPrev: document.getElementById('btnPrev'),
    btnNext: document.getElementById('btnNext'),
    btnClear: document.getElementById('btnClear'),
    btnSubmit: document.getElementById('btnSubmit'),
    btnExitQuiz: document.getElementById('btnExitQuiz'),
    paletteGrid: document.getElementById('paletteGrid'),
    answeredCountBadge: document.getElementById('answeredCountBadge'),

    // Results elements
    scoreCircleVal: document.getElementById('scoreCircleVal'),
    scorePercentText: document.getElementById('scorePercentText'),
    scoreTitleText: document.getElementById('scoreTitleText'),
    scoreFeedbackText: document.getElementById('scoreFeedbackText'),
    totalMarksVal: document.getElementById('totalMarksVal'),
    accuracyVal: document.getElementById('accuracyVal'),
    timeSpentVal: document.getElementById('timeSpentVal'),
    coBreakdownGrid: document.getElementById('coBreakdownGrid'),
    mistakesFilterTabs: document.getElementById('mistakesFilterTabs'),
    mistakesList: document.getElementById('mistakesList'),
    retakeMistakesBtn: document.getElementById('retakeMistakesBtn'),
    printResultsBtn: document.getElementById('printResultsBtn'),
    backToHomeBtn: document.getElementById('backToHomeBtn'),

    // Question bank
    bankSearchInput: document.getElementById('bankSearchInput'),
    bankFilterCO: document.getElementById('bankFilterCO'),
    bankList: document.getElementById('bankList')
  };

  // Initialize Theme & Settings
  function initTheme() {
    const savedTheme = localStorage.getItem('geoquiz_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    const savedSound = localStorage.getItem('geoquiz_sound');
    soundFX.enabled = savedSound !== 'false';
    updateSoundIcon(soundFX.enabled);
  }

  function updateThemeIcon(theme) {
    el.themeToggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    el.themeToggleBtn.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  }

  function updateSoundIcon(enabled) {
    el.soundToggleBtn.innerHTML = enabled ? '🔊' : '🔇';
    el.soundToggleBtn.title = enabled ? 'Mute Sound Effects' : 'Enable Sound Effects';
  }

  el.themeToggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('geoquiz_theme', next);
    updateThemeIcon(next);
  });

  el.soundToggleBtn.addEventListener('click', () => {
    soundFX.enabled = !soundFX.enabled;
    localStorage.setItem('geoquiz_sound', soundFX.enabled);
    updateSoundIcon(soundFX.enabled);
    if (soundFX.enabled) soundFX.click();
  });

  // Navigation between Views
  function switchView(viewName) {
    [el.viewDashboard, el.viewQuiz, el.viewResults, el.viewBank].forEach(v => v.classList.remove('active'));
    if (viewName === 'dashboard') {
      el.viewDashboard.classList.add('active');
      el.navDashboardBtn.classList.add('active');
      el.navBankBtn.classList.remove('active');
      window.scrollTo(0, 0);
    } else if (viewName === 'quiz') {
      el.viewQuiz.classList.add('active');
      el.navDashboardBtn.classList.remove('active');
      el.navBankBtn.classList.remove('active');
      window.scrollTo(0, 0);
    } else if (viewName === 'results') {
      el.viewResults.classList.add('active');
      el.navDashboardBtn.classList.remove('active');
      el.navBankBtn.classList.remove('active');
      window.scrollTo(0, 0);
    } else if (viewName === 'bank') {
      el.viewBank.classList.add('active');
      el.navBankBtn.classList.add('active');
      el.navDashboardBtn.classList.remove('active');
      renderQuestionBank();
      window.scrollTo(0, 0);
    }
  }

  el.navDashboardBtn.addEventListener('click', () => {
    if (state.activeList.length > 0 && !state.results) {
      if (!confirm("A quiz is currently in progress. Do you want to return to the dashboard?")) return;
      clearInterval(state.timerInterval);
    }
    switchView('dashboard');
  });

  el.navBankBtn.addEventListener('click', () => {
    if (state.activeList.length > 0 && !state.results) {
      if (!confirm("A quiz is currently in progress. Go to Question Bank?")) return;
      clearInterval(state.timerInterval);
    }
    switchView('bank');
  });

  el.backToHomeBtn.addEventListener('click', () => switchView('dashboard'));

  // Start Quiz Handler
  window.startQuiz = function (targetCO, mode = 'exam') {
    soundFX.click();
    state.mode = mode;
    state.userAnswers = {};
    state.flagged.clear();
    state.currentIndex = 0;
    state.results = null;

    let pool = [];
    if (targetCO === 'ALL') {
      pool = [
        ...state.allQuestions.CO1,
        ...state.allQuestions.CO2,
        ...state.allQuestions.CO3,
        ...state.allQuestions.CO4
      ];
      state.quizTypeTitle = "All 4 COs Full Comprehensive Quiz";
    } else if (['CO1', 'CO2', 'CO3', 'CO4'].includes(targetCO)) {
      pool = [...state.allQuestions[targetCO]];
      state.quizTypeTitle = state.meta[targetCO].title;
    } else if (targetCO === 'MISTAKES') {
      const storedMistakes = JSON.parse(localStorage.getItem('geoquiz_weak_questions') || '[]');
      if (storedMistakes.length === 0) {
        alert("You have no recorded mistakes yet! Complete a quiz first.");
        return;
      }
      pool = getQuestionsByIds(storedMistakes);
      state.quizTypeTitle = "Retake: Focused Mistakes Revision";
    }

    // By default, card click runs all questions in the chosen CO or Full Exam
    state.activeList = [...pool];

    // Initialize Timer (Default 60 mins for full exam, 30 mins for single CO, or untimed in practice)
    clearInterval(state.timerInterval);
    let timerMinutes = 0;
    if (mode === 'exam') {
      timerMinutes = targetCO === 'ALL' ? 120 : 45;
    }
    if (timerMinutes > 0) {
      state.timerSeconds = timerMinutes * 60;
      updateTimerDisplay(state.timerSeconds);
      state.timerInterval = setInterval(() => {
        state.timerSeconds--;
        updateTimerDisplay(state.timerSeconds);
        if (state.timerSeconds <= 60) {
          el.quizTimer.classList.add('warning');
        } else {
          el.quizTimer.classList.remove('warning');
        }
        if (state.timerSeconds <= 0) {
          clearInterval(state.timerInterval);
          alert("Time is up! Submitting your answers now.");
          submitQuiz();
        }
      }, 1000);
    } else {
      // Untimed / Count up
      state.timerSeconds = 0;
      updateTimerDisplay(0);
      state.timerInterval = setInterval(() => {
        state.timerSeconds++;
        updateTimerDisplay(state.timerSeconds);
      }, 1000);
    }

    state.quizStartTime = Date.now();
    el.quizTitleBadge.textContent = state.quizTypeTitle;

    switchView('quiz');
    renderQuestion(0);
    renderPalette();
  };

  // Custom Quiz Start
  window.startCustomQuiz = function () {
    const selectedCOs = [];
    ['co1Check', 'co2Check', 'co3Check', 'co4Check'].forEach((id, idx) => {
      const chk = document.getElementById(id);
      if (chk && chk.checked) selectedCOs.push(`CO${idx + 1}`);
    });

    if (selectedCOs.length === 0) {
      alert("Please select at least one CO!");
      return;
    }

    let pool = [];
    selectedCOs.forEach(co => {
      pool.push(...state.allQuestions[co]);
    });

    const modeRadio = document.querySelector('input[name="quizModeRadio"]:checked');
    const mode = modeRadio ? modeRadio.value : 'exam';

    soundFX.click();
    state.mode = mode;
    state.userAnswers = {};
    state.flagged.clear();
    state.currentIndex = 0;
    state.results = null;

    const countInput = document.getElementById('customQCount');
    let count = countInput ? parseInt(countInput.value, 10) : pool.length;
    if (isNaN(count) || count <= 0) count = pool.length;
    if (count > pool.length) count = pool.length;

    const shuffleCheck = document.getElementById('customShuffle');
    if (shuffleCheck && shuffleCheck.checked) {
      shuffleArray(pool);
    }

    state.activeList = pool.slice(0, count);
    state.quizTypeTitle = `Custom Quiz (${selectedCOs.join(', ')}) - ${state.activeList.length} Questions`;

    // Timer
    clearInterval(state.timerInterval);
    const timerInput = document.getElementById('customTimer');
    let timerMinutes = timerInput ? parseInt(timerInput.value, 10) : 0;
    if (timerMinutes > 0) {
      state.timerSeconds = timerMinutes * 60;
      updateTimerDisplay(state.timerSeconds);
      state.timerInterval = setInterval(() => {
        state.timerSeconds--;
        updateTimerDisplay(state.timerSeconds);
        if (state.timerSeconds <= 60) el.quizTimer.classList.add('warning');
        if (state.timerSeconds <= 0) {
          clearInterval(state.timerInterval);
          alert("Time's up! Automatically submitting quiz.");
          submitQuiz();
        }
      }, 1000);
    } else {
      state.timerSeconds = 0;
      updateTimerDisplay(0);
      state.timerInterval = setInterval(() => {
        state.timerSeconds++;
        updateTimerDisplay(state.timerSeconds);
      }, 1000);
    }

    state.quizStartTime = Date.now();
    el.quizTitleBadge.textContent = state.quizTypeTitle;

    switchView('quiz');
    renderQuestion(0);
    renderPalette();
  };

  function updateTimerDisplay(totalSeconds) {
    const mins = Math.floor(Math.abs(totalSeconds) / 60);
    const secs = Math.abs(totalSeconds) % 60;
    el.quizTimer.innerHTML = `⏱️ ${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function getQuestionsByIds(ids) {
    const map = {};
    for (const co of ['CO1', 'CO2', 'CO3', 'CO4']) {
      state.allQuestions[co].forEach(q => { map[q.id] = q; });
    }
    return ids.map(id => map[id]).filter(Boolean);
  }

  // Render Single Question
  function renderQuestion(index) {
    if (index < 0 || index >= state.activeList.length) return;
    state.currentIndex = index;
    const q = state.activeList[index];

    // Top progress
    const pct = Math.round(((index + 1) / state.activeList.length) * 100);
    el.progressBarFill.style.width = `${pct}%`;
    el.progressCountText.textContent = `Question ${index + 1} of ${state.activeList.length}`;
    el.progressPercentText.textContent = `${pct}%`;

    // Badges & Flag
    el.qBadge.textContent = `${q.co} • Q${q.qNum}`;
    el.qBadge.className = `q-badge badge-${q.co.toLowerCase()}`;

    if (state.flagged.has(q.id)) {
      el.qFlagBtn.classList.add('flagged');
      el.qFlagBtn.innerHTML = `★ Flagged`;
    } else {
      el.qFlagBtn.classList.remove('flagged');
      el.qFlagBtn.innerHTML = `☆ Flag for Review`;
    }

    // Question statement
    el.questionText.textContent = q.question;

    // Render Options
    el.optionsList.innerHTML = '';
    const selected = state.userAnswers[q.id];

    ['A', 'B', 'C', 'D'].forEach(optKey => {
      const optText = q.options[optKey];
      const optItem = document.createElement('div');
      optItem.className = 'option-item';
      optItem.dataset.opt = optKey;

      if (selected === optKey) {
        optItem.classList.add('selected');
      }

      // If in instant practice mode and already answered
      if (state.mode === 'practice' && selected) {
        if (optKey === q.answer) {
          optItem.classList.add('correct-revealed');
        } else if (selected === optKey && selected !== q.answer) {
          optItem.classList.add('incorrect-revealed');
        }
      }

      optItem.innerHTML = `
        <div class="opt-prefix">${optKey}</div>
        <div class="opt-text">${optText}</div>
      `;

      optItem.addEventListener('click', () => selectOption(optKey));
      el.optionsList.appendChild(optItem);
    });

    // Practice Mode Instant Explanation
    if (state.mode === 'practice' && selected) {
      el.instantExplanation.style.display = 'block';
      el.expText.innerHTML = `<strong>${selected === q.answer ? '✔ Correct!' : '❌ Incorrect.'}</strong> ${q.explanation}`;
    } else {
      el.instantExplanation.style.display = 'none';
    }

    // Navigation buttons state
    el.btnPrev.disabled = index === 0;
    el.btnNext.style.display = index === state.activeList.length - 1 ? 'none' : 'inline-flex';
    el.btnSubmit.style.display = index === state.activeList.length - 1 ? 'inline-flex' : 'none';

    updatePaletteActive();
  }

  function selectOption(optKey) {
    const q = state.activeList[state.currentIndex];
    state.userAnswers[q.id] = optKey;

    if (state.mode === 'practice') {
      if (optKey === q.answer) soundFX.correct();
      else soundFX.wrong();
    } else {
      soundFX.click();
    }

    renderQuestion(state.currentIndex);
    renderPalette();
  }

  function clearOption() {
    const q = state.activeList[state.currentIndex];
    delete state.userAnswers[q.id];
    soundFX.click();
    renderQuestion(state.currentIndex);
    renderPalette();
  }

  function toggleFlag() {
    const q = state.activeList[state.currentIndex];
    if (state.flagged.has(q.id)) {
      state.flagged.delete(q.id);
    } else {
      state.flagged.add(q.id);
    }
    soundFX.click();
    renderQuestion(state.currentIndex);
    renderPalette();
  }

  // Navigation Button Handlers
  el.btnPrev.addEventListener('click', () => {
    if (state.currentIndex > 0) {
      soundFX.click();
      renderQuestion(state.currentIndex - 1);
    }
  });

  el.btnNext.addEventListener('click', () => {
    if (state.currentIndex < state.activeList.length - 1) {
      soundFX.click();
      renderQuestion(state.currentIndex + 1);
    }
  });

  el.btnClear.addEventListener('click', clearOption);
  el.qFlagBtn.addEventListener('click', toggleFlag);

  el.btnExitQuiz.addEventListener('click', () => {
    if (confirm("Are you sure you want to exit the quiz? Current progress will be discarded.")) {
      clearInterval(state.timerInterval);
      switchView('dashboard');
    }
  });

  el.btnSubmit.addEventListener('click', () => {
    const answeredCount = Object.keys(state.userAnswers).length;
    const total = state.activeList.length;
    const unanswered = total - answeredCount;

    let msg = `You have answered ${answeredCount} of ${total} questions.`;
    if (unanswered > 0) {
      msg += `\n⚠️ There are ${unanswered} UNANSWERED questions!`;
    }
    msg += `\n\nDo you want to submit and calculate your CO-wise marks?`;

    if (confirm(msg)) {
      submitQuiz();
    }
  });

  // Palette Grid Rendering
  function renderPalette() {
    el.paletteGrid.innerHTML = '';
    const answeredTotal = Object.keys(state.userAnswers).length;
    el.answeredCountBadge.textContent = `${answeredTotal}/${state.activeList.length}`;

    state.activeList.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'palette-btn';
      btn.textContent = idx + 1;

      if (idx === state.currentIndex) {
        btn.classList.add('active-q');
      }

      if (state.flagged.has(q.id)) {
        btn.classList.add('flagged');
      } else if (state.userAnswers[q.id]) {
        btn.classList.add('answered');
      } else if (idx < state.currentIndex) {
        btn.classList.add('unanswered');
      }

      btn.addEventListener('click', () => {
        soundFX.click();
        renderQuestion(idx);
      });

      el.paletteGrid.appendChild(btn);
    });
  }

  function updatePaletteActive() {
    const buttons = el.paletteGrid.querySelectorAll('.palette-btn');
    buttons.forEach((btn, idx) => {
      if (idx === state.currentIndex) btn.classList.add('active-q');
      else btn.classList.remove('active-q');
    });
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!el.viewQuiz.classList.contains('active')) return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === '1' || e.key.toLowerCase() === 'a') selectOption('A');
    else if (e.key === '2' || e.key.toLowerCase() === 'b') selectOption('B');
    else if (e.key === '3' || e.key.toLowerCase() === 'c') selectOption('C');
    else if (e.key === '4' || e.key.toLowerCase() === 'd') selectOption('D');
    else if (e.key === 'ArrowRight') {
      if (state.currentIndex < state.activeList.length - 1) renderQuestion(state.currentIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      if (state.currentIndex > 0) renderQuestion(state.currentIndex - 1);
    } else if (e.key.toLowerCase() === 'f') {
      toggleFlag();
    }
  });

  // =========================================================================
  // SCORING ENGINE & CO-WISE BREAKDOWN & MISTAKES SEGREGATION
  // =========================================================================
  function submitQuiz() {
    clearInterval(state.timerInterval);
    soundFX.finish();

    const elapsed = Math.round((Date.now() - state.quizStartTime) / 1000);
    const totalQuestions = state.activeList.length;

    let correctTotal = 0;
    let wrongTotal = 0;
    let unattemptedTotal = 0;

    // CO Statistics accumulator
    const coStats = {
      CO1: { total: 0, correct: 0, wrong: 0, unattempted: 0, marks: 0 },
      CO2: { total: 0, correct: 0, wrong: 0, unattempted: 0, marks: 0 },
      CO3: { total: 0, correct: 0, wrong: 0, unattempted: 0, marks: 0 },
      CO4: { total: 0, correct: 0, wrong: 0, unattempted: 0, marks: 0 }
    };

    const mistakes = []; // Array of { q, userAns, isCorrect }

    state.activeList.forEach(q => {
      const userPick = state.userAnswers[q.id];
      const targetCO = q.co;

      coStats[targetCO].total++;

      if (!userPick) {
        unattemptedTotal++;
        coStats[targetCO].unattempted++;
        mistakes.push({
          q: q,
          userAns: null,
          isCorrect: false,
          flagged: state.flagged.has(q.id)
        });
      } else if (userPick === q.answer) {
        correctTotal++;
        coStats[targetCO].correct++;
        coStats[targetCO].marks++;
      } else {
        wrongTotal++;
        coStats[targetCO].wrong++;
        mistakes.push({
          q: q,
          userAns: userPick,
          isCorrect: false,
          flagged: state.flagged.has(q.id)
        });
      }
    });

    const percent = Math.round((correctTotal / totalQuestions) * 100);

    state.results = {
      quizTitle: state.quizTypeTitle,
      timestamp: new Date().toISOString(),
      timeSpent: elapsed,
      total: totalQuestions,
      correct: correctTotal,
      wrong: wrongTotal,
      unattempted: unattemptedTotal,
      percent: percent,
      coStats: coStats,
      mistakes: mistakes
    };

    // Save to LocalStorage History & Persistent Weak Questions
    saveAttemptHistory(state.results);
    savePersistentMistakes(mistakes.map(m => m.q.id));

    // Render Results Screen
    renderResultsScreen(state.results);
    switchView('results');
  }

  function saveAttemptHistory(res) {
    try {
      const history = JSON.parse(localStorage.getItem('geoquiz_history') || '[]');
      history.unshift({
        title: res.quizTitle,
        date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        score: `${res.correct}/${res.total}`,
        percent: res.percent,
        co1: `${res.coStats.CO1.correct}/${res.coStats.CO1.total}`,
        co2: `${res.coStats.CO2.correct}/${res.coStats.CO2.total}`,
        co3: `${res.coStats.CO3.correct}/${res.coStats.CO3.total}`,
        co4: `${res.coStats.CO4.correct}/${res.coStats.CO4.total}`
      });
      // Keep last 25
      if (history.length > 25) history.pop();
      localStorage.setItem('geoquiz_history', JSON.stringify(history));
    } catch (e) {}
  }

  function savePersistentMistakes(newMistakeIds) {
    try {
      const existing = new Set(JSON.parse(localStorage.getItem('geoquiz_weak_questions') || '[]'));
      newMistakeIds.forEach(id => existing.add(id));
      localStorage.setItem('geoquiz_weak_questions', JSON.stringify(Array.from(existing)));
    } catch (e) {}
  }

  // Render Comprehensive Results Screen
  function renderResultsScreen(res) {
    // Score circle SVG animation
    const circumference = 2 * Math.PI * 54; // r=54
    const offset = circumference - (res.percent / 100) * circumference;
    el.scoreCircleVal.style.strokeDasharray = `${circumference} ${circumference}`;
    el.scoreCircleVal.style.strokeDashoffset = offset;
    el.scorePercentText.textContent = `${res.percent}%`;

    // Title & Feedback
    let feedback = "";
    if (res.percent >= 90) {
      el.scoreTitleText.textContent = "🏆 Outstanding Mastery!";
      feedback = "You have demonstrated exceptional knowledge across the course outcomes. You are thoroughly prepared for the examinations!";
    } else if (res.percent >= 75) {
      el.scoreTitleText.textContent = "🎉 Great Performance!";
      feedback = "Solid grasp of core concepts! Review the segregated mistakes below to turn your weak areas into strengths.";
    } else if (res.percent >= 50) {
      el.scoreTitleText.textContent = "📚 Good Effort, Needs Targeted Revision!";
      feedback = "You have understood several concepts, but specific COs require review. Use the 'Retake Mistakes' button to practice until perfected!";
    } else {
      el.scoreTitleText.textContent = "💪 Keep Going, Practice Makes Perfect!";
      feedback = "Don't worry! Carefully study each segregated mistake note below, then take a re-quiz on individual COs to build mastery.";
    }
    el.scoreFeedbackText.textContent = feedback;

    // Metrics
    el.totalMarksVal.textContent = `${res.correct} / ${res.total}`;
    const attempted = res.total - res.unattempted;
    const accuracy = attempted > 0 ? Math.round((res.correct / attempted) * 100) : 0;
    el.accuracyVal.textContent = `${accuracy}%`;

    const mins = Math.floor(res.timeSpent / 60);
    const secs = res.timeSpent % 60;
    el.timeSpentVal.textContent = `${mins}m ${secs}s`;

    // Render CO-Wise Breakdown Cards
    renderCOBreakdown(res.coStats);

    // Render Mistakes Segregated View
    renderMistakesSection(res.mistakes);
  }

  function renderCOBreakdown(coStats) {
    el.coBreakdownGrid.innerHTML = '';

    const coConfigs = [
      { key: 'CO1', name: 'CO1: Remote Sensing & Maps', color: 'var(--co1-color)', bg: 'var(--co1-bg)' },
      { key: 'CO2', name: 'CO2: DIP & Terrain Analysis', color: 'var(--co2-color)', bg: 'var(--co2-bg)' },
      { key: 'CO3', name: 'CO3: GIS Principles & Data Models', color: 'var(--co3-color)', bg: 'var(--co3-bg)' },
      { key: 'CO4', name: 'CO4: GPS & Environmental Apps', color: 'var(--co4-color)', bg: 'var(--co4-bg)' }
    ];

    coConfigs.forEach(item => {
      const stats = coStats[item.key];
      if (stats.total === 0) return; // Not included in quiz

      const pct = Math.round((stats.correct / stats.total) * 100);

      let gradeBadge = '';
      if (pct >= 85) gradeBadge = '<span class="co-score-grade grade-excellent">Mastered (A+)</span>';
      else if (pct >= 70) gradeBadge = '<span class="co-score-grade grade-good">Proficient (A)</span>';
      else if (pct >= 50) gradeBadge = '<span class="co-score-grade grade-average">Average (B)</span>';
      else gradeBadge = '<span class="co-score-grade grade-poor">Needs Review</span>';

      const card = document.createElement('div');
      card.className = 'co-score-card';
      card.innerHTML = `
        <div class="co-score-header">
          <span class="co-score-name" style="color: ${item.color};">${item.name}</span>
          ${gradeBadge}
        </div>
        <div class="co-score-stats">
          ${stats.correct} / ${stats.total} <span>(${pct}%)</span>
        </div>
        <div class="co-score-bar-bg">
          <div class="co-score-bar-fill" style="width: ${pct}%; background: ${item.color};"></div>
        </div>
        <div class="co-score-details">
          <span>✔ Correct: <strong>${stats.correct}</strong></span>
          <span>❌ Wrong: <strong>${stats.wrong}</strong></span>
          <span>⏳ Skipped: <strong>${stats.unattempted}</strong></span>
        </div>
      `;
      el.coBreakdownGrid.appendChild(card);
    });
  }

  // =========================================================================
  // MISTAKES & REVISION CENTER (SEGREGATED CO-WISE)
  // =========================================================================
  function renderMistakesSection(mistakes) {
    state.activeMistakeFilter = 'ALL';

    // Counts for filter tabs
    const counts = {
      ALL: mistakes.length,
      CO1: mistakes.filter(m => m.q.co === 'CO1').length,
      CO2: mistakes.filter(m => m.q.co === 'CO2').length,
      CO3: mistakes.filter(m => m.q.co === 'CO3').length,
      CO4: mistakes.filter(m => m.q.co === 'CO4').length,
      FLAGGED: mistakes.filter(m => m.flagged).length
    };

    // Render Filter Tabs
    el.mistakesFilterTabs.innerHTML = `
      <button class="filter-tab-btn active" data-filter="ALL">All Mistakes (${counts.ALL})</button>
      <button class="filter-tab-btn" data-filter="CO1">CO1 (${counts.CO1})</button>
      <button class="filter-tab-btn" data-filter="CO2">CO2 (${counts.CO2})</button>
      <button class="filter-tab-btn" data-filter="CO3">CO3 (${counts.CO3})</button>
      <button class="filter-tab-btn" data-filter="CO4">CO4 (${counts.CO4})</button>
      ${counts.FLAGGED > 0 ? `<button class="filter-tab-btn" data-filter="FLAGGED">★ Flagged (${counts.FLAGGED})</button>` : ''}
    `;

    el.mistakesFilterTabs.querySelectorAll('.filter-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        el.mistakesFilterTabs.querySelectorAll('.filter-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeMistakeFilter = btn.dataset.filter;
        renderMistakesList(mistakes, state.activeMistakeFilter);
      });
    });

    renderMistakesList(mistakes, 'ALL');

    // Retake Mistakes Button
    if (mistakes.length === 0) {
      el.retakeMistakesBtn.style.display = 'none';
    } else {
      el.retakeMistakesBtn.style.display = 'inline-flex';
      el.retakeMistakesBtn.onclick = () => {
        const mistakeQuestions = mistakes.map(m => m.q);
        retakeCustomList(mistakeQuestions, "Retake: Your Incorrect Questions");
      };
    }
  }

  function renderMistakesList(mistakes, filter) {
    el.mistakesList.innerHTML = '';

    let filtered = mistakes;
    if (filter === 'FLAGGED') {
      filtered = mistakes.filter(m => m.flagged);
    } else if (filter !== 'ALL') {
      filtered = mistakes.filter(m => m.q.co === filter);
    }

    if (filtered.length === 0) {
      el.mistakesList.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎉</div>
          <h3>No mistakes in this category!</h3>
          <p>You answered all questions correctly here or none were skipped.</p>
        </div>
      `;
      return;
    }

    filtered.forEach((m, idx) => {
      const q = m.q;
      const card = document.createElement('div');
      card.className = 'mistake-card';

      const userPickText = m.userAns ? `${m.userAns}. ${q.options[m.userAns]}` : "⚠️ Unattempted / Skipped";
      const correctPickText = `${q.answer}. ${q.options[q.answer]}`;

      card.innerHTML = `
        <div class="mistake-meta">
          <span class="mistake-co-badge badge-${q.co.toLowerCase()}">${q.co} • Question #${q.qNum}</span>
          ${m.flagged ? '<span style="color: var(--warning); font-size: 0.8rem; font-weight: 700;">★ Flagged for Review</span>' : ''}
        </div>
        <div class="mistake-qtext">${idx + 1}. ${q.question}</div>
        
        <div class="mistake-compare-grid">
          <div class="answer-box wrong">
            <div class="answer-box-label">❌ Your Answer</div>
            <div class="answer-box-text">${userPickText}</div>
          </div>
          <div class="answer-box correct">
            <div class="answer-box-label">✔ Correct Answer</div>
            <div class="answer-box-text">${correctPickText}</div>
          </div>
        </div>

        <div class="memory-note-box">
          <strong>💡 Memory & Exam Concept:</strong>
          ${q.explanation}
        </div>
      `;

      el.mistakesList.appendChild(card);
    });
  }

  function retakeCustomList(questionList, title) {
    soundFX.click();
    state.mode = 'practice'; // instant feedback for retakes helps learning!
    state.userAnswers = {};
    state.flagged.clear();
    state.currentIndex = 0;
    state.results = null;
    state.activeList = [...questionList];
    state.quizTypeTitle = title;

    clearInterval(state.timerInterval);
    state.timerSeconds = 0;
    updateTimerDisplay(0);
    state.timerInterval = setInterval(() => {
      state.timerSeconds++;
      updateTimerDisplay(state.timerSeconds);
    }, 1000);

    state.quizStartTime = Date.now();
    el.quizTitleBadge.textContent = state.quizTypeTitle;

    switchView('quiz');
    renderQuestion(0);
    renderPalette();
  }

  // Print Results
  el.printResultsBtn.addEventListener('click', () => {
    window.print();
  });

  // =========================================================================
  // QUESTION BANK & SEARCH BROWSER
  // =========================================================================
  function renderQuestionBank() {
    const filterCO = el.bankFilterCO.value;
    const query = el.bankSearchInput.value.trim().toLowerCase();

    el.bankList.innerHTML = '';

    let list = [];
    if (filterCO === 'ALL') {
      list = [
        ...state.allQuestions.CO1,
        ...state.allQuestions.CO2,
        ...state.allQuestions.CO3,
        ...state.allQuestions.CO4
      ];
    } else {
      list = [...state.allQuestions[filterCO]];
    }

    if (query) {
      list = list.filter(q => {
        return q.question.toLowerCase().includes(query) ||
          q.answerText.toLowerCase().includes(query) ||
          q.explanation.toLowerCase().includes(query) ||
          q.id.toLowerCase().includes(query);
      });
    }

    if (list.length === 0) {
      el.bankList.innerHTML = `
        <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
          <h3>No matching questions found</h3>
          <p>Try searching with another keyword or resetting the CO filter.</p>
        </div>
      `;
      return;
    }

    list.forEach(q => {
      const card = document.createElement('div');
      card.className = 'bank-item-card';

      let optionsHtml = '';
      ['A', 'B', 'C', 'D'].forEach(opt => {
        const isAns = opt === q.answer;
        optionsHtml += `
          <div class="bank-opt ${isAns ? 'is-answer' : ''}">
            <strong>${opt}.</strong> ${q.options[opt]} ${isAns ? '✔' : ''}
          </div>
        `;
      });

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <span class="badge badge-${q.co.toLowerCase()}">${q.co} • Q#${q.qNum}</span>
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--success);">Answer: ${q.answer}</span>
        </div>
        <div style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.75rem;">${q.question}</div>
        <div class="bank-opt-grid">${optionsHtml}</div>
        <div class="memory-note-box" style="margin-top: 0.75rem;">
          <strong>💡 Takeaway:</strong> ${q.explanation}
        </div>
      `;
      el.bankList.appendChild(card);
    });
  }

  el.bankSearchInput.addEventListener('input', renderQuestionBank);
  el.bankFilterCO.addEventListener('change', renderQuestionBank);

  // History Modal Handler
  el.historyBtn.addEventListener('click', () => {
    soundFX.click();
    renderHistoryModal();
    el.historyModal.classList.add('active');
  });

  el.closeHistoryBtn.addEventListener('click', () => {
    el.historyModal.classList.remove('active');
  });

  el.historyModal.addEventListener('click', (e) => {
    if (e.target === el.historyModal) el.historyModal.classList.remove('active');
  });

  el.clearHistoryBtn.addEventListener('click', () => {
    if (confirm("Clear all recorded quiz history?")) {
      localStorage.removeItem('geoquiz_history');
      renderHistoryModal();
    }
  });

  function renderHistoryModal() {
    const history = JSON.parse(localStorage.getItem('geoquiz_history') || '[]');
    if (history.length === 0) {
      el.historyList.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 2rem;">No previous quiz attempts recorded yet.</p>`;
      return;
    }

    el.historyList.innerHTML = history.map(item => `
      <div style="border-bottom: 1px solid var(--border-color); padding: 0.85rem 0;">
        <div style="display: flex; justify-content: space-between; font-weight: 700; margin-bottom: 0.25rem;">
          <span>${item.title}</span>
          <span style="color: var(--primary);">${item.score} (${item.percent}%)</span>
        </div>
        <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; justify-content: space-between; flex-wrap: wrap;">
          <span>📅 ${item.date}</span>
          <span>CO1: ${item.co1} | CO2: ${item.co2} | CO3: ${item.co3} | CO4: ${item.co4}</span>
        </div>
      </div>
    `).join('');
  }

  // Initialize
  initTheme();
})();
