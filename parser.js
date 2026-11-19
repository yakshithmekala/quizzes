const fs = require('fs');
const path = require('path');

const rawText = fs.readFileSync(path.join(__dirname, 'raw_questions.txt'), 'utf8');

const lines = rawText.split(/\r?\n/);
let currentCO = null;
const cos = {};
let currentQ = null;

// CO Descriptions / Titles
const coMeta = {
  CO1: {
    title: "CO1: Remote Sensing Fundamentals, Sensors & Cartography",
    description: "Covers remote sensing principles, EMR spectrum, active/passive sensors, resolutions (spatial, spectral, radiometric, temporal), satellites (IRS, Landsat, INSAT, Cartosat), maps, scales, projections, GCS/UTM, and GIS hardware/software basics."
  },
  CO2: {
    title: "CO2: Digital Image Processing, Interpretation & Terrain Analysis",
    description: "Covers DIP concepts, image enhancement, false colour composites (FCC), visual interpretation elements (tone, texture, size, pattern, shadow, site, association), stereoscopes, topography, contour lines, drainage patterns, and soil erosion types."
  },
  CO3: {
    title: "CO3: GIS Principles, Architecture, Data Models & Quality",
    description: "Covers history of GIS (Tomlinson, CGIS), architecture, functional elements, data input (digitizing, scanning), georeferencing, data modeling (conceptual, logical, physical), raster vs vector models, topology, editing, and spatial errors."
  },
  CO4: {
    title: "CO4: GPS, Spatial Analysis & Environmental Applications",
    description: "Covers GPS architecture (space, control, user segments), trilateration, DGPS, LULC classification & NDVI, terrain/slope mapping & DEM, groundwater prospecting, watershed management, water quality modeling (BOD/COD, QUAL2K), saltwater intrusion (SEAWAT), pipeline alignment, landfill site selection, and landslide susceptibility."
  }
};

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;

  if (line.match(/^CO[1-4]/i)) {
    if (currentQ && currentCO) {
      cos[currentCO].push(currentQ);
      currentQ = null;
    }
    currentCO = line.toUpperCase().match(/CO[1-4]/)[0];
    if (!cos[currentCO]) {
      cos[currentCO] = [];
    }
    continue;
  }

  // Question match: e.g. "1. What is remote sensing?"
  const qMatch = line.match(/^(\d+)\.\s*(.+)/);
  if (qMatch && currentCO) {
    if (currentQ) {
      cos[currentCO].push(currentQ);
    }
    currentQ = {
      id: `${currentCO}_Q${qMatch[1]}`,
      co: currentCO,
      qNum: parseInt(qMatch[1], 10),
      question: qMatch[2].trim(),
      options: {},
      answer: null,
      answerText: ""
    };
    continue;
  }

  // Option match: e.g. "A. Collecting information..."
  const optMatch = line.match(/^([A-D])\.\s*(.+)/);
  if (optMatch && currentQ) {
    currentQ.options[optMatch[1]] = optMatch[2].trim();
    continue;
  }

  // Answer match: e.g. "ANSWER: A"
  const ansMatch = line.match(/^ANSWER:\s*([A-D])/i);
  if (ansMatch && currentQ) {
    currentQ.answer = ansMatch[1].toUpperCase();
    currentQ.answerText = currentQ.options[currentQ.answer] || "";
    continue;
  }
}

if (currentQ && currentCO) {
  cos[currentCO].push(currentQ);
}

console.log("Parsed CO Counts:");
let totalCount = 0;
for (const [co, list] of Object.entries(cos)) {
  console.log(`${co}: ${list.length} questions`);
  totalCount += list.length;
}
console.log(`Total questions parsed: ${totalCount}`);

// Sanity checks
let hasError = false;
for (const [co, list] of Object.entries(cos)) {
  if (list.length !== 75) {
    console.error(`ERROR: ${co} does not have exactly 75 questions! Has: ${list.length}`);
    hasError = true;
  }
  list.forEach((q, idx) => {
    if (q.qNum !== idx + 1) {
      console.error(`ERROR in ${co}: question index mismatch! Expected ${idx + 1}, got ${q.qNum}`);
      hasError = true;
    }
    if (!q.options.A || !q.options.B || !q.options.C || !q.options.D) {
      console.error(`ERROR in ${q.id}: Missing options!`, q.options);
      hasError = true;
    }
    if (!q.answer) {
      console.error(`ERROR in ${q.id}: Missing answer!`);
      hasError = true;
    }
    q.answerText = q.options[q.answer];
  });
}

if (hasError) {
  process.exit(1);
}

// Generate complete structured dataset
const dataset = {
  meta: coMeta,
  counts: {
    total: totalCount,
    perCO: {
      CO1: cos.CO1.length,
      CO2: cos.CO2.length,
      CO3: cos.CO3.length,
      CO4: cos.CO4.length
    }
  },
  questions: cos
};

fs.writeFileSync(path.join(__dirname, 'questions.json'), JSON.stringify(dataset, null, 2), 'utf8');
fs.writeFileSync(path.join(__dirname, 'questions.js'), `window.QUIZ_DATA = ${JSON.stringify(dataset, null, 2)};`, 'utf8');

console.log("Successfully generated questions.json and questions.js!");
