# 🛰️ GeoQuiz Master — Remote Sensing, GIS & GPS Academic Quiz Portal

> **Interactive Academic Examination & Revision Web App for Remote Sensing, Digital Image Processing, GIS Principles & GPS Applications.**  
> Includes all **300 syllabus questions** organized Course Outcome-wise (CO1 to CO4) with **instant CO-wise marks calculation**, **segregated mistakes revision**, and **concept memory notes**.

🌐 **Live GitHub Pages URL**: [https://yakshithmekala.github.io/quizzes/](https://yakshithmekala.github.io/quizzes/)  
📦 **GitHub Repository**: [https://github.com/yakshithmekala/quizzes.git](https://github.com/yakshithmekala/quizzes.git)

---

## 🎯 Syllabus & Course Outcomes (CO) Structure

Each Course Outcome contains **75 meticulously verified multiple-choice questions** (Total: **300 Questions**):

| Course Outcome | Focus Area | Question Count | Core Topics Covered |
|---|---|:---:|---|
| **CO1** | **Remote Sensing Fundamentals, Sensors & Cartography** | 75 | EMR spectrum, active vs passive sensors, spatial/spectral/radiometric/temporal resolutions, satellites (Landsat, IRS, Cartosat, INSAT), maps, RF scales, projections (UTM), datum (WGS 84), GIS hardware/software. |
| **CO2** | **Digital Image Processing, Interpretation & Geomorphology** | 75 | Pixel fundamentals, radiometric/spatial resolution, contrast enhancement, False Colour Composites (FCC), visual interpretation elements (tone, texture, size, shadow, site, association), stereoscopy & parallax bar, contour lines, drainage patterns (dendritic, radial, trellis, centripetal), soil erosion types (sheet, rill, gully, aeolian). |
| **CO3** | **GIS Architecture, Spatial Data Models & Quality** | 75 | History of GIS (Roger Tomlinson, CGIS), GIS architecture, workflow (input, management, analysis, output), manual vs automatic digitizing, georeferencing & GCPs, conceptual/logical/physical modeling, raster vs vector models, topology & adjacency, snapping/trimming/merging, spatial & attribute errors, sliver polygons, metadata. |
| **CO4** | **GPS, Spatial Analysis & Environmental Modeling** | 75 | GPS 3-segment architecture (Space, Control, User), trilateration principle, ionospheric delay & multipath errors, DGPS, Land Use/Land Cover (LULC) & NDVI, DEM slope mapping, groundwater prospect mapping & lineaments, check dams & watershed management, water quality modeling (BOD, COD, QUAL2K), saltwater intrusion (SEAWAT), pipeline alignment (least-cost path), landfill site suitability (MCDA), landslide susceptibility mapping. |

---

## ✨ Key Features

### 1. 📝 Comprehensive Quiz Engine
- **Full Mock Exam**: Test all 300 questions simultaneously with a real-time exam timer.
- **Individual Unit Exams**: Dedicated 75-question tests for CO1, CO2, CO3, or CO4.
- **Custom Quiz Builder**: Select any combination of COs, choose question count (15, 25, 50, 75, 150, 300), shuffle questions, and configure countdown timers.
- **Dual Experience Modes**:
  - **Exam Mode**: Simulates real test conditions with questions palette, answer review, and submission.
  - **Practice Mode**: Provides instant answer feedback on click with explanation notes.

### 2. 📊 Instant CO-Wise Marks & Performance Scorecard
- Overall Score, Percentage, and Grade rating.
- **Detailed CO-Wise Breakdown Cards**:
  - CO1 Score (Marks, %, Rating, Correct, Wrong, Skipped)
  - CO2 Score (Marks, %, Rating, Correct, Wrong, Skipped)
  - CO3 Score (Marks, %, Rating, Correct, Wrong, Skipped)
  - CO4 Score (Marks, %, Rating, Correct, Wrong, Skipped)

### 3. 🧠 Segregated Mistakes & Memory Revision Center
- All incorrect and skipped questions are automatically **segregated CO-wise** into interactive filter tabs:
  - `All Mistakes` • `CO1 Mistakes` • `CO2 Mistakes` • `CO3 Mistakes` • `CO4 Mistakes` • `Flagged Questions`
- Side-by-side comparison for every mistake:
  - ❌ **Your Selected Option** (highlighted in red)
  - ✔ **Correct Verified Answer** (highlighted in green)
  - 💡 **Memory & Exam Concept Note**: High-yield takeaway explaining *why* the answer is correct so you retain it for exams.
- 🎯 **"Retake These Mistakes Now"**: Instantly launches a focused practice drill with *only* the questions you got wrong, allowing you to re-test until you reach 100%!

### 4. 🔍 300-Question Searchable Question Bank
- Real-time search across all 300 questions and concepts (e.g. search "LiDAR", "NDVI", "Tomlinson", "contour", "SEAWAT", "drainage").
- Filter by CO or browse all questions with answers highlighted.

### 5. 💻 Modern, Zero-Dependency Architecture
- **100% Pure Vanilla Web Stack**: HTML5, CSS3, JavaScript (ES6+).
- **Web Audio API**: Synthesizes soft UI sound effects and chimes without external audio files.
- **Local Storage Persistence**: Automatically remembers dark/light theme, sound preferences, quiz history, and weak topics.
- **Print & PDF Friendly**: Built-in print stylesheet to export mistake revision sheets.
- **Zero build tools required**: Run locally by opening `index.html` in any browser or deploy instantly on GitHub Pages.

---

## 🚀 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yakshithmekala/quizzes.git
   cd quizzes
   ```
2. Open `index.html` in your web browser:
   - On Windows: Double-click `index.html` or run:
     ```powershell
     Start-Process index.html
     ```
   - On macOS/Linux:
     ```bash
     open index.html   # macOS
     xdg-open index.html # Linux
     ```

---

## 🌐 Deploy to GitHub Pages (2 Clicks)

1. Push the code to your GitHub repository:
   ```bash
   git remote add origin https://github.com/yakshithmekala/quizzes.git
   git branch -M main
   git push -u origin main
   ```
2. Go to your repository on GitHub:
   - Click **Settings** → **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select Branch: **`main`** (or `master`) and folder: **`/ (root)`**, then click **Save**.
3. Within 1–2 minutes, your live site is published at:  
   👉 **`https://yakshithmekala.github.io/quizzes/`**

---

## 📄 License
Educational resource created for Remote Sensing, GIS, and GPS coursework and competitive exam preparation.
