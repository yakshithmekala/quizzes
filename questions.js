window.QUIZ_DATA = {
  "meta": {
    "CO1": {
      "title": "CO1: Remote Sensing Fundamentals, Sensors & Cartography",
      "description": "Covers remote sensing principles, EMR spectrum, active/passive sensors, resolutions (spatial, spectral, radiometric, temporal), satellites (IRS, Landsat, INSAT, Cartosat), maps, scales, projections, GCS/UTM, and GIS hardware/software basics."
    },
    "CO2": {
      "title": "CO2: Digital Image Processing, Interpretation & Terrain Analysis",
      "description": "Covers DIP concepts, image enhancement, false colour composites (FCC), visual interpretation elements (tone, texture, size, pattern, shadow, site, association), stereoscopes, topography, contour lines, drainage patterns, and soil erosion types."
    },
    "CO3": {
      "title": "CO3: GIS Principles, Architecture, Data Models & Quality",
      "description": "Covers history of GIS (Tomlinson, CGIS), architecture, functional elements, data input (digitizing, scanning), georeferencing, data modeling (conceptual, logical, physical), raster vs vector models, topology, editing, and spatial errors."
    },
    "CO4": {
      "title": "CO4: GPS, Spatial Analysis & Environmental Applications",
      "description": "Covers GPS architecture (space, control, user segments), trilateration, DGPS, LULC classification & NDVI, terrain/slope mapping & DEM, groundwater prospecting, watershed management, water quality modeling (BOD/COD, QUAL2K), saltwater intrusion (SEAWAT), pipeline alignment, landfill site selection, and landslide susceptibility."
    }
  },
  "counts": {
    "total": 300,
    "perCO": {
      "CO1": 75,
      "CO2": 75,
      "CO3": 75,
      "CO4": 75
    }
  },
  "questions": {
    "CO1": [
      {
        "id": "CO1_Q1",
        "co": "CO1",
        "qNum": 1,
        "question": "What is remote sensing?",
        "options": {
          "A": "Collecting information about objects without direct physical contact",
          "B": "Measuring objects using a physical ruler",
          "C": "Collecting soil samples manually",
          "D": "Surveying land using only measuring tapes"
        },
        "answer": "A",
        "answerText": "Collecting information about objects without direct physical contact",
        "explanation": "Remote sensing is defined as the science and art of gathering data about an object, area, or phenomenon without making direct physical contact with it."
      },
      {
        "id": "CO1_Q2",
        "co": "CO1",
        "qNum": 2,
        "question": "Which technology is commonly used in remote sensing?",
        "options": {
          "A": "Printing technology",
          "B": "Satellite and airborne sensors",
          "C": "Audio recording systems",
          "D": "Mechanical calculators"
        },
        "answer": "B",
        "answerText": "Satellite and airborne sensors",
        "explanation": "Remote sensing platforms carry airborne sensors (aircraft, drones) and spaceborne sensors (earth observation satellites)."
      },
      {
        "id": "CO1_Q3",
        "co": "CO1",
        "qNum": 3,
        "question": "What is the first major component of the remote sensing process?",
        "options": {
          "A": "Image classification",
          "B": "Data interpretation",
          "C": "Energy source or illumination",
          "D": "Map printing"
        },
        "answer": "C",
        "answerText": "Energy source or illumination",
        "explanation": "Every remote sensing system requires an energy source or illumination to emit electromagnetic radiation towards the target or illuminate it."
      },
      {
        "id": "CO1_Q4",
        "co": "CO1",
        "qNum": 4,
        "question": "Which of the following is the correct general sequence of remote sensing?",
        "options": {
          "A": "Classification, energy source, detection and interpretation",
          "B": "Image display, printing, energy source and storage",
          "C": "Interpretation, mapping, energy source and printing",
          "D": "Energy source, atmospheric interaction, target interaction, detection and processing"
        },
        "answer": "D",
        "answerText": "Energy source, atmospheric interaction, target interaction, detection and processing",
        "explanation": "Sequence of remote sensing: Energy Source -> Propagation through atmosphere -> Target Interaction -> Sensor Recording -> Transmission & Processing -> Interpretation & Application."
      },
      {
        "id": "CO1_Q5",
        "co": "CO1",
        "qNum": 5,
        "question": "What is the main function of a remote sensing sensor?",
        "options": {
          "A": "Detecting and recording electromagnetic energy",
          "B": "Constructing roads",
          "C": "Measuring population directly",
          "D": "Producing electricity"
        },
        "answer": "A",
        "answerText": "Detecting and recording electromagnetic energy",
        "explanation": "A remote sensing sensor's core job is to detect, collect, and record reflected or emitted electromagnetic radiation across specific wavebands."
      },
      {
        "id": "CO1_Q6",
        "co": "CO1",
        "qNum": 6,
        "question": "Which of the following is an example of remote sensing?",
        "options": {
          "A": "Measuring soil using a laboratory balance",
          "B": "Observing forest cover using satellite imagery",
          "C": "Measuring land using a chain",
          "D": "Collecting water samples manually"
        },
        "answer": "B",
        "answerText": "Observing forest cover using satellite imagery",
        "explanation": "Observing forest cover or deforestation from satellite imagery is a prime example of spaceborne remote sensing."
      },
      {
        "id": "CO1_Q7",
        "co": "CO1",
        "qNum": 7,
        "question": "What is passive remote sensing?",
        "options": {
          "A": "Remote sensing using artificial energy transmitted by a sensor",
          "B": "Remote sensing without electromagnetic radiation",
          "C": "Remote sensing using naturally available energy",
          "D": "Remote sensing using only sound waves"
        },
        "answer": "C",
        "answerText": "Remote sensing using naturally available energy",
        "explanation": "Passive remote sensing detects naturally occurring energy (principally solar radiation reflected during daytime or thermal energy emitted by Earth)."
      },
      {
        "id": "CO1_Q8",
        "co": "CO1",
        "qNum": 8,
        "question": "Which of the following is an example of passive remote sensing?",
        "options": {
          "A": "RADAR",
          "B": "LiDAR",
          "C": "SONAR",
          "D": "Optical satellite imaging using reflected sunlight"
        },
        "answer": "D",
        "answerText": "Optical satellite imaging using reflected sunlight",
        "explanation": "Optical satellite imaging uses reflected sunlight from Earth's features, making it passive remote sensing."
      },
      {
        "id": "CO1_Q9",
        "co": "CO1",
        "qNum": 9,
        "question": "What is active remote sensing?",
        "options": {
          "A": "A system in which the sensor transmits its own energy towards a target",
          "B": "A system that uses only natural sunlight",
          "C": "A system that does not require a sensor",
          "D": "A system that collects only visible light"
        },
        "answer": "A",
        "answerText": "A system in which the sensor transmits its own energy towards a target",
        "explanation": "Active remote sensing systems provide their own illumination source by transmitting a controlled beam of EMR and measuring the reflected/scattered return."
      },
      {
        "id": "CO1_Q10",
        "co": "CO1",
        "qNum": 10,
        "question": "Which of the following is an example of active remote sensing?",
        "options": {
          "A": "Conventional aerial photography using sunlight",
          "B": "RADAR",
          "C": "Natural colour photography",
          "D": "Passive thermal imaging"
        },
        "answer": "B",
        "answerText": "RADAR",
        "explanation": "RADAR sends microwave pulses and measures backscatter, serving as a textbook active remote sensing system."
      },
      {
        "id": "CO1_Q11",
        "co": "CO1",
        "qNum": 11,
        "question": "Which remote sensing system can generally operate during both day and night?",
        "options": {
          "A": "Passive visible imaging",
          "B": "Conventional colour photography",
          "C": "Active RADAR",
          "D": "Sunlight-based photography"
        },
        "answer": "C",
        "answerText": "Active RADAR",
        "explanation": "Active RADAR transmits its own energy pulses and operates at microwave frequencies that work day and night regardless of sunlight."
      },
      {
        "id": "CO1_Q12",
        "co": "CO1",
        "qNum": 12,
        "question": "Which type of remote sensing is commonly affected by cloud cover in optical satellite imagery?",
        "options": {
          "A": "Active microwave sensing",
          "B": "RADAR imaging",
          "C": "LiDAR ranging",
          "D": "Passive optical remote sensing"
        },
        "answer": "D",
        "answerText": "Passive optical remote sensing",
        "explanation": "Visible and near-infrared optical wavelengths are scattered and blocked by clouds and fog, heavily degrading passive optical imagery."
      },
      {
        "id": "CO1_Q13",
        "co": "CO1",
        "qNum": 13,
        "question": "What is the full form of RADAR?",
        "options": {
          "A": "Radio Detection and Ranging",
          "B": "Remote Data Recording",
          "C": "Radiation Detection and Recording",
          "D": "Radio Digital Analysis and Research"
        },
        "answer": "A",
        "answerText": "Radio Detection and Ranging",
        "explanation": "RADAR is an acronym for RAdio Detection And Ranging."
      },
      {
        "id": "CO1_Q14",
        "co": "CO1",
        "qNum": 14,
        "question": "What is the full form of LiDAR?",
        "options": {
          "A": "Light Digital Analysis and Recording",
          "B": "Light Detection and Ranging",
          "C": "Linear Data Recording",
          "D": "Land Information Detection and Research"
        },
        "answer": "B",
        "answerText": "Light Detection and Ranging",
        "explanation": "LiDAR is an acronym for Light Detection And Ranging, typically operating with pulsed lasers."
      },
      {
        "id": "CO1_Q15",
        "co": "CO1",
        "qNum": 15,
        "question": "What is the electromagnetic spectrum?",
        "options": {
          "A": "A collection of geographical maps",
          "B": "A range of sound frequencies",
          "C": "The complete range of electromagnetic radiation according to wavelength or frequency",
          "D": "A collection of satellite images"
        },
        "answer": "C",
        "answerText": "The complete range of electromagnetic radiation according to wavelength or frequency",
        "explanation": "The Electromagnetic Spectrum (EMS) represents the continuum of all electromagnetic waves classified by frequency or wavelength."
      },
      {
        "id": "CO1_Q16",
        "co": "CO1",
        "qNum": 16,
        "question": "Which electromagnetic radiation has the shortest wavelength?",
        "options": {
          "A": "Radio waves",
          "B": "Microwaves",
          "C": "Infrared radiation",
          "D": "Gamma rays"
        },
        "answer": "D",
        "answerText": "Gamma rays",
        "explanation": "Gamma rays occupy the highest frequency (>10^19 Hz) and shortest wavelength (<0.01 nm) end of the electromagnetic spectrum."
      },
      {
        "id": "CO1_Q17",
        "co": "CO1",
        "qNum": 17,
        "question": "Which part of the electromagnetic spectrum is visible to the human eye?",
        "options": {
          "A": "Visible light",
          "B": "Microwave radiation",
          "C": "Gamma radiation",
          "D": "X-rays"
        },
        "answer": "A",
        "answerText": "Visible light",
        "explanation": "The visible light spectrum (0.4 to 0.7 micrometers) is the only narrow window of EMR visible to human vision."
      },
      {
        "id": "CO1_Q18",
        "co": "CO1",
        "qNum": 18,
        "question": "Which electromagnetic region is commonly used for thermal remote sensing?",
        "options": {
          "A": "Ultraviolet",
          "B": "Thermal infrared",
          "C": "Gamma rays",
          "D": "Radio waves"
        },
        "answer": "B",
        "answerText": "Thermal infrared",
        "explanation": "Thermal infrared (typically 3–5 µm and 8–14 µm) is emitted by terrestrial objects as heat energy and detected by thermal scanners."
      },
      {
        "id": "CO1_Q19",
        "co": "CO1",
        "qNum": 19,
        "question": "Which electromagnetic region is commonly used in RADAR remote sensing?",
        "options": {
          "A": "Visible",
          "B": "Ultraviolet",
          "C": "Microwave",
          "D": "X-ray"
        },
        "answer": "C",
        "answerText": "Microwave",
        "explanation": "RADAR systems use microwave radiation (wavelengths from 1 mm to 1 meter) which penetrates clouds, smoke, and light rain."
      },
      {
        "id": "CO1_Q20",
        "co": "CO1",
        "qNum": 20,
        "question": "Which wavelength region is strongly absorbed by healthy green vegetation and useful for vegetation analysis?",
        "options": {
          "A": "Blue",
          "B": "Green",
          "C": "Red",
          "D": "Near-infrared"
        },
        "answer": "C",
        "answerText": "Red",
        "explanation": "Healthy green leaves strongly absorb red light (~0.66 µm) due to chlorophyll pigments for photosynthesis."
      },
      {
        "id": "CO1_Q21",
        "co": "CO1",
        "qNum": 21,
        "question": "Which wavelength region is strongly reflected by healthy vegetation?",
        "options": {
          "A": "Near-infrared",
          "B": "X-rays",
          "C": "Gamma rays",
          "D": "Ultraviolet"
        },
        "answer": "A",
        "answerText": "Near-infrared",
        "explanation": "Near-infrared (NIR, 0.7–1.1 µm) is strongly scattered and reflected by the spongy mesophyll internal structure of healthy leaves."
      },
      {
        "id": "CO1_Q22",
        "co": "CO1",
        "qNum": 22,
        "question": "What is the approximate wavelength range of visible light?",
        "options": {
          "A": "1–10 micrometres",
          "B": "0.4–0.7 micrometres",
          "C": "10–100 micrometres",
          "D": "100–1000 micrometres"
        },
        "answer": "B",
        "answerText": "0.4–0.7 micrometres",
        "explanation": "The visible spectrum spans approximately 0.4 µm (violet/blue) to 0.7 µm (red) in wavelength."
      },
      {
        "id": "CO1_Q23",
        "co": "CO1",
        "qNum": 23,
        "question": "What does spatial resolution describe in remote sensing?",
        "options": {
          "A": "Number of spectral bands",
          "B": "Frequency of satellite revisit",
          "C": "Ground area represented by one pixel",
          "D": "Number of brightness levels"
        },
        "answer": "C",
        "answerText": "Ground area represented by one pixel",
        "explanation": "Spatial resolution specifies the ground area covered by an individual pixel, governing the level of fine spatial detail."
      },
      {
        "id": "CO1_Q24",
        "co": "CO1",
        "qNum": 24,
        "question": "Which resolution refers to the ability of a sensor to distinguish different wavelength regions?",
        "options": {
          "A": "Spatial resolution",
          "B": "Temporal resolution",
          "C": "Radiometric resolution",
          "D": "Spectral resolution"
        },
        "answer": "D",
        "answerText": "Spectral resolution",
        "explanation": "Spectral resolution refers to the sensor's capacity to discriminate between different wavelength regions (number and narrowness of bands)."
      },
      {
        "id": "CO1_Q25",
        "co": "CO1",
        "qNum": 25,
        "question": "What does radiometric resolution indicate?",
        "options": {
          "A": "The ability of a sensor to distinguish different levels of energy intensity",
          "B": "The geographical area covered by a satellite",
          "C": "The frequency of image acquisition",
          "D": "The number of geographical features"
        },
        "answer": "A",
        "answerText": "The ability of a sensor to distinguish different levels of energy intensity",
        "explanation": "Radiometric resolution indicates the sensor's sensitivity in distinguishing subtle differences in electromagnetic energy intensity (bit depth)."
      },
      {
        "id": "CO1_Q26",
        "co": "CO1",
        "qNum": 26,
        "question": "What is temporal resolution?",
        "options": {
          "A": "The size of a pixel",
          "B": "The frequency with which a satellite revisits the same area",
          "C": "The number of spectral bands",
          "D": "The brightness of an image"
        },
        "answer": "B",
        "answerText": "The frequency with which a satellite revisits the same area",
        "explanation": "Temporal resolution is the revisit period—the elapsed time between successive satellite observations over the exact same geographic scene."
      },
      {
        "id": "CO1_Q27",
        "co": "CO1",
        "qNum": 27,
        "question": "Which satellite resolution determines the smallest feature that can be distinguished spatially?",
        "options": {
          "A": "Temporal resolution",
          "B": "Radiometric resolution",
          "C": "Spatial resolution",
          "D": "Spectral resolution"
        },
        "answer": "C",
        "answerText": "Spatial resolution",
        "explanation": "Spatial resolution dictates the minimum spatial footprint distinguishable as a distinct entity on the ground."
      },
      {
        "id": "CO1_Q28",
        "co": "CO1",
        "qNum": 28,
        "question": "Which satellite has been widely used for land use and land cover mapping?",
        "options": {
          "A": "INSAT",
          "B": "GPS",
          "C": "GOES",
          "D": "Landsat"
        },
        "answer": "D",
        "answerText": "Landsat",
        "explanation": "The Landsat satellite program (USGS/NASA) has provided continuous multispectral Earth observation since 1972."
      },
      {
        "id": "CO1_Q29",
        "co": "CO1",
        "qNum": 29,
        "question": "Which Indian satellite series is widely used for natural resource monitoring and remote sensing?",
        "options": {
          "A": "IRS",
          "B": "INSAT",
          "C": "GSAT",
          "D": "NAVIC"
        },
        "answer": "A",
        "answerText": "IRS",
        "explanation": "IRS (Indian Remote Sensing) satellites developed by ISRO are India's premier constellation for earth resources monitoring."
      },
      {
        "id": "CO1_Q30",
        "co": "CO1",
        "qNum": 30,
        "question": "Which satellite system is primarily designed for weather observation?",
        "options": {
          "A": "GPS",
          "B": "INSAT",
          "C": "Landsat",
          "D": "Cartosat"
        },
        "answer": "B",
        "answerText": "INSAT",
        "explanation": "INSAT (Indian National Satellite System) is placed in geostationary orbit primarily for telecommunications and continuous meteorological observation."
      },
      {
        "id": "CO1_Q31",
        "co": "CO1",
        "qNum": 31,
        "question": "Which satellite mission is associated with high-resolution cartographic applications in India?",
        "options": {
          "A": "INSAT",
          "B": "NOAA",
          "C": "Cartosat",
          "D": "GOES"
        },
        "answer": "C",
        "answerText": "Cartosat",
        "explanation": "Cartosat is ISRO's specialized high-resolution earth observation satellite series designed for cartographic mapping and terrain modeling."
      },
      {
        "id": "CO1_Q32",
        "co": "CO1",
        "qNum": 32,
        "question": "Which sensor is commonly used to collect microwave backscatter data?",
        "options": {
          "A": "Panchromatic camera",
          "B": "Thermal scanner",
          "C": "Multispectral optical scanner",
          "D": "Synthetic Aperture Radar"
        },
        "answer": "D",
        "answerText": "Synthetic Aperture Radar",
        "explanation": "Synthetic Aperture Radar (SAR) sensors actively transmit microwaves and record radar backscatter intensity and coherence."
      },
      {
        "id": "CO1_Q33",
        "co": "CO1",
        "qNum": 33,
        "question": "What is a multispectral sensor?",
        "options": {
          "A": "A sensor that records data in multiple wavelength bands",
          "B": "A sensor that records only sound waves",
          "C": "A sensor that measures only elevation",
          "D": "A sensor that records only one visible colour"
        },
        "answer": "A",
        "answerText": "A sensor that records data in multiple wavelength bands",
        "explanation": "Multispectral sensors record reflected or emitted radiation simultaneously across multiple discrete spectral bands."
      },
      {
        "id": "CO1_Q34",
        "co": "CO1",
        "qNum": 34,
        "question": "What is a panchromatic image?",
        "options": {
          "A": "An image containing only thermal information",
          "B": "A single broad spectral band image, commonly displayed in grayscale",
          "C": "An image containing only infrared information",
          "D": "An image containing only elevation values"
        },
        "answer": "B",
        "answerText": "A single broad spectral band image, commonly displayed in grayscale",
        "explanation": "A panchromatic sensor captures a broad wavelength band (typically across visible light) in single-channel grayscale with higher spatial resolution."
      },
      {
        "id": "CO1_Q35",
        "co": "CO1",
        "qNum": 35,
        "question": "What is the primary purpose of a map?",
        "options": {
          "A": "Recording audio information",
          "B": "Measuring computer speed",
          "C": "Representing geographical information on a flat surface",
          "D": "Measuring atmospheric pressure"
        },
        "answer": "C",
        "answerText": "Representing geographical information on a flat surface",
        "explanation": "A map is a scaled graphical depiction of Earth's spatial features and phenomena projected onto a flat plane."
      },
      {
        "id": "CO1_Q36",
        "co": "CO1",
        "qNum": 36,
        "question": "Why is a map considered a model of the real world?",
        "options": {
          "A": "It contains every real-world detail",
          "B": "It represents objects at their actual size",
          "C": "It has no geographical limitations",
          "D": "It simplifies and represents selected real-world features"
        },
        "answer": "D",
        "answerText": "It simplifies and represents selected real-world features",
        "explanation": "Maps are models because they selectively simplify, symbolize, and abstract complex real-world landscapes for human comprehension."
      },
      {
        "id": "CO1_Q37",
        "co": "CO1",
        "qNum": 37,
        "question": "Which of the following is an essential element of a map?",
        "options": {
          "A": "Scale",
          "B": "Computer processor",
          "C": "Keyboard",
          "D": "Internet browser"
        },
        "answer": "A",
        "answerText": "Scale",
        "explanation": "Scale is an indispensable cartographic element establishing the proportional distance ratio between the map and the ground."
      },
      {
        "id": "CO1_Q38",
        "co": "CO1",
        "qNum": 38,
        "question": "What is the main purpose of a map legend?",
        "options": {
          "A": "Showing the map production date only",
          "B": "Explaining the symbols and colours used on a map",
          "C": "Calculating map scale automatically",
          "D": "Measuring geographical coordinates"
        },
        "answer": "B",
        "answerText": "Explaining the symbols and colours used on a map",
        "explanation": "A map legend defines and interprets all symbols, patterns, line weights, and color ramps employed on the map."
      },
      {
        "id": "CO1_Q39",
        "co": "CO1",
        "qNum": 39,
        "question": "What does a north arrow indicate on a map?",
        "options": {
          "A": "Map scale",
          "B": "Elevation",
          "C": "Direction of north",
          "D": "Population density"
        },
        "answer": "C",
        "answerText": "Direction of north",
        "explanation": "The north arrow provides orientation by showing true geographic north on the map plane."
      },
      {
        "id": "CO1_Q40",
        "co": "CO1",
        "qNum": 40,
        "question": "What is a map projection?",
        "options": {
          "A": "A method of storing attribute data",
          "B": "A method of measuring rainfall",
          "C": "A technique for classifying satellite images",
          "D": "A mathematical transformation of Earth's curved surface onto a flat plane"
        },
        "answer": "D",
        "answerText": "A mathematical transformation of Earth's curved surface onto a flat plane",
        "explanation": "A map projection is a mathematical algorithm that transforms 3D curved spherical/ellipsoidal coordinates onto a flat 2D surface."
      },
      {
        "id": "CO1_Q41",
        "co": "CO1",
        "qNum": 41,
        "question": "Which of the following is a basic spatial element in cartography?",
        "options": {
          "A": "Point",
          "B": "Keyboard",
          "C": "Printer",
          "D": "Processor"
        },
        "answer": "A",
        "answerText": "Point",
        "explanation": "Points, lines, and polygons constitute the fundamental geometric building blocks in 2D cartography and vector GIS."
      },
      {
        "id": "CO1_Q42",
        "co": "CO1",
        "qNum": 42,
        "question": "Which spatial element is most suitable for representing a road on a map?",
        "options": {
          "A": "Point",
          "B": "Line",
          "C": "Polygon",
          "D": "Raster cell"
        },
        "answer": "B",
        "answerText": "Line",
        "explanation": "Linear features lacking measurable width at given map scales (roads, canals, rivers) are modeled as lines (polylines)."
      },
      {
        "id": "CO1_Q43",
        "co": "CO1",
        "qNum": 43,
        "question": "Which spatial element is suitable for representing a lake boundary and its area?",
        "options": {
          "A": "Point",
          "B": "Line",
          "C": "Polygon",
          "D": "Coordinate"
        },
        "answer": "C",
        "answerText": "Polygon",
        "explanation": "Enclosed two-dimensional spatial phenomena with boundaries and areas (lakes, parcels, administrative zones) are polygons."
      },
      {
        "id": "CO1_Q44",
        "co": "CO1",
        "qNum": 44,
        "question": "What is a geographical coordinate?",
        "options": {
          "A": "A map colour",
          "B": "A satellite name",
          "C": "A type of map symbol",
          "D": "A numerical value representing a location on Earth's surface"
        },
        "answer": "D",
        "answerText": "A numerical value representing a location on Earth's surface",
        "explanation": "Geographic coordinates are numerical pairs (latitude, longitude) specifying exact spatial locations on Earth's surface."
      },
      {
        "id": "CO1_Q45",
        "co": "CO1",
        "qNum": 45,
        "question": "Which two coordinates are commonly used to identify locations on Earth?",
        "options": {
          "A": "Latitude and longitude",
          "B": "Height and weight",
          "C": "Distance and speed",
          "D": "Length and temperature"
        },
        "answer": "A",
        "answerText": "Latitude and longitude",
        "explanation": "Latitude (north-south) and longitude (east-west) form the universal coordinate reference pair for Earth."
      },
      {
        "id": "CO1_Q46",
        "co": "CO1",
        "qNum": 46,
        "question": "What does latitude measure?",
        "options": {
          "A": "Distance east or west of the Prime Meridian",
          "B": "Angular distance north or south of the Equator",
          "C": "Height above sea level",
          "D": "Distance between two cities"
        },
        "answer": "B",
        "answerText": "Angular distance north or south of the Equator",
        "explanation": "Latitude is the angular distance measured in degrees north or south from the Equator (0° at equator to 90° at poles)."
      },
      {
        "id": "CO1_Q47",
        "co": "CO1",
        "qNum": 47,
        "question": "What does longitude measure?",
        "options": {
          "A": "Distance north of the Equator",
          "B": "Height above sea level",
          "C": "Angular distance east or west of the Prime Meridian",
          "D": "Slope of the land"
        },
        "answer": "C",
        "answerText": "Angular distance east or west of the Prime Meridian",
        "explanation": "Longitude is the angular distance in degrees east or west from the Prime Meridian passing through Greenwich, England (0° to 180°)."
      },
      {
        "id": "CO1_Q48",
        "co": "CO1",
        "qNum": 48,
        "question": "What is map scale?",
        "options": {
          "A": "The colour arrangement of a map",
          "B": "The geographical direction of a map",
          "C": "The elevation of a map",
          "D": "The relationship between map distance and corresponding ground distance"
        },
        "answer": "D",
        "answerText": "The relationship between map distance and corresponding ground distance",
        "explanation": "Map scale mathematically links distance measured between two points on a map to the true horizontal distance on the ground."
      },
      {
        "id": "CO1_Q49",
        "co": "CO1",
        "qNum": 49,
        "question": "Which of the following represents a large-scale map?",
        "options": {
          "A": "1:10,000",
          "B": "1:1,000,000",
          "C": "1:5,000,000",
          "D": "1:10,000,000"
        },
        "answer": "A",
        "answerText": "1:10,000",
        "explanation": "1:10,000 is a large scale because 1/10,000 is a large fraction compared to 1/1,000,000, displaying fine local details."
      },
      {
        "id": "CO1_Q50",
        "co": "CO1",
        "qNum": 50,
        "question": "Which map scale represents the smallest geographical area with the greatest relative detail among the following?",
        "options": {
          "A": "1:1,000,000",
          "B": "1:5,000",
          "C": "1:500,000",
          "D": "1:2,000,000"
        },
        "answer": "B",
        "answerText": "1:5,000",
        "explanation": "1:5,000 represents the largest scale here (largest numerical fraction), giving the greatest spatial detail for a small footprint."
      },
      {
        "id": "CO1_Q51",
        "co": "CO1",
        "qNum": 51,
        "question": "What is a representative fraction (RF)?",
        "options": {
          "A": "A map colour code",
          "B": "A geographical coordinate",
          "C": "A numerical expression of the relationship between map distance and ground distance",
          "D": "A satellite frequency"
        },
        "answer": "C",
        "answerText": "A numerical expression of the relationship between map distance and ground distance",
        "explanation": "A Representative Fraction (RF) is a unitless ratio (e.g., 1:50,000) where 1 unit on map = 50,000 equivalent units on the ground."
      },
      {
        "id": "CO1_Q52",
        "co": "CO1",
        "qNum": 52,
        "question": "If the map scale is 1:50,000, what ground distance is represented by 1 cm on the map?",
        "options": {
          "A": "50 metres",
          "B": "5 kilometres",
          "C": "500 kilometres",
          "D": "500 metres"
        },
        "answer": "D",
        "answerText": "500 metres",
        "explanation": "Scale 1:50,000: 1 cm on map = 50,000 cm on ground = 500 meters (0.5 km)."
      },
      {
        "id": "CO1_Q53",
        "co": "CO1",
        "qNum": 53,
        "question": "What happens when a large-scale map is used?",
        "options": {
          "A": "More geographical detail is generally displayed",
          "B": "A larger geographical area is always displayed",
          "C": "Less detail is always displayed",
          "D": "Ground features disappear"
        },
        "answer": "A",
        "answerText": "More geographical detail is generally displayed",
        "explanation": "Large-scale maps show smaller geographic regions with detailed features (e.g., building footprints and street layouts)."
      },
      {
        "id": "CO1_Q54",
        "co": "CO1",
        "qNum": 54,
        "question": "Which type of map scale uses a graphical line divided into ground-distance units?",
        "options": {
          "A": "Representative fraction",
          "B": "Bar scale",
          "C": "Verbal scale",
          "D": "Coordinate scale"
        },
        "answer": "B",
        "answerText": "Bar scale",
        "explanation": "A bar scale (graphic scale) is a subdivided line representing ground distance; it scales proportionally when a map is resized."
      },
      {
        "id": "CO1_Q55",
        "co": "CO1",
        "qNum": 55,
        "question": "What is a spatial referencing system?",
        "options": {
          "A": "A method of image enhancement",
          "B": "A method of printing maps",
          "C": "A system used to identify geographical locations using coordinates and reference information",
          "D": "A system for measuring computer speed"
        },
        "answer": "C",
        "answerText": "A system used to identify geographical locations using coordinates and reference information",
        "explanation": "A spatial referencing system defines coordinates, reference datum, and projection parameters to locate geographic positions."
      },
      {
        "id": "CO1_Q56",
        "co": "CO1",
        "qNum": 56,
        "question": "What is a Geographic Coordinate System (GCS)?",
        "options": {
          "A": "A system based only on pixels",
          "B": "A system based on road networks",
          "C": "A system that uses only local distances",
          "D": "A coordinate system using latitude and longitude on a reference ellipsoid"
        },
        "answer": "D",
        "answerText": "A coordinate system using latitude and longitude on a reference ellipsoid",
        "explanation": "A Geographic Coordinate System (GCS) uses angular coordinates (latitude and longitude in degrees) on a 3D ellipsoidal model."
      },
      {
        "id": "CO1_Q57",
        "co": "CO1",
        "qNum": 57,
        "question": "What is a Projected Coordinate System?",
        "options": {
          "A": "A coordinate system that represents locations on a flat, two-dimensional surface",
          "B": "A system that stores only satellite images",
          "C": "A system that uses only latitude",
          "D": "A system that does not use coordinates"
        },
        "answer": "A",
        "answerText": "A coordinate system that represents locations on a flat, two-dimensional surface",
        "explanation": "A Projected Coordinate System (PCS) projects 3D coordinates onto a flat 2D Cartesian grid (Easting and Northing in meters)."
      },
      {
        "id": "CO1_Q58",
        "co": "CO1",
        "qNum": 58,
        "question": "What is the full form of UTM?",
        "options": {
          "A": "Universal Terrain Mapping",
          "B": "Universal Transverse Mercator",
          "C": "United Topographic Model",
          "D": "Universal Tracking Method"
        },
        "answer": "B",
        "answerText": "Universal Transverse Mercator",
        "explanation": "UTM stands for Universal Transverse Mercator coordinate system."
      },
      {
        "id": "CO1_Q59",
        "co": "CO1",
        "qNum": 59,
        "question": "Which projection is used by the Universal Transverse Mercator coordinate system?",
        "options": {
          "A": "Mercator cylindrical projection",
          "B": "Conic projection",
          "C": "Transverse Mercator projection",
          "D": "Azimuthal projection"
        },
        "answer": "C",
        "answerText": "Transverse Mercator projection",
        "explanation": "The UTM system uses the Transverse Mercator conformal cylindrical projection, dividing the globe into 60 zones of 6° longitude."
      },
      {
        "id": "CO1_Q60",
        "co": "CO1",
        "qNum": 60,
        "question": "What is a datum in a spatial referencing system?",
        "options": {
          "A": "A type of map symbol",
          "B": "A satellite sensor",
          "C": "A method of image classification",
          "D": "A reference framework used to define positions on Earth"
        },
        "answer": "D",
        "answerText": "A reference framework used to define positions on Earth",
        "explanation": "A geodetic datum specifies the origin, orientation, and reference ellipsoid representing Earth's geometric size and shape."
      },
      {
        "id": "CO1_Q61",
        "co": "CO1",
        "qNum": 61,
        "question": "Which of the following is an example of a geodetic datum?",
        "options": {
          "A": "WGS 84",
          "B": "NDVI",
          "C": "RADAR",
          "D": "LiDAR"
        },
        "answer": "A",
        "answerText": "WGS 84",
        "explanation": "WGS 84 (World Geodetic System 1984) is the globally accepted standard datum used worldwide and natively in GPS."
      },
      {
        "id": "CO1_Q62",
        "co": "CO1",
        "qNum": 62,
        "question": "What is the primary role of computers in map production?",
        "options": {
          "A": "Measuring rainfall manually",
          "B": "Storing, processing, analysing and displaying geographical information",
          "C": "Constructing physical roads",
          "D": "Collecting soil samples"
        },
        "answer": "B",
        "answerText": "Storing, processing, analysing and displaying geographical information",
        "explanation": "Computers in cartography store, manage, analyze, transform, and render spatial and attribute data digitally."
      },
      {
        "id": "CO1_Q63",
        "co": "CO1",
        "qNum": 63,
        "question": "Which computer hardware component is primarily used to display digital maps?",
        "options": {
          "A": "Keyboard",
          "B": "Scanner",
          "C": "Monitor",
          "D": "Mouse"
        },
        "answer": "C",
        "answerText": "Monitor",
        "explanation": "Computer monitors (visual display units) present high-resolution digital maps, layers, and raster images for user viewing."
      },
      {
        "id": "CO1_Q64",
        "co": "CO1",
        "qNum": 64,
        "question": "Which device is used to produce large-format printed maps?",
        "options": {
          "A": "Keyboard",
          "B": "GPS receiver",
          "C": "Joystick",
          "D": "Plotter"
        },
        "answer": "D",
        "answerText": "Plotter",
        "explanation": "Large-format plotters are specialized output hardware designed to print oversized engineering drawings and cartographic map sheets."
      },
      {
        "id": "CO1_Q65",
        "co": "CO1",
        "qNum": 65,
        "question": "What is the function of a scanner in digital map production?",
        "options": {
          "A": "Converting paper maps into digital images",
          "B": "Measuring satellite altitude",
          "C": "Calculating geographical coordinates automatically",
          "D": "Printing maps"
        },
        "answer": "A",
        "answerText": "Converting paper maps into digital images",
        "explanation": "Scanners optically digitize analog paper maps and air photos into raster grid images."
      },
      {
        "id": "CO1_Q66",
        "co": "CO1",
        "qNum": 66,
        "question": "Which software is commonly used for Geographic Information System applications?",
        "options": {
          "A": "Microsoft Word",
          "B": "QGIS",
          "C": "Notepad",
          "D": "Calculator"
        },
        "answer": "B",
        "answerText": "QGIS",
        "explanation": "QGIS is a premier, full-featured desktop Geographic Information System open to all users globally."
      },
      {
        "id": "CO1_Q67",
        "co": "CO1",
        "qNum": 67,
        "question": "Which of the following is an open-source GIS software?",
        "options": {
          "A": "Adobe Photoshop",
          "B": "Microsoft Excel",
          "C": "QGIS",
          "D": "Microsoft PowerPoint"
        },
        "answer": "C",
        "answerText": "QGIS",
        "explanation": "QGIS is free, open-source software (FOSS) community-maintained under the GNU General Public License."
      },
      {
        "id": "CO1_Q68",
        "co": "CO1",
        "qNum": 68,
        "question": "Which software is widely used for professional GIS mapping and spatial analysis?",
        "options": {
          "A": "VLC Media Player",
          "B": "Notepad",
          "C": "Microsoft Paint",
          "D": "ArcGIS"
        },
        "answer": "D",
        "answerText": "ArcGIS",
        "explanation": "ArcGIS (by Esri) is the commercial market-leading GIS suite used across industry, academia, and government."
      },
      {
        "id": "CO1_Q69",
        "co": "CO1",
        "qNum": 69,
        "question": "Which software is commonly used for digital image processing and remote sensing analysis?",
        "options": {
          "A": "ERDAS IMAGINE",
          "B": "Microsoft Word",
          "C": "VLC Player",
          "D": "PowerPoint"
        },
        "answer": "A",
        "answerText": "ERDAS IMAGINE",
        "explanation": "ERDAS IMAGINE is specialized digital image processing (DIP) and remote sensing raster analysis software."
      },
      {
        "id": "CO1_Q70",
        "co": "CO1",
        "qNum": 70,
        "question": "Which software is commonly used for editing and processing satellite imagery and raster data?",
        "options": {
          "A": "Microsoft Outlook",
          "B": "ENVI",
          "C": "Notepad",
          "D": "Calculator"
        },
        "answer": "B",
        "answerText": "ENVI",
        "explanation": "ENVI is an industry standard software suite tailored for processing and extracting insights from hyperspectral and multispectral imagery."
      },
      {
        "id": "CO1_Q71",
        "co": "CO1",
        "qNum": 71,
        "question": "What is the primary function of CAD software in map production?",
        "options": {
          "A": "Recording audio",
          "B": "Managing emails",
          "C": "Creating and editing precise technical drawings and designs",
          "D": "Measuring rainfall"
        },
        "answer": "C",
        "answerText": "Creating and editing precise technical drawings and designs",
        "explanation": "CAD (Computer-Aided Design) software focuses on high-precision geometric technical drafting, engineering drawings, and layouts."
      },
      {
        "id": "CO1_Q72",
        "co": "CO1",
        "qNum": 72,
        "question": "Which of the following is an example of computer-aided design software?",
        "options": {
          "A": "QGIS",
          "B": "ENVI",
          "C": "ERDAS IMAGINE",
          "D": "AutoCAD"
        },
        "answer": "D",
        "answerText": "AutoCAD",
        "explanation": "AutoCAD is Autodesk's flagship CAD software widely used for civil engineering and drafting."
      },
      {
        "id": "CO1_Q73",
        "co": "CO1",
        "qNum": 73,
        "question": "What is the purpose of GIS database management in map production?",
        "options": {
          "A": "Organizing and maintaining spatial and attribute information",
          "B": "Increasing computer screen brightness",
          "C": "Recording audio information",
          "D": "Changing satellite orbits"
        },
        "answer": "A",
        "answerText": "Organizing and maintaining spatial and attribute information",
        "explanation": "GIS database management organizes both geometric coordinate records and descriptive attribute tables in structured relations."
      },
      {
        "id": "CO1_Q74",
        "co": "CO1",
        "qNum": 74,
        "question": "Which software is commonly used to prepare layouts and graphical designs for map presentation?",
        "options": {
          "A": "GPS receiver",
          "B": "Adobe Illustrator",
          "C": "Rain gauge",
          "D": "Total station"
        },
        "answer": "B",
        "answerText": "Adobe Illustrator",
        "explanation": "Adobe Illustrator is a standard vector design application used to polish map layouts, fonts, and graphical aesthetics."
      },
      {
        "id": "CO1_Q75",
        "co": "CO1",
        "qNum": 75,
        "question": "Which of the following is an important advantage of using GIS software in map production?",
        "options": {
          "A": "It eliminates the need for geographical data",
          "B": "It prevents all possible mapping errors",
          "C": "It enables efficient spatial analysis, editing and map visualization",
          "D": "It replaces all field surveys"
        },
        "answer": "C",
        "answerText": "It enables efficient spatial analysis, editing and map visualization",
        "explanation": "GIS empowers planners with advanced overlay operations, spatial modeling, database queries, and dynamic visualization."
      }
    ],
    "CO2": [
      {
        "id": "CO2_Q1",
        "co": "CO2",
        "qNum": 1,
        "question": "What is digital image processing?",
        "options": {
          "A": "The process of manually drawing maps",
          "B": "The manipulation and analysis of digital images using computers",
          "C": "The process of measuring rainfall",
          "D": "The preparation of paper documents"
        },
        "answer": "B",
        "answerText": "The manipulation and analysis of digital images using computers",
        "explanation": "Digital Image Processing (DIP) involves computer algorithms to manipulate, correct, enhance, and classify digital image data."
      },
      {
        "id": "CO2_Q2",
        "co": "CO2",
        "qNum": 2,
        "question": "What is the basic unit of a digital image?",
        "options": {
          "A": "Polygon",
          "B": "Vector",
          "C": "Pixel",
          "D": "Contour"
        },
        "answer": "C",
        "answerText": "Pixel",
        "explanation": "A pixel (picture element) is the smallest discrete atomic building block of a raster digital image grid."
      },
      {
        "id": "CO2_Q3",
        "co": "CO2",
        "qNum": 3,
        "question": "What does a pixel represent in a digital image?",
        "options": {
          "A": "The smallest individual picture element",
          "B": "A complete satellite",
          "C": "A geographical boundary",
          "D": "A drainage network"
        },
        "answer": "A",
        "answerText": "The smallest individual picture element",
        "explanation": "A pixel represents the smallest individual picture element with a single digital number (DN) representing radiometric brightness."
      },
      {
        "id": "CO2_Q4",
        "co": "CO2",
        "qNum": 4,
        "question": "What is radiometric resolution?",
        "options": {
          "A": "The ability to identify small geographical features",
          "B": "The size of a satellite image",
          "C": "The distance between two pixels",
          "D": "The ability of a sensor to distinguish different levels of energy intensity"
        },
        "answer": "D",
        "answerText": "The ability of a sensor to distinguish different levels of energy intensity",
        "explanation": "Radiometric resolution describes how finely a sensor can measure energy intensity, expressed in bits (e.g., 8-bit has 256 gray levels)."
      },
      {
        "id": "CO2_Q5",
        "co": "CO2",
        "qNum": 5,
        "question": "What does spatial resolution indicate in remote sensing?",
        "options": {
          "A": "Number of spectral bands",
          "B": "The smallest ground area represented by a pixel",
          "C": "Number of satellites",
          "D": "Image acquisition date"
        },
        "answer": "B",
        "answerText": "The smallest ground area represented by a pixel",
        "explanation": "Spatial resolution specifies the physical ground dimensions covered by a single image pixel (e.g. 10m x 10m)."
      },
      {
        "id": "CO2_Q6",
        "co": "CO2",
        "qNum": 6,
        "question": "Which resolution refers to the number of spectral bands recorded by a sensor?",
        "options": {
          "A": "Spatial resolution",
          "B": "Temporal resolution",
          "C": "Spectral resolution",
          "D": "Radiometric resolution"
        },
        "answer": "C",
        "answerText": "Spectral resolution",
        "explanation": "Spectral resolution denotes the number and bandwidth of electromagnetic regions sampled by the sensor."
      },
      {
        "id": "CO2_Q7",
        "co": "CO2",
        "qNum": 7,
        "question": "What is temporal resolution?",
        "options": {
          "A": "The frequency at which a satellite revisits the same geographical area",
          "B": "The size of each image pixel",
          "C": "The number of image colours",
          "D": "The ability to identify different landforms"
        },
        "answer": "A",
        "answerText": "The frequency at which a satellite revisits the same geographical area",
        "explanation": "Temporal resolution describes the satellite's orbital revisit cycle over the same ground area."
      },
      {
        "id": "CO2_Q8",
        "co": "CO2",
        "qNum": 8,
        "question": "Which operation is commonly used to improve the visual appearance of satellite images?",
        "options": {
          "A": "Database joining",
          "B": "Network analysis",
          "C": "Polygon buffering",
          "D": "Contrast enhancement"
        },
        "answer": "D",
        "answerText": "Contrast enhancement",
        "explanation": "Contrast enhancement stretches the dynamic range of digital numbers across available display levels to improve visual distinction."
      },
      {
        "id": "CO2_Q9",
        "co": "CO2",
        "qNum": 9,
        "question": "What is image enhancement?",
        "options": {
          "A": "Deleting all image information",
          "B": "Improving image appearance to make features easier to identify",
          "C": "Converting images into text documents",
          "D": "Measuring groundwater depth"
        },
        "answer": "B",
        "answerText": "Improving image appearance to make features easier to identify",
        "explanation": "Image enhancement modifies pixel brightness values to make specific features clearer and easier for human interpretation."
      },
      {
        "id": "CO2_Q10",
        "co": "CO2",
        "qNum": 10,
        "question": "Which technique is used to reduce unwanted noise in digital images?",
        "options": {
          "A": "Image classification",
          "B": "Vectorization",
          "C": "Image filtering",
          "D": "Geocoding"
        },
        "answer": "C",
        "answerText": "Image filtering",
        "explanation": "Image filtering (such as low-pass or median filters) reduces high-frequency spatial noise and smooths the image."
      },
      {
        "id": "CO2_Q11",
        "co": "CO2",
        "qNum": 11,
        "question": "What is the main purpose of image classification?",
        "options": {
          "A": "Grouping image pixels into meaningful land cover classes",
          "B": "Increasing satellite altitude",
          "C": "Measuring road traffic",
          "D": "Printing geographical maps"
        },
        "answer": "A",
        "answerText": "Grouping image pixels into meaningful land cover classes",
        "explanation": "Image classification categorizes pixels into thematic information classes such as water, agriculture, forest, and urban."
      },
      {
        "id": "CO2_Q12",
        "co": "CO2",
        "qNum": 12,
        "question": "Which of the following is an example of a remote sensing data product?",
        "options": {
          "A": "Audio recording",
          "B": "Financial statement",
          "C": "Word document",
          "D": "Satellite image"
        },
        "answer": "D",
        "answerText": "Satellite image",
        "explanation": "A satellite image is a standard primary remote sensing data product collected by orbiting space sensors."
      },
      {
        "id": "CO2_Q13",
        "co": "CO2",
        "qNum": 13,
        "question": "What is a raw satellite data product?",
        "options": {
          "A": "A fully interpreted land use map",
          "B": "Original sensor data before extensive processing",
          "C": "A printed road map",
          "D": "A population census report"
        },
        "answer": "B",
        "answerText": "Original sensor data before extensive processing",
        "explanation": "Raw satellite data (Level 0 or Level 1) is unaltered sensor digital numbers prior to radiometric and geometric calibrations."
      },
      {
        "id": "CO2_Q14",
        "co": "CO2",
        "qNum": 14,
        "question": "What is a False Colour Composite (FCC)?",
        "options": {
          "A": "An image containing only black and white pixels",
          "B": "A map without geographical coordinates",
          "C": "An image created by assigning spectral bands to display colours different from natural colours",
          "D": "A photograph taken using a mobile phone"
        },
        "answer": "C",
        "answerText": "An image created by assigning spectral bands to display colours different from natural colours",
        "explanation": "A False Colour Composite (FCC) maps non-visible bands (e.g., NIR) to visible color channels (Red, Green, Blue) to highlight features."
      },
      {
        "id": "CO2_Q15",
        "co": "CO2",
        "qNum": 15,
        "question": "Which colour is commonly used to represent healthy vegetation in a standard near-infrared false colour composite?",
        "options": {
          "A": "Red",
          "B": "Blue",
          "C": "Black",
          "D": "Yellow"
        },
        "answer": "A",
        "answerText": "Red",
        "explanation": "In standard NIR FCC (NIR->Red, Red->Green, Green->Blue), healthy vegetation reflects strongly in NIR and displays bright red."
      },
      {
        "id": "CO2_Q16",
        "co": "CO2",
        "qNum": 16,
        "question": "What is a natural colour composite?",
        "options": {
          "A": "An image displayed using only infrared bands",
          "B": "An image without spectral information",
          "C": "An image created using elevation values only",
          "D": "An image displayed using bands corresponding approximately to visible red, green and blue"
        },
        "answer": "D",
        "answerText": "An image displayed using bands corresponding approximately to visible red, green and blue",
        "explanation": "A natural color (true color) composite maps visible red, green, and blue bands to Red, Green, and Blue display channels."
      },
      {
        "id": "CO2_Q17",
        "co": "CO2",
        "qNum": 17,
        "question": "What is a thematic map product?",
        "options": {
          "A": "A photograph without interpretation",
          "B": "A map showing the spatial distribution of a specific theme",
          "C": "A satellite orbit diagram",
          "D": "A raw sensor recording"
        },
        "answer": "B",
        "answerText": "A map showing the spatial distribution of a specific theme",
        "explanation": "A thematic map specifically displays the spatial pattern of a single theme or attribute (e.g. soil types, land use, vegetation)."
      },
      {
        "id": "CO2_Q18",
        "co": "CO2",
        "qNum": 18,
        "question": "Which data product is generated by applying mathematical operations to multiple spectral bands?",
        "options": {
          "A": "Paper map",
          "B": "GPS navigation file",
          "C": "Spectral index image",
          "D": "Audio file"
        },
        "answer": "C",
        "answerText": "Spectral index image",
        "explanation": "Spectral index images (like NDVI) result from band rationing and algebraic operations to emphasize specific surface properties."
      },
      {
        "id": "CO2_Q19",
        "co": "CO2",
        "qNum": 19,
        "question": "What is the primary objective of visual image interpretation?",
        "options": {
          "A": "Identifying and understanding features visible in images",
          "B": "Measuring computer processing speed",
          "C": "Developing communication networks",
          "D": "Recording audio signals"
        },
        "answer": "A",
        "answerText": "Identifying and understanding features visible in images",
        "explanation": "Visual image interpretation is the human perceptual process of recognizing, delineating, and explaining features on imagery."
      },
      {
        "id": "CO2_Q20",
        "co": "CO2",
        "qNum": 20,
        "question": "What is image interpretation strategy?",
        "options": {
          "A": "A method of deleting image pixels",
          "B": "A technique for changing satellite orbits",
          "C": "A process of printing images",
          "D": "A systematic approach to identifying and analysing image features"
        },
        "answer": "D",
        "answerText": "A systematic approach to identifying and analysing image features",
        "explanation": "An image interpretation strategy provides a structured, logical methodology for systematically extracting spatial information."
      },
      {
        "id": "CO2_Q21",
        "co": "CO2",
        "qNum": 21,
        "question": "Which approach is useful for interpreting satellite images?",
        "options": {
          "A": "Random guessing",
          "B": "Systematic examination of image characteristics",
          "C": "Ignoring image patterns",
          "D": "Removing geographical information"
        },
        "answer": "B",
        "answerText": "Systematic examination of image characteristics",
        "explanation": "Interpreters systematically evaluate image interpretation elements (tone, shape, size, texture, pattern, shadow, site, association)."
      },
      {
        "id": "CO2_Q22",
        "co": "CO2",
        "qNum": 22,
        "question": "What is the purpose of an interpretation key?",
        "options": {
          "A": "To calculate satellite speed",
          "B": "To change image resolution",
          "C": "To assist in identifying features using their characteristic properties",
          "D": "To measure atmospheric pressure"
        },
        "answer": "C",
        "answerText": "To assist in identifying features using their characteristic properties",
        "explanation": "An interpretation key is a standardized reference guide containing diagnostic image characteristics of specific features."
      },
      {
        "id": "CO2_Q23",
        "co": "CO2",
        "qNum": 23,
        "question": "Which of the following is generally considered a level of image interpretation key?",
        "options": {
          "A": "Selective and elimination",
          "B": "Digital and mechanical",
          "C": "Horizontal and vertical",
          "D": "Direct and indirect"
        },
        "answer": "D",
        "answerText": "Direct and indirect",
        "explanation": "Interpretation keys operate on direct (identifying the object itself) and indirect (identifying by proxy/associative clues) levels."
      },
      {
        "id": "CO2_Q24",
        "co": "CO2",
        "qNum": 24,
        "question": "What is an image interpretation key?",
        "options": {
          "A": "A guide that helps identify objects based on image characteristics",
          "B": "A device used to launch satellites",
          "C": "A method of storing computer passwords",
          "D": "A system for measuring rainfall"
        },
        "answer": "A",
        "answerText": "A guide that helps identify objects based on image characteristics",
        "explanation": "An image interpretation key provides illustrated reference criteria to help analysts classify target objects reliably."
      },
      {
        "id": "CO2_Q25",
        "co": "CO2",
        "qNum": 25,
        "question": "Which information is useful when developing an image interpretation key?",
        "options": {
          "A": "Computer brand",
          "B": "Shape, size, tone, texture and pattern",
          "C": "Internet speed",
          "D": "File name only"
        },
        "answer": "B",
        "answerText": "Shape, size, tone, texture and pattern",
        "explanation": "Diagnostic keys rely on shape, size, tone/color, texture, pattern, shadow, site, and association."
      },
      {
        "id": "CO2_Q26",
        "co": "CO2",
        "qNum": 26,
        "question": "What is topography?",
        "options": {
          "A": "The study of computer networks",
          "B": "The measurement of atmospheric pressure",
          "C": "The arrangement and physical features of land surfaces",
          "D": "The classification of financial records"
        },
        "answer": "C",
        "answerText": "The arrangement and physical features of land surfaces",
        "explanation": "Topography refers to the physical configuration, relief, elevation, and landforms of Earth's surface."
      },
      {
        "id": "CO2_Q27",
        "co": "CO2",
        "qNum": 27,
        "question": "Which of the following is a major topographic feature?",
        "options": {
          "A": "Mountain",
          "B": "Keyboard",
          "C": "Satellite antenna",
          "D": "Computer processor"
        },
        "answer": "A",
        "answerText": "Mountain",
        "explanation": "Mountains are major topographic features characterized by significant relief, steep slopes, and high elevations."
      },
      {
        "id": "CO2_Q28",
        "co": "CO2",
        "qNum": 28,
        "question": "What does a contour line represent on a topographic map?",
        "options": {
          "A": "Road width",
          "B": "River discharge",
          "C": "Soil temperature",
          "D": "A line connecting points of equal elevation"
        },
        "answer": "D",
        "answerText": "A line connecting points of equal elevation",
        "explanation": "A contour line connects points of equal elevation above a chosen reference datum (mean sea level)."
      },
      {
        "id": "CO2_Q29",
        "co": "CO2",
        "qNum": 29,
        "question": "What do closely spaced contour lines indicate?",
        "options": {
          "A": "Flat terrain",
          "B": "Steep slope",
          "C": "Water body",
          "D": "Low population"
        },
        "answer": "B",
        "answerText": "Steep slope",
        "explanation": "When contour lines are closely spaced, elevation changes rapidly over short horizontal distance, indicating a steep slope."
      },
      {
        "id": "CO2_Q30",
        "co": "CO2",
        "qNum": 30,
        "question": "What do widely spaced contour lines generally indicate?",
        "options": {
          "A": "Very steep terrain",
          "B": "Deep valleys",
          "C": "Gentle or gradual slope",
          "D": "Vertical cliffs"
        },
        "answer": "C",
        "answerText": "Gentle or gradual slope",
        "explanation": "Widely spaced contour lines indicate gentle or flat terrain where elevation changes gradually."
      },
      {
        "id": "CO2_Q31",
        "co": "CO2",
        "qNum": 31,
        "question": "Which landform is generally characterized by a high elevation and relatively flat top?",
        "options": {
          "A": "Plateau",
          "B": "Valley",
          "C": "Delta",
          "D": "Basin"
        },
        "answer": "A",
        "answerText": "Plateau",
        "explanation": "A plateau is an elevated landform characterized by a prominently flat or gently undulating top surrounded by steep escarpments."
      },
      {
        "id": "CO2_Q32",
        "co": "CO2",
        "qNum": 32,
        "question": "What is a valley?",
        "options": {
          "A": "A flat elevated region",
          "B": "A volcanic mountain peak",
          "C": "A coastal sand dune",
          "D": "A low area between hills or mountains, often containing a river"
        },
        "answer": "D",
        "answerText": "A low area between hills or mountains, often containing a river",
        "explanation": "A valley is an elongated low terrain depression between hills or mountain ridges, commonly carved and occupied by a stream or river."
      },
      {
        "id": "CO2_Q33",
        "co": "CO2",
        "qNum": 33,
        "question": "Which drainage pattern resembles the branches of a tree?",
        "options": {
          "A": "Radial",
          "B": "Dendritic",
          "C": "Trellis",
          "D": "Rectangular"
        },
        "answer": "B",
        "answerText": "Dendritic",
        "explanation": "Dendritic drainage resembles branching tree limbs, typically forming in regions of uniform rock resistance and gentle slope."
      },
      {
        "id": "CO2_Q34",
        "co": "CO2",
        "qNum": 34,
        "question": "Which drainage pattern develops when streams flow outward from a central elevated area?",
        "options": {
          "A": "Parallel",
          "B": "Trellis",
          "C": "Radial",
          "D": "Dendritic"
        },
        "answer": "C",
        "answerText": "Radial",
        "explanation": "Radial drainage radiates outward like spokes of a wheel from an isolated elevated central peak or volcano dome."
      },
      {
        "id": "CO2_Q35",
        "co": "CO2",
        "qNum": 35,
        "question": "Which drainage pattern is commonly associated with folded geological structures?",
        "options": {
          "A": "Trellis",
          "B": "Radial",
          "C": "Centripetal",
          "D": "Dendritic"
        },
        "answer": "A",
        "answerText": "Trellis",
        "explanation": "Trellis drainage features parallel main streams joined at right angles by tributaries, typical of folded sedimentary strata."
      },
      {
        "id": "CO2_Q36",
        "co": "CO2",
        "qNum": 36,
        "question": "Which drainage pattern is characterized by streams following approximately parallel paths?",
        "options": {
          "A": "Annular",
          "B": "Radial",
          "C": "Rectangular",
          "D": "Parallel"
        },
        "answer": "D",
        "answerText": "Parallel",
        "explanation": "Parallel drainage consists of parallel, elongate streams developed on steep, uniformly inclined regional slopes."
      },
      {
        "id": "CO2_Q37",
        "co": "CO2",
        "qNum": 37,
        "question": "Which drainage pattern is characterized by streams flowing inward toward a central depression?",
        "options": {
          "A": "Dendritic",
          "B": "Centripetal",
          "C": "Radial",
          "D": "Trellis"
        },
        "answer": "B",
        "answerText": "Centripetal",
        "explanation": "Centripetal drainage develops when streams converge inward toward a central low basin or closed depression."
      },
      {
        "id": "CO2_Q38",
        "co": "CO2",
        "qNum": 38,
        "question": "Which drainage pattern is commonly associated with jointed or faulted rocks?",
        "options": {
          "A": "Dendritic",
          "B": "Radial",
          "C": "Rectangular",
          "D": "Parallel"
        },
        "answer": "C",
        "answerText": "Rectangular",
        "explanation": "Rectangular drainage exhibits right-angle bends and intersections governed by joints and fault fractures in bedrock."
      },
      {
        "id": "CO2_Q39",
        "co": "CO2",
        "qNum": 39,
        "question": "What does drainage texture refer to?",
        "options": {
          "A": "The relative spacing and frequency of drainage channels in an area",
          "B": "The colour of river water",
          "C": "The length of a road",
          "D": "The depth of groundwater"
        },
        "answer": "A",
        "answerText": "The relative spacing and frequency of drainage channels in an area",
        "explanation": "Drainage texture measures the relative spacing, frequency, and density of stream channels within a watershed unit."
      },
      {
        "id": "CO2_Q40",
        "co": "CO2",
        "qNum": 40,
        "question": "What is fine drainage texture?",
        "options": {
          "A": "Widely spaced drainage channels",
          "B": "Absence of streams",
          "C": "Very few drainage channels",
          "D": "Closely spaced and numerous drainage channels"
        },
        "answer": "D",
        "answerText": "Closely spaced and numerous drainage channels",
        "explanation": "Fine drainage texture indicates very closely spaced stream channels, typically over impermeable clay soils with high surface runoff."
      },
      {
        "id": "CO2_Q41",
        "co": "CO2",
        "qNum": 41,
        "question": "Which condition generally produces coarse drainage texture?",
        "options": {
          "A": "Impermeable clayey soil",
          "B": "Highly permeable soil or rock",
          "C": "Very dense vegetation only",
          "D": "Extremely high rainfall in all cases"
        },
        "answer": "B",
        "answerText": "Highly permeable soil or rock",
        "explanation": "Coarse drainage texture occurs where rocks and soils are highly permeable (e.g. porous sandstone), allowing water to infiltrate."
      },
      {
        "id": "CO2_Q42",
        "co": "CO2",
        "qNum": 42,
        "question": "What is the main cause of drainage pattern development?",
        "options": {
          "A": "Computer processing",
          "B": "Satellite movement",
          "C": "Geological structure, rock characteristics and topography",
          "D": "Population distribution"
        },
        "answer": "C",
        "answerText": "Geological structure, rock characteristics and topography",
        "explanation": "Drainage patterns are governed by underlying rock lithology, geological structural controls (faults, folds), and topography."
      },
      {
        "id": "CO2_Q43",
        "co": "CO2",
        "qNum": 43,
        "question": "What is soil erosion?",
        "options": {
          "A": "Removal and transportation of soil by natural agents",
          "B": "Formation of new mountains",
          "C": "Increase in soil fertility",
          "D": "Growth of vegetation"
        },
        "answer": "A",
        "answerText": "Removal and transportation of soil by natural agents",
        "explanation": "Soil erosion is the detachment, entrainment, and transportation of topsoil particles by natural erosive agents."
      },
      {
        "id": "CO2_Q44",
        "co": "CO2",
        "qNum": 44,
        "question": "Which of the following is a major agent of soil erosion?",
        "options": {
          "A": "Electricity",
          "B": "Computer radiation",
          "C": "Magnetic fields",
          "D": "Running water"
        },
        "answer": "D",
        "answerText": "Running water",
        "explanation": "Running water (rainfall runoff and streamflow) is globally the most potent natural agent of soil erosion."
      },
      {
        "id": "CO2_Q45",
        "co": "CO2",
        "qNum": 45,
        "question": "What is sheet erosion?",
        "options": {
          "A": "Removal of soil in deep channels",
          "B": "Uniform removal of a thin layer of soil from the land surface",
          "C": "Formation of large sand dunes",
          "D": "Deposition of sediments in rivers"
        },
        "answer": "B",
        "answerText": "Uniform removal of a thin layer of soil from the land surface",
        "explanation": "Sheet erosion is the uniform, shallow removal of a thin layer of topsoil over a broad slope by unconfined overland flow."
      },
      {
        "id": "CO2_Q46",
        "co": "CO2",
        "qNum": 46,
        "question": "What is rill erosion?",
        "options": {
          "A": "Formation of large valleys",
          "B": "Wind deposition",
          "C": "Removal of soil through small channels formed by running water",
          "D": "Coastal wave action"
        },
        "answer": "C",
        "answerText": "Removal of soil through small channels formed by running water",
        "explanation": "Rill erosion cuts numerous small, well-defined finger-like channels that can be smoothed over by ordinary tillage."
      },
      {
        "id": "CO2_Q47",
        "co": "CO2",
        "qNum": 47,
        "question": "What is gully erosion?",
        "options": {
          "A": "Formation of large and deep channels due to concentrated runoff",
          "B": "Uniform removal of a thin soil layer",
          "C": "Deposition of river sediments",
          "D": "Formation of groundwater aquifers"
        },
        "answer": "A",
        "answerText": "Formation of large and deep channels due to concentrated runoff",
        "explanation": "Gully erosion occurs when concentrated runoff carves large, steep-sided channels too deep to cross with farm machinery."
      },
      {
        "id": "CO2_Q48",
        "co": "CO2",
        "qNum": 48,
        "question": "Which type of erosion is primarily caused by wind?",
        "options": {
          "A": "Sheet erosion",
          "B": "Rill erosion",
          "C": "Gully erosion",
          "D": "Aeolian erosion"
        },
        "answer": "D",
        "answerText": "Aeolian erosion",
        "explanation": "Aeolian erosion refers specifically to erosion, transport, and abrasion of soil and sediment by wind action."
      },
      {
        "id": "CO2_Q49",
        "co": "CO2",
        "qNum": 49,
        "question": "Which human activity can accelerate soil erosion?",
        "options": {
          "A": "Afforestation",
          "B": "Deforestation",
          "C": "Contour farming",
          "D": "Terracing"
        },
        "answer": "B",
        "answerText": "Deforestation",
        "explanation": "Deforestation removes protective canopy and roots, leaving soil directly exposed to raindrop impact and accelerated runoff."
      },
      {
        "id": "CO2_Q50",
        "co": "CO2",
        "qNum": 50,
        "question": "Which conservation practice helps reduce soil erosion on sloping agricultural land?",
        "options": {
          "A": "Overgrazing",
          "B": "Deforestation",
          "C": "Contour ploughing",
          "D": "Uncontrolled excavation"
        },
        "answer": "C",
        "answerText": "Contour ploughing",
        "explanation": "Contour ploughing follows the elevation contour of sloping land, creating furrows that trap water and prevent downslope runoff."
      },
      {
        "id": "CO2_Q51",
        "co": "CO2",
        "qNum": 51,
        "question": "Which of the following is a basic element of visual image interpretation?",
        "options": {
          "A": "Tone or colour",
          "B": "Computer speed",
          "C": "File extension",
          "D": "Internet protocol"
        },
        "answer": "A",
        "answerText": "Tone or colour",
        "explanation": "Tone (or colour) is the fundamental element of visual interpretation—the relative brightness of light recorded."
      },
      {
        "id": "CO2_Q52",
        "co": "CO2",
        "qNum": 52,
        "question": "What does image tone refer to?",
        "options": {
          "A": "The geographical coordinates of an object",
          "B": "The height of an object",
          "C": "The shape of an object",
          "D": "The relative brightness or darkness of an image feature"
        },
        "answer": "D",
        "answerText": "The relative brightness or darkness of an image feature",
        "explanation": "Tone describes the relative brightness or darkness of a feature, determined by the amount of light reflected or emitted."
      },
      {
        "id": "CO2_Q53",
        "co": "CO2",
        "qNum": 53,
        "question": "What does texture refer to in image interpretation?",
        "options": {
          "A": "Exact geographical location",
          "B": "Frequency of tonal variation and apparent smoothness or roughness",
          "C": "Object height only",
          "D": "Satellite orbital speed"
        },
        "answer": "B",
        "answerText": "Frequency of tonal variation and apparent smoothness or roughness",
        "explanation": "Texture describes the visual impression of smoothness or roughness caused by the frequency of tonal changes across an area."
      },
      {
        "id": "CO2_Q54",
        "co": "CO2",
        "qNum": 54,
        "question": "Which image interpretation element describes the external outline of an object?",
        "options": {
          "A": "Tone",
          "B": "Texture",
          "C": "Shape",
          "D": "Shadow"
        },
        "answer": "C",
        "answerText": "Shape",
        "explanation": "Shape describes the general geometric outline or external form of an object (e.g. circular center-pivot irrigation vs irregular lake)."
      },
      {
        "id": "CO2_Q55",
        "co": "CO2",
        "qNum": 55,
        "question": "What does the size element indicate during image interpretation?",
        "options": {
          "A": "The dimensions of an object as represented in the image",
          "B": "The weight of the object",
          "C": "The age of the satellite",
          "D": "The temperature of the object"
        },
        "answer": "A",
        "answerText": "The dimensions of an object as represented in the image",
        "explanation": "Size considers the physical surface dimensions of an object relative to other known features in the image."
      },
      {
        "id": "CO2_Q56",
        "co": "CO2",
        "qNum": 56,
        "question": "What does the pattern element represent?",
        "options": {
          "A": "Brightness of an individual pixel",
          "B": "Satellite sensor temperature",
          "C": "Elevation of a single point",
          "D": "Spatial arrangement or repetition of objects"
        },
        "answer": "D",
        "answerText": "Spatial arrangement or repetition of objects",
        "explanation": "Pattern refers to the orderly spatial repetition or characteristic arrangement of objects (e.g. orchard grid, street blocks)."
      },
      {
        "id": "CO2_Q57",
        "co": "CO2",
        "qNum": 57,
        "question": "How does shadow help in image interpretation?",
        "options": {
          "A": "It directly measures soil pH",
          "B": "It provides clues about object height and shape",
          "C": "It determines population density",
          "D": "It identifies exact land ownership"
        },
        "answer": "B",
        "answerText": "It provides clues about object height and shape",
        "explanation": "Shadow reveals an object's vertical profile, relative height, and distinctive shape (e.g. towers, bridges, trees)."
      },
      {
        "id": "CO2_Q58",
        "co": "CO2",
        "qNum": 58,
        "question": "What is the meaning of site in visual image interpretation?",
        "options": {
          "A": "The colour of an object",
          "B": "The texture of a photograph",
          "C": "The actual geographical location or topographic setting of an object",
          "D": "The size of a satellite"
        },
        "answer": "C",
        "answerText": "The actual geographical location or topographic setting of an object",
        "explanation": "Site refers to the geographic setting, environmental context, or topographic situation where an object is located."
      },
      {
        "id": "CO2_Q59",
        "co": "CO2",
        "qNum": 59,
        "question": "What does association mean in image interpretation?",
        "options": {
          "A": "Identifying an object based on its relationship with nearby features",
          "B": "Measuring the brightness of a pixel",
          "C": "Calculating the image file size",
          "D": "Measuring the distance between satellites"
        },
        "answer": "A",
        "answerText": "Identifying an object based on its relationship with nearby features",
        "explanation": "Association refers to the presence of characteristic nearby features that provide contextual clues to an object's identity."
      },
      {
        "id": "CO2_Q60",
        "co": "CO2",
        "qNum": 60,
        "question": "Which combination is most useful for identifying a school in a satellite image?",
        "options": {
          "A": "Pixel value only",
          "B": "Shadow only",
          "C": "Colour only",
          "D": "Shape, size, pattern and association"
        },
        "answer": "D",
        "answerText": "Shape, size, pattern and association",
        "explanation": "Identifying a school requires analyzing its building shape, size, playground pattern, and association with sports fields and school buses."
      },
      {
        "id": "CO2_Q61",
        "co": "CO2",
        "qNum": 61,
        "question": "Which element of image interpretation is particularly useful for distinguishing a railway line from a road?",
        "options": {
          "A": "Tone alone",
          "B": "Pattern and association",
          "C": "Shadow alone",
          "D": "Image file size"
        },
        "answer": "B",
        "answerText": "Pattern and association",
        "explanation": "Railway lines have distinct, gentle curves, continuous linear pattern, and association with rail yards, differing from roads."
      },
      {
        "id": "CO2_Q62",
        "co": "CO2",
        "qNum": 62,
        "question": "What is the main purpose of using multiple interpretation elements together?",
        "options": {
          "A": "To increase image noise",
          "B": "To remove geographical features",
          "C": "To improve the reliability of feature identification",
          "D": "To reduce the image resolution"
        },
        "answer": "C",
        "answerText": "To improve the reliability of feature identification",
        "explanation": "Combining multiple visual interpretation elements maximizes diagnostic accuracy and eliminates feature misidentification."
      },
      {
        "id": "CO2_Q63",
        "co": "CO2",
        "qNum": 63,
        "question": "What is visual image interpretation equipment?",
        "options": {
          "A": "Instruments used to examine and analyse images visually",
          "B": "Devices used only for measuring rainfall",
          "C": "Equipment used to construct roads",
          "D": "Tools used for soil excavation"
        },
        "answer": "A",
        "answerText": "Instruments used to examine and analyse images visually",
        "explanation": "Visual interpretation instruments assist photo-interpreters in measuring, magnifying, and observing images stereoscopically."
      },
      {
        "id": "CO2_Q64",
        "co": "CO2",
        "qNum": 64,
        "question": "Which instrument is traditionally used for viewing aerial photographs stereoscopically?",
        "options": {
          "A": "GPS receiver",
          "B": "Total station",
          "C": "Theodolite",
          "D": "Stereoscope"
        },
        "answer": "D",
        "answerText": "Stereoscope",
        "explanation": "A stereoscope is an optical device used to observe overlapping aerial photos simultaneously to produce 3D depth perception."
      },
      {
        "id": "CO2_Q65",
        "co": "CO2",
        "qNum": 65,
        "question": "What is the main function of a stereoscope?",
        "options": {
          "A": "Measuring water quality",
          "B": "Producing a three-dimensional view from overlapping photographs",
          "C": "Calculating population density",
          "D": "Measuring satellite altitude"
        },
        "answer": "B",
        "answerText": "Producing a three-dimensional view from overlapping photographs",
        "explanation": "A stereoscope presents the left image to the left eye and right image to the right eye, creating a 3D stereomodel."
      },
      {
        "id": "CO2_Q66",
        "co": "CO2",
        "qNum": 66,
        "question": "Which type of stereoscope uses mirrors to provide a wider viewing arrangement?",
        "options": {
          "A": "Pocket stereoscope",
          "B": "Hand lens",
          "C": "Mirror stereoscope",
          "D": "Magnifying glass"
        },
        "answer": "C",
        "answerText": "Mirror stereoscope",
        "explanation": "A mirror stereoscope uses mirrors and prisms to view larger overlapping photographs without having to fold or overlap them."
      },
      {
        "id": "CO2_Q67",
        "co": "CO2",
        "qNum": 67,
        "question": "What is a pocket stereoscope?",
        "options": {
          "A": "A compact instrument used to view overlapping aerial photographs in 3D",
          "B": "A satellite communication device",
          "C": "A digital map printer",
          "D": "A groundwater measuring instrument"
        },
        "answer": "A",
        "answerText": "A compact instrument used to view overlapping aerial photographs in 3D",
        "explanation": "A pocket stereoscope is a compact, foldable two-lens viewer widely used for quick stereoscopic inspection in the field."
      },
      {
        "id": "CO2_Q68",
        "co": "CO2",
        "qNum": 68,
        "question": "Which instrument is useful for examining small details in aerial photographs?",
        "options": {
          "A": "Compass",
          "B": "GPS receiver",
          "C": "Rain gauge",
          "D": "Magnifying lens"
        },
        "answer": "D",
        "answerText": "Magnifying lens",
        "explanation": "A magnifying lens or loupe provides magnification to inspect minute textures and small features on aerial photographs."
      },
      {
        "id": "CO2_Q69",
        "co": "CO2",
        "qNum": 69,
        "question": "What is the purpose of a parallax bar in aerial photograph interpretation?",
        "options": {
          "A": "Measuring soil moisture",
          "B": "Measuring parallax differences for determining height",
          "C": "Recording rainfall",
          "D": "Measuring road traffic"
        },
        "answer": "B",
        "answerText": "Measuring parallax differences for determining height",
        "explanation": "A parallax bar (stereometer) measures parallax differences between overlapping photos to compute relative heights of terrain features."
      },
      {
        "id": "CO2_Q70",
        "co": "CO2",
        "qNum": 70,
        "question": "What is stereoscopic vision?",
        "options": {
          "A": "Viewing an image in black and white",
          "B": "Measuring the brightness of pixels",
          "C": "Perceiving depth through the combination of two slightly different views",
          "D": "Viewing an image using a single eye"
        },
        "answer": "C",
        "answerText": "Perceiving depth through the combination of two slightly different views",
        "explanation": "Stereoscopic vision is human binocular depth perception resulting from viewing two slightly different angles of the same scene."
      },
      {
        "id": "CO2_Q71",
        "co": "CO2",
        "qNum": 71,
        "question": "Which equipment is commonly used for displaying and examining digital satellite images?",
        "options": {
          "A": "Computer monitor",
          "B": "Rain gauge",
          "C": "Soil sampler",
          "D": "Measuring tape"
        },
        "answer": "A",
        "answerText": "Computer monitor",
        "explanation": "High-resolution computer monitors are standard hardware for viewing and analyzing digital satellite imagery."
      },
      {
        "id": "CO2_Q72",
        "co": "CO2",
        "qNum": 72,
        "question": "Which software function is useful for visual interpretation of satellite images?",
        "options": {
          "A": "Audio recording",
          "B": "Word processing",
          "C": "Spreadsheet printing",
          "D": "Image enhancement and band combination"
        },
        "answer": "D",
        "answerText": "Image enhancement and band combination",
        "explanation": "Band combination and contrast enhancement algorithms allow analysts to highlight specific land features digitally."
      },
      {
        "id": "CO2_Q73",
        "co": "CO2",
        "qNum": 73,
        "question": "What is the purpose of a magnifying stereoscope in aerial photograph interpretation?",
        "options": {
          "A": "Measuring atmospheric pressure",
          "B": "Enlarging image details while providing stereoscopic viewing",
          "C": "Measuring groundwater flow",
          "D": "Calculating satellite speed"
        },
        "answer": "B",
        "answerText": "Enlarging image details while providing stereoscopic viewing",
        "explanation": "Magnifying stereoscopes provide optical magnification while maintaining a 3D stereoscopic view for detailed inspection."
      },
      {
        "id": "CO2_Q74",
        "co": "CO2",
        "qNum": 74,
        "question": "Which factor is important when selecting equipment for visual image interpretation?",
        "options": {
          "A": "Equipment colour",
          "B": "Brand name only",
          "C": "Image scale, resolution and interpretation requirement",
          "D": "Computer wallpaper"
        },
        "answer": "C",
        "answerText": "Image scale, resolution and interpretation requirement",
        "explanation": "Selecting interpretation equipment depends on photo scale, sensor resolution, and project analytical requirements."
      },
      {
        "id": "CO2_Q75",
        "co": "CO2",
        "qNum": 75,
        "question": "What is the major advantage of combining field verification with visual image interpretation?",
        "options": {
          "A": "It helps confirm the identity and characteristics of features observed in images",
          "B": "It eliminates the need for image data",
          "C": "It reduces geographical accuracy",
          "D": "It removes all spatial information"
        },
        "answer": "A",
        "answerText": "It helps confirm the identity and characteristics of features observed in images",
        "explanation": "Ground truthing (field verification) provides definitive validation of features identified through image interpretation."
      }
    ],
    "CO3": [
      {
        "id": "CO3_Q1",
        "co": "CO3",
        "qNum": 1,
        "question": "What is the full form of GIS?",
        "options": {
          "A": "Geographic Information System",
          "B": "Global Information Service",
          "C": "Geographical Internet System",
          "D": "General Information Software"
        },
        "answer": "A",
        "answerText": "Geographic Information System",
        "explanation": "GIS stands for Geographic Information System."
      },
      {
        "id": "CO3_Q2",
        "co": "CO3",
        "qNum": 2,
        "question": "Which organization played a major role in developing the early GIS known as Canada Geographic Information System (CGIS)?",
        "options": {
          "A": "NASA",
          "B": "Canadian government",
          "C": "European Space Agency",
          "D": "United Nations"
        },
        "answer": "B",
        "answerText": "Canadian government",
        "explanation": "The Canadian government sponsored the Canada Geographic Information System (CGIS) in the 1960s to manage land inventory."
      },
      {
        "id": "CO3_Q3",
        "co": "CO3",
        "qNum": 3,
        "question": "Who is widely recognized as the father of GIS?",
        "options": {
          "A": "Roger Tomlinson",
          "B": "Michael Goodchild",
          "C": "Jack Dangermond",
          "D": "Peter Burrough"
        },
        "answer": "A",
        "answerText": "Roger Tomlinson",
        "explanation": "Dr. Roger Tomlinson is universally acclaimed as the father of GIS for designing and directing the Canada Geographic Information System."
      },
      {
        "id": "CO3_Q4",
        "co": "CO3",
        "qNum": 4,
        "question": "During which decade was the Canada Geographic Information System developed?",
        "options": {
          "A": "1940s",
          "B": "1950s",
          "C": "1960s",
          "D": "1990s"
        },
        "answer": "C",
        "answerText": "1960s",
        "explanation": "CGIS was conceptualized and developed during the 1960s (beginning around 1962–1964)."
      },
      {
        "id": "CO3_Q5",
        "co": "CO3",
        "qNum": 5,
        "question": "What was one of the major objectives of early GIS development?",
        "options": {
          "A": "Creating computer games",
          "B": "Developing communication networks",
          "C": "Designing automobiles",
          "D": "Managing and analyzing geographical data"
        },
        "answer": "D",
        "answerText": "Managing and analyzing geographical data",
        "explanation": "Early GIS was developed to analyze, store, and manage vast geographic inventories of land capability and natural resources."
      },
      {
        "id": "CO3_Q6",
        "co": "CO3",
        "qNum": 6,
        "question": "Which technology significantly contributed to the development of modern GIS?",
        "options": {
          "A": "Computer technology",
          "B": "Printing technology only",
          "C": "Audio technology",
          "D": "Mechanical calculators only"
        },
        "answer": "A",
        "answerText": "Computer technology",
        "explanation": "Advances in computer hardware, digital storage, and processing speed enabled modern computerized GIS."
      },
      {
        "id": "CO3_Q7",
        "co": "CO3",
        "qNum": 7,
        "question": "What is the primary purpose of GIS?",
        "options": {
          "A": "Processing audio signals",
          "B": "Capturing, storing, analyzing and displaying spatial data",
          "C": "Developing operating systems",
          "D": "Managing financial transactions"
        },
        "answer": "B",
        "answerText": "Capturing, storing, analyzing and displaying spatial data",
        "explanation": "A GIS captures, stores, checks, integrates, manipulates, analyzes, and displays geographically referenced spatial data."
      },
      {
        "id": "CO3_Q8",
        "co": "CO3",
        "qNum": 8,
        "question": "What does GIS architecture describe?",
        "options": {
          "A": "The geographical boundaries of a country",
          "B": "The colour of digital maps",
          "C": "The structural arrangement of GIS components and their interactions",
          "D": "The size of satellite images"
        },
        "answer": "C",
        "answerText": "The structural arrangement of GIS components and their interactions",
        "explanation": "GIS architecture describes the hardware, software, network, database, and client-server interactions underpinning a system."
      },
      {
        "id": "CO3_Q9",
        "co": "CO3",
        "qNum": 9,
        "question": "Which of the following is a major component of GIS?",
        "options": {
          "A": "Keyboard only",
          "B": "Printer only",
          "C": "Internet connection only",
          "D": "Hardware"
        },
        "answer": "D",
        "answerText": "Hardware",
        "explanation": "The five core components of GIS are: Hardware, Software, Data, People, and Methods/Procedures."
      },
      {
        "id": "CO3_Q10",
        "co": "CO3",
        "qNum": 10,
        "question": "Which GIS component contains the software used for spatial data processing and analysis?",
        "options": {
          "A": "Software",
          "B": "Hardware",
          "C": "People",
          "D": "Procedures"
        },
        "answer": "A",
        "answerText": "Software",
        "explanation": "Software provides the functions and tools needed to store, analyze, and display geographic information."
      },
      {
        "id": "CO3_Q11",
        "co": "CO3",
        "qNum": 11,
        "question": "Which GIS component represents the individuals who operate and manage GIS?",
        "options": {
          "A": "Data",
          "B": "People",
          "C": "Hardware",
          "D": "Software"
        },
        "answer": "B",
        "answerText": "People",
        "explanation": "People (GIS professionals, analysts, and end users) manage, operate, and apply GIS tools to solve real problems."
      },
      {
        "id": "CO3_Q12",
        "co": "CO3",
        "qNum": 12,
        "question": "Which of the following is considered the most important component for meaningful GIS analysis?",
        "options": {
          "A": "Monitor",
          "B": "Keyboard",
          "C": "Data",
          "D": "Printer"
        },
        "answer": "C",
        "answerText": "Data",
        "explanation": "Data is often considered the most critical and expensive component of GIS; without accurate data, analysis is meaningless."
      },
      {
        "id": "CO3_Q13",
        "co": "CO3",
        "qNum": 13,
        "question": "What is the correct general sequence of a GIS workflow?",
        "options": {
          "A": "Output, input, storage, analysis",
          "B": "Analysis, output, input, storage",
          "C": "Storage, output, input, analysis",
          "D": "Data input, data management, analysis and output"
        },
        "answer": "D",
        "answerText": "Data input, data management, analysis and output",
        "explanation": "GIS workflow sequence: Data Input -> Data Management & Storage -> Spatial Analysis -> Output & Visualization."
      },
      {
        "id": "CO3_Q14",
        "co": "CO3",
        "qNum": 14,
        "question": "Which stage of the GIS workflow involves collecting geographical information?",
        "options": {
          "A": "Data input",
          "B": "Data output",
          "C": "Map printing",
          "D": "Data visualization"
        },
        "answer": "A",
        "answerText": "Data input",
        "explanation": "Data input involves collecting, scanning, digitizing, and importing raw geographic datasets into the GIS environment."
      },
      {
        "id": "CO3_Q15",
        "co": "CO3",
        "qNum": 15,
        "question": "Which GIS workflow stage involves applying spatial operations to geographic datasets?",
        "options": {
          "A": "Data collection",
          "B": "Spatial analysis",
          "C": "Data entry",
          "D": "Data printing"
        },
        "answer": "B",
        "answerText": "Spatial analysis",
        "explanation": "Spatial analysis involves performing analytical operations (buffering, overlays, spatial joins) on geographic data."
      },
      {
        "id": "CO3_Q16",
        "co": "CO3",
        "qNum": 16,
        "question": "What are functional elements of GIS?",
        "options": {
          "A": "Types of computer monitors",
          "B": "Different map colours",
          "C": "Basic activities performed by a GIS",
          "D": "Types of network cables"
        },
        "answer": "C",
        "answerText": "Basic activities performed by a GIS",
        "explanation": "Functional elements are the core capabilities performed by a GIS: input, storage/retrieval, manipulation/analysis, and reporting/output."
      },
      {
        "id": "CO3_Q17",
        "co": "CO3",
        "qNum": 17,
        "question": "Which of the following is a fundamental functional element of GIS?",
        "options": {
          "A": "Word processing",
          "B": "Audio recording",
          "C": "Video editing",
          "D": "Data storage and retrieval"
        },
        "answer": "D",
        "answerText": "Data storage and retrieval",
        "explanation": "Data storage and retrieval is a primary functional element responsible for organizing spatial layers in geodatabases."
      },
      {
        "id": "CO3_Q18",
        "co": "CO3",
        "qNum": 18,
        "question": "Which GIS function is responsible for identifying relationships between geographical features?",
        "options": {
          "A": "Spatial analysis",
          "B": "Text editing",
          "C": "Audio processing",
          "D": "File compression"
        },
        "answer": "A",
        "answerText": "Spatial analysis",
        "explanation": "Spatial analysis investigates patterns, calculates geometric properties, and detects spatial relationships between features."
      },
      {
        "id": "CO3_Q19",
        "co": "CO3",
        "qNum": 19,
        "question": "What is the primary purpose of GIS data retrieval?",
        "options": {
          "A": "Deleting all spatial information",
          "B": "Accessing stored geographical information",
          "C": "Changing satellite orbits",
          "D": "Creating computer hardware"
        },
        "answer": "B",
        "answerText": "Accessing stored geographical information",
        "explanation": "Data retrieval allows users to query and extract stored spatial features and tabular records matching specific criteria."
      },
      {
        "id": "CO3_Q20",
        "co": "CO3",
        "qNum": 20,
        "question": "Which theoretical concept explains how spatial information is represented and manipulated in GIS?",
        "options": {
          "A": "Computer networking",
          "B": "Digital communication",
          "C": "Spatial data modelling",
          "D": "Image compression"
        },
        "answer": "C",
        "answerText": "Spatial data modelling",
        "explanation": "Spatial data modelling is the theoretical abstraction representing real-world geography as discrete digital entities."
      },
      {
        "id": "CO3_Q21",
        "co": "CO3",
        "qNum": 21,
        "question": "Which operation combines two or more spatial datasets to produce new information?",
        "options": {
          "A": "Keyboard entry",
          "B": "File deletion",
          "C": "Data printing",
          "D": "Overlay analysis"
        },
        "answer": "D",
        "answerText": "Overlay analysis",
        "explanation": "Overlay analysis superimposes multiple spatial layers to generate a composite output revealing spatial intersections."
      },
      {
        "id": "CO3_Q22",
        "co": "CO3",
        "qNum": 22,
        "question": "Which GIS operation identifies features located within a specified distance from another feature?",
        "options": {
          "A": "Buffer analysis",
          "B": "Image enhancement",
          "C": "Data compression",
          "D": "Attribute sorting"
        },
        "answer": "A",
        "answerText": "Buffer analysis",
        "explanation": "Buffer analysis creates zones of specified distance around point, line, or polygon features."
      },
      {
        "id": "CO3_Q23",
        "co": "CO3",
        "qNum": 23,
        "question": "Which GIS operation is used to identify the shortest or most suitable route between locations?",
        "options": {
          "A": "Image classification",
          "B": "Network analysis",
          "C": "Data scanning",
          "D": "Manual digitizing"
        },
        "answer": "B",
        "answerText": "Network analysis",
        "explanation": "Network analysis models movement along connected linear networks (e.g. shortest route, closest facility, service areas)."
      },
      {
        "id": "CO3_Q24",
        "co": "CO3",
        "qNum": 24,
        "question": "Which of the following is a common GIS category based on data structure?",
        "options": {
          "A": "Analog and digital printers",
          "B": "Local and international networks",
          "C": "Raster and vector GIS",
          "D": "Audio and video systems"
        },
        "answer": "C",
        "answerText": "Raster and vector GIS",
        "explanation": "GIS data structures are fundamentally categorized into Raster (cell grid) and Vector (point, line, polygon)."
      },
      {
        "id": "CO3_Q25",
        "co": "CO3",
        "qNum": 25,
        "question": "Which type of GIS is mainly designed for storing and analyzing geographical information?",
        "options": {
          "A": "Word processing system",
          "B": "Spreadsheet formatting system",
          "C": "Database printing system",
          "D": "Spatial information system"
        },
        "answer": "D",
        "answerText": "Spatial information system",
        "explanation": "A spatial information system stores, manages, and analyzes objects positioned in geographic coordinate space."
      },
      {
        "id": "CO3_Q26",
        "co": "CO3",
        "qNum": 26,
        "question": "Which data input method involves entering attribute information using a keyboard?",
        "options": {
          "A": "Keyboard entry",
          "B": "Manual digitizing",
          "C": "Scanning",
          "D": "Photogrammetry"
        },
        "answer": "A",
        "answerText": "Keyboard entry",
        "explanation": "Keyboard entry involves manual alphanumeric typing to enter attribute tables and coordinate lists into GIS."
      },
      {
        "id": "CO3_Q27",
        "co": "CO3",
        "qNum": 27,
        "question": "Which method is commonly used to convert paper maps into digital vector features?",
        "options": {
          "A": "Keyboard entry",
          "B": "Manual digitizing",
          "C": "Image printing",
          "D": "Data compression"
        },
        "answer": "B",
        "answerText": "Manual digitizing",
        "explanation": "Manual digitizing converts analog paper map features into digital vector geometries using a cursor/mouse."
      },
      {
        "id": "CO3_Q28",
        "co": "CO3",
        "qNum": 28,
        "question": "What is the main purpose of manual digitizing in GIS?",
        "options": {
          "A": "Measuring atmospheric pressure",
          "B": "Printing satellite images",
          "C": "Converting map features into digital spatial data",
          "D": "Calculating population growth"
        },
        "answer": "C",
        "answerText": "Converting map features into digital spatial data",
        "explanation": "Manual digitizing captures geometric boundaries and points from existing analog maps into digital coordinates."
      },
      {
        "id": "CO3_Q29",
        "co": "CO3",
        "qNum": 29,
        "question": "Which device is traditionally used for manual digitizing?",
        "options": {
          "A": "Printer",
          "B": "Scanner",
          "C": "GPS satellite",
          "D": "Digitizing tablet"
        },
        "answer": "D",
        "answerText": "Digitizing tablet",
        "explanation": "A digitizing tablet with a handheld puck was traditionally used for manual table digitizing of large paper maps."
      },
      {
        "id": "CO3_Q30",
        "co": "CO3",
        "qNum": 30,
        "question": "What is scanning in GIS data input?",
        "options": {
          "A": "Converting paper maps or documents into digital images",
          "B": "Entering text using a keyboard",
          "C": "Measuring slope using GPS",
          "D": "Creating database tables"
        },
        "answer": "A",
        "answerText": "Converting paper maps or documents into digital images",
        "explanation": "Scanning passes an optical sensor over a document to convert analog paper maps into digital raster pixel images."
      },
      {
        "id": "CO3_Q31",
        "co": "CO3",
        "qNum": 31,
        "question": "Which GIS process converts scanned map images into vector features automatically or semi-automatically?",
        "options": {
          "A": "Keyboard entry",
          "B": "Automatic digitizing",
          "C": "Map printing",
          "D": "Attribute joining"
        },
        "answer": "B",
        "answerText": "Automatic digitizing",
        "explanation": "Automatic digitizing (vectorization) uses software algorithms to trace raster lines into digital vector polylines."
      },
      {
        "id": "CO3_Q32",
        "co": "CO3",
        "qNum": 32,
        "question": "What is the main advantage of automatic digitizing over manual digitizing?",
        "options": {
          "A": "It eliminates all data errors",
          "B": "It does not require any input data",
          "C": "It can reduce the time required to convert map features",
          "D": "It always produces perfect vector data"
        },
        "answer": "C",
        "answerText": "It can reduce the time required to convert map features",
        "explanation": "Automatic vectorization significantly speeds up conversion compared to laborious manual tracing."
      },
      {
        "id": "CO3_Q33",
        "co": "CO3",
        "qNum": 33,
        "question": "What is georeferencing in GIS?",
        "options": {
          "A": "Deleting geographical features",
          "B": "Converting vector data into text",
          "C": "Measuring computer performance",
          "D": "Assigning real-world coordinates to spatial data"
        },
        "answer": "D",
        "answerText": "Assigning real-world coordinates to spatial data",
        "explanation": "Georeferencing assigns real-world coordinate system parameters to an unprojected raster or scanned map."
      },
      {
        "id": "CO3_Q34",
        "co": "CO3",
        "qNum": 34,
        "question": "Which method is commonly used to georeference a scanned map?",
        "options": {
          "A": "Ground Control Points",
          "B": "Audio signals",
          "C": "Text formatting",
          "D": "Database sorting"
        },
        "answer": "A",
        "answerText": "Ground Control Points",
        "explanation": "Ground Control Points (GCPs) tie recognizable raster pixel locations to known real-world geographic coordinates."
      },
      {
        "id": "CO3_Q35",
        "co": "CO3",
        "qNum": 35,
        "question": "Which of the following is an important step after scanning a paper map?",
        "options": {
          "A": "Deleting the scanned image",
          "B": "Georeferencing the scanned image",
          "C": "Converting it into audio",
          "D": "Removing all coordinates"
        },
        "answer": "B",
        "answerText": "Georeferencing the scanned image",
        "explanation": "After scanning a paper map, georeferencing is the mandatory next step before vector digitizing or analysis can occur."
      },
      {
        "id": "CO3_Q36",
        "co": "CO3",
        "qNum": 36,
        "question": "What is GIS data modelling?",
        "options": {
          "A": "Designing computer keyboards",
          "B": "Creating internet connections",
          "C": "Representing real-world geographical features digitally",
          "D": "Measuring computer temperature"
        },
        "answer": "C",
        "answerText": "Representing real-world geographical features digitally",
        "explanation": "GIS data modelling creates digital representations of real-world geographic phenomena and their relationships."
      },
      {
        "id": "CO3_Q37",
        "co": "CO3",
        "qNum": 37,
        "question": "What is the first stage of the traditional GIS data modelling process?",
        "options": {
          "A": "Physical modelling",
          "B": "Logical modelling",
          "C": "Database implementation",
          "D": "Conceptual modelling"
        },
        "answer": "D",
        "answerText": "Conceptual modelling",
        "explanation": "The database design lifecycle starts with Conceptual modelling (identifying entities and relationships independent of software)."
      },
      {
        "id": "CO3_Q38",
        "co": "CO3",
        "qNum": 38,
        "question": "Which stage of GIS data modelling identifies entities, attributes and relationships?",
        "options": {
          "A": "Conceptual modelling",
          "B": "Physical modelling",
          "C": "Data printing",
          "D": "Map scanning"
        },
        "answer": "A",
        "answerText": "Conceptual modelling",
        "explanation": "Conceptual modelling establishes user requirements, geographic entities, attributes, and relationships."
      },
      {
        "id": "CO3_Q39",
        "co": "CO3",
        "qNum": 39,
        "question": "Which stage of GIS data modelling describes the organization of data structures and relationships?",
        "options": {
          "A": "Conceptual modelling",
          "B": "Logical modelling",
          "C": "Physical modelling",
          "D": "Data visualization"
        },
        "answer": "B",
        "answerText": "Logical modelling",
        "explanation": "Logical modelling translates conceptual models into specific data structures (e.g. relational tables, vector feature classes)."
      },
      {
        "id": "CO3_Q40",
        "co": "CO3",
        "qNum": 40,
        "question": "Which stage of GIS data modelling deals with actual database implementation?",
        "options": {
          "A": "Conceptual modelling",
          "B": "Logical modelling",
          "C": "Physical modelling",
          "D": "Map interpretation"
        },
        "answer": "C",
        "answerText": "Physical modelling",
        "explanation": "Physical modelling specifies the actual file formats, disk storage structures, indexes, and database hardware implementation."
      },
      {
        "id": "CO3_Q41",
        "co": "CO3",
        "qNum": 41,
        "question": "What are the three traditional stages of GIS data modelling?",
        "options": {
          "A": "Input, output and printing",
          "B": "Scanning, editing and display",
          "C": "Collection, storage and deletion",
          "D": "Conceptual, logical and physical"
        },
        "answer": "D",
        "answerText": "Conceptual, logical and physical",
        "explanation": "The three traditional stages of data modeling are: Conceptual -> Logical -> Physical."
      },
      {
        "id": "CO3_Q42",
        "co": "CO3",
        "qNum": 42,
        "question": "Which data model represents geographical features using cells or pixels?",
        "options": {
          "A": "Raster data model",
          "B": "Vector data model",
          "C": "Network data model",
          "D": "Relational data model"
        },
        "answer": "A",
        "answerText": "Raster data model",
        "explanation": "The raster data model represents geographic space as a matrix of regular square grid cells or pixels."
      },
      {
        "id": "CO3_Q43",
        "co": "CO3",
        "qNum": 43,
        "question": "Which data model represents geographical features using points, lines and polygons?",
        "options": {
          "A": "Raster",
          "B": "Vector",
          "C": "Grid",
          "D": "Image-only"
        },
        "answer": "B",
        "answerText": "Vector",
        "explanation": "The vector data model represents discrete geographic features using coordinate-defined points, lines, and polygons."
      },
      {
        "id": "CO3_Q44",
        "co": "CO3",
        "qNum": 44,
        "question": "Which data model is most suitable for representing continuous phenomena such as elevation and temperature?",
        "options": {
          "A": "Vector",
          "B": "Network",
          "C": "Raster",
          "D": "Relational"
        },
        "answer": "C",
        "answerText": "Raster",
        "explanation": "Raster data models are ideal for continuous phenomena that vary gradually across space (elevation, temperature, rainfall)."
      },
      {
        "id": "CO3_Q45",
        "co": "CO3",
        "qNum": 45,
        "question": "Which vector geometry is most suitable for representing a school location?",
        "options": {
          "A": "Polygon",
          "B": "Raster cell",
          "C": "Line",
          "D": "Point"
        },
        "answer": "D",
        "answerText": "Point",
        "explanation": "A point geometry (single X, Y coordinate pair) is best suited for representing discrete locations like a school or well."
      },
      {
        "id": "CO3_Q46",
        "co": "CO3",
        "qNum": 46,
        "question": "Which vector geometry is most suitable for representing a road?",
        "options": {
          "A": "Line",
          "B": "Point",
          "C": "Polygon",
          "D": "Raster cell"
        },
        "answer": "A",
        "answerText": "Line",
        "explanation": "A line (polyline) geometry with start, intermediate, and end vertices represents linear features like roads and rivers."
      },
      {
        "id": "CO3_Q47",
        "co": "CO3",
        "qNum": 47,
        "question": "Which vector geometry is most suitable for representing a lake boundary?",
        "options": {
          "A": "Point",
          "B": "Polygon",
          "C": "Line",
          "D": "Pixel"
        },
        "answer": "B",
        "answerText": "Polygon",
        "explanation": "A polygon geometry (closed loop of coordinate pairs) models bounded areas like lakes, parcels, and administrative zones."
      },
      {
        "id": "CO3_Q48",
        "co": "CO3",
        "qNum": 48,
        "question": "What does raster resolution refer to?",
        "options": {
          "A": "Number of vector points",
          "B": "Number of map layers",
          "C": "Ground area represented by each pixel or cell",
          "D": "Number of attribute tables"
        },
        "answer": "C",
        "answerText": "Ground area represented by each pixel or cell",
        "explanation": "Raster resolution denotes the ground dimensions represented by each cell (e.g. 30m x 30m grid)."
      },
      {
        "id": "CO3_Q49",
        "co": "CO3",
        "qNum": 49,
        "question": "What happens when raster cell size becomes smaller?",
        "options": {
          "A": "Spatial detail always decreases",
          "B": "File size always becomes zero",
          "C": "Geographic coordinates disappear",
          "D": "Spatial detail generally increases"
        },
        "answer": "D",
        "answerText": "Spatial detail generally increases",
        "explanation": "Smaller raster cell sizes yield higher spatial resolution and greater detail, though data file sizes increase significantly."
      },
      {
        "id": "CO3_Q50",
        "co": "CO3",
        "qNum": 50,
        "question": "Which of the following is an advantage of the vector data model?",
        "options": {
          "A": "Precise representation of discrete geographical features",
          "B": "Best representation of all continuous surfaces",
          "C": "No need for coordinates",
          "D": "No requirement for attribute data"
        },
        "answer": "A",
        "answerText": "Precise representation of discrete geographical features",
        "explanation": "Vector data models precisely define discrete boundaries, preserve geometric accuracy, and support topological relationships."
      },
      {
        "id": "CO3_Q51",
        "co": "CO3",
        "qNum": 51,
        "question": "Which of the following is an advantage of the raster data model?",
        "options": {
          "A": "It represents road networks only",
          "B": "It is suitable for continuous spatial data analysis",
          "C": "It stores only point features",
          "D": "It cannot represent elevation"
        },
        "answer": "B",
        "answerText": "It is suitable for continuous spatial data analysis",
        "explanation": "Raster models are computationally efficient for continuous surface modeling, map algebra, and grid interpolation."
      },
      {
        "id": "CO3_Q52",
        "co": "CO3",
        "qNum": 52,
        "question": "What is a spatial data model?",
        "options": {
          "A": "A computer hardware configuration",
          "B": "A method of printing maps",
          "C": "A framework for representing geographical features and relationships",
          "D": "A technique for increasing internet speed"
        },
        "answer": "C",
        "answerText": "A framework for representing geographical features and relationships",
        "explanation": "A spatial data model provides the conceptual and mathematical framework for abstracting real-world geography into computer systems."
      },
      {
        "id": "CO3_Q53",
        "co": "CO3",
        "qNum": 53,
        "question": "Which data structure stores geographical information in rows and columns of cells?",
        "options": {
          "A": "Vector",
          "B": "Network",
          "C": "Topological",
          "D": "Raster"
        },
        "answer": "D",
        "answerText": "Raster",
        "explanation": "Raster data structures organize spatial information into regular arrays of rows and columns."
      },
      {
        "id": "CO3_Q54",
        "co": "CO3",
        "qNum": 54,
        "question": "What is topology in GIS?",
        "options": {
          "A": "The study of spatial relationships between geographical features",
          "B": "The study of computer processors",
          "C": "The process of printing maps",
          "D": "A method of image compression"
        },
        "answer": "A",
        "answerText": "The study of spatial relationships between geographical features",
        "explanation": "Topology defines the spatial relationships between features (connectivity, adjacency, containment) independent of coordinates."
      },
      {
        "id": "CO3_Q55",
        "co": "CO3",
        "qNum": 55,
        "question": "Which of the following is an example of a topological relationship?",
        "options": {
          "A": "Pixel brightness",
          "B": "Adjacency between two polygons",
          "C": "File size",
          "D": "Screen resolution"
        },
        "answer": "B",
        "answerText": "Adjacency between two polygons",
        "explanation": "Adjacency (knowing which two polygons share a common boundary) is a fundamental topological property."
      },
      {
        "id": "CO3_Q56",
        "co": "CO3",
        "qNum": 56,
        "question": "What is GIS data editing?",
        "options": {
          "A": "Deleting the entire GIS database",
          "B": "Changing computer hardware",
          "C": "Modifying spatial and attribute data to improve correctness",
          "D": "Removing geographical coordinates"
        },
        "answer": "C",
        "answerText": "Modifying spatial and attribute data to improve correctness",
        "explanation": "GIS data editing updates, corrects, cleans, and maintains spatial geometries and attribute tables."
      },
      {
        "id": "CO3_Q57",
        "co": "CO3",
        "qNum": 57,
        "question": "Which operation is used to combine two connected line segments into one feature?",
        "options": {
          "A": "Buffering",
          "B": "Clipping",
          "C": "Interpolation",
          "D": "Merging"
        },
        "answer": "D",
        "answerText": "Merging",
        "explanation": "The merge operation combines multiple contiguous line segments or polygons into a single unified feature."
      },
      {
        "id": "CO3_Q58",
        "co": "CO3",
        "qNum": 58,
        "question": "What is the purpose of snapping in GIS editing?",
        "options": {
          "A": "Ensuring that features connect accurately at specified locations",
          "B": "Increasing image brightness",
          "C": "Deleting attribute records",
          "D": "Converting raster data into audio"
        },
        "answer": "A",
        "answerText": "Ensuring that features connect accurately at specified locations",
        "explanation": "Snapping automatically connects newly digitized vertices or edges to existing features within a specified tolerance distance."
      },
      {
        "id": "CO3_Q59",
        "co": "CO3",
        "qNum": 59,
        "question": "Which GIS editing operation is used to remove unwanted portions of a feature?",
        "options": {
          "A": "Georeferencing",
          "B": "Trimming",
          "C": "Buffering",
          "D": "Interpolation"
        },
        "answer": "B",
        "answerText": "Trimming",
        "explanation": "Trimming removes overshooting portions of lines extending past intended intersections during digitizing."
      },
      {
        "id": "CO3_Q60",
        "co": "CO3",
        "qNum": 60,
        "question": "What is an attribute error in GIS?",
        "options": {
          "A": "Incorrect map projection only",
          "B": "Incorrect satellite altitude",
          "C": "Incorrect information stored in a feature's attribute table",
          "D": "Incorrect computer screen size"
        },
        "answer": "C",
        "answerText": "Incorrect information stored in a feature's attribute table",
        "explanation": "Attribute errors involve incorrect, misspelled, or missing descriptive records in the tabular database."
      },
      {
        "id": "CO3_Q61",
        "co": "CO3",
        "qNum": 61,
        "question": "What is a positional error in GIS?",
        "options": {
          "A": "Incorrect feature name",
          "B": "Missing attribute description",
          "C": "Incorrect data format",
          "D": "Incorrect geographical location of a feature"
        },
        "answer": "D",
        "answerText": "Incorrect geographical location of a feature",
        "explanation": "Positional errors refer to discrepancies between a feature's recorded digital coordinates and its true ground position."
      },
      {
        "id": "CO3_Q62",
        "co": "CO3",
        "qNum": 62,
        "question": "Which of the following is a common source of GIS data error?",
        "options": {
          "A": "Inaccurate source maps",
          "B": "Correct coordinate systems",
          "C": "Proper data validation",
          "D": "Accurate field measurements"
        },
        "answer": "A",
        "answerText": "Inaccurate source maps",
        "explanation": "Inaccurate, distorted, or outdated source maps directly introduce errors into resulting GIS datasets."
      },
      {
        "id": "CO3_Q63",
        "co": "CO3",
        "qNum": 63,
        "question": "What is digitizing error?",
        "options": {
          "A": "Error caused by satellite communication",
          "B": "Error introduced while converting map features into digital data",
          "C": "Error caused by computer shutdown",
          "D": "Error in printing a report"
        },
        "answer": "B",
        "answerText": "Error introduced while converting map features into digital data",
        "explanation": "Digitizing errors occur when operators introduce hand tracing jitter, overshoots, undershoots, or miss features."
      },
      {
        "id": "CO3_Q64",
        "co": "CO3",
        "qNum": 64,
        "question": "What is an omission error in GIS?",
        "options": {
          "A": "Recording a feature twice",
          "B": "Assigning the wrong coordinate system",
          "C": "Failing to include an existing geographical feature",
          "D": "Using an incorrect map colour"
        },
        "answer": "C",
        "answerText": "Failing to include an existing geographical feature",
        "explanation": "An omission error occurs when an existing real-world geographic feature is inadvertently left out of the digital database."
      },
      {
        "id": "CO3_Q65",
        "co": "CO3",
        "qNum": 65,
        "question": "What is a commission error in GIS?",
        "options": {
          "A": "Missing a geographical feature",
          "B": "Removing an attribute table",
          "C": "Changing the map scale",
          "D": "Including a feature that does not actually exist"
        },
        "answer": "D",
        "answerText": "Including a feature that does not actually exist",
        "explanation": "A commission error occurs when a non-existent feature is mistakenly added into the database."
      },
      {
        "id": "CO3_Q66",
        "co": "CO3",
        "qNum": 66,
        "question": "Which error can occur when combining spatial datasets with different coordinate reference systems?",
        "options": {
          "A": "Spatial misalignment",
          "B": "Correct data integration",
          "C": "Improved resolution",
          "D": "Increased attribute accuracy"
        },
        "answer": "A",
        "answerText": "Spatial misalignment",
        "explanation": "Overlaying datasets defined with different coordinate systems causes spatial misalignment unless reprojected."
      },
      {
        "id": "CO3_Q67",
        "co": "CO3",
        "qNum": 67,
        "question": "What is the purpose of topology validation in GIS?",
        "options": {
          "A": "Increasing image brightness",
          "B": "Detecting spatial errors such as gaps and overlaps",
          "C": "Changing satellite frequencies",
          "D": "Reducing computer memory"
        },
        "answer": "B",
        "answerText": "Detecting spatial errors such as gaps and overlaps",
        "explanation": "Topology validation rules identify structural errors such as unclosed polygons, self-intersections, gaps, and overlaps."
      },
      {
        "id": "CO3_Q68",
        "co": "CO3",
        "qNum": 68,
        "question": "Which of the following is a common example of a topological error?",
        "options": {
          "A": "Correct polygon adjacency",
          "B": "Accurate point location",
          "C": "Overlapping polygons where overlap is not permitted",
          "D": "Correct attribute values"
        },
        "answer": "C",
        "answerText": "Overlapping polygons where overlap is not permitted",
        "explanation": "Polygons overlapping where parcel boundaries should be mutually exclusive represents a classic topological error."
      },
      {
        "id": "CO3_Q69",
        "co": "CO3",
        "qNum": 69,
        "question": "What is the main purpose of data validation in GIS?",
        "options": {
          "A": "Increasing the number of map layers",
          "B": "Changing the map colour",
          "C": "Deleting all spatial features",
          "D": "Checking data accuracy and consistency"
        },
        "answer": "D",
        "answerText": "Checking data accuracy and consistency",
        "explanation": "Data validation verifies that GIS datasets comply with defined accuracy standards, completeness, and logical consistency."
      },
      {
        "id": "CO3_Q70",
        "co": "CO3",
        "qNum": 70,
        "question": "Which method helps detect duplicate records in a GIS attribute table?",
        "options": {
          "A": "Database queries and validation",
          "B": "Image sharpening",
          "C": "GPS satellite tracking",
          "D": "Raster interpolation"
        },
        "answer": "A",
        "answerText": "Database queries and validation",
        "explanation": "Database validation queries (e.g. SQL GROUP BY / HAVING COUNT > 1) quickly isolate duplicate attribute records."
      },
      {
        "id": "CO3_Q71",
        "co": "CO3",
        "qNum": 71,
        "question": "What is the sliver polygon problem in GIS?",
        "options": {
          "A": "A large polygon representing a country",
          "B": "A narrow unwanted polygon created due to overlay or boundary mismatch",
          "C": "A point representing a village",
          "D": "A line representing a river"
        },
        "answer": "B",
        "answerText": "A narrow unwanted polygon created due to overlay or boundary mismatch",
        "explanation": "Sliver polygons are tiny, unwanted narrow artifact polygons created along boundaries during polygon overlay or digitizing mismatch."
      },
      {
        "id": "CO3_Q72",
        "co": "CO3",
        "qNum": 72,
        "question": "Which technique can help correct errors caused by small gaps between adjacent polygons?",
        "options": {
          "A": "Image compression",
          "B": "Keyboard entry",
          "C": "Snapping and topology correction",
          "D": "Data deletion"
        },
        "answer": "C",
        "answerText": "Snapping and topology correction",
        "explanation": "Setting appropriate snapping tolerances and running topological cluster rules eliminates small gaps between polygons."
      },
      {
        "id": "CO3_Q73",
        "co": "CO3",
        "qNum": 73,
        "question": "What is the purpose of metadata in GIS?",
        "options": {
          "A": "Changing the map projection",
          "B": "Deleting spatial information",
          "C": "Increasing the number of pixels",
          "D": "Describing the characteristics, source and quality of spatial data"
        },
        "answer": "D",
        "answerText": "Describing the characteristics, source and quality of spatial data",
        "explanation": "Metadata ('data about data') documents dataset origin, projection, accuracy, lineage, constraints, and update history."
      },
      {
        "id": "CO3_Q74",
        "co": "CO3",
        "qNum": 74,
        "question": "Which of the following is a source of temporal error in GIS?",
        "options": {
          "A": "Using outdated geographical data",
          "B": "Using correct coordinates",
          "C": "Proper data validation",
          "D": "Accurate field surveying"
        },
        "answer": "A",
        "answerText": "Using outdated geographical data",
        "explanation": "Using outdated historical data without accounting for land development introduces temporal errors."
      },
      {
        "id": "CO3_Q75",
        "co": "CO3",
        "qNum": 75,
        "question": "Which approach is most effective for improving the overall quality of GIS datasets?",
        "options": {
          "A": "Ignoring data errors",
          "B": "Data validation, quality control and error correction",
          "C": "Removing all attribute information",
          "D": "Using only scanned images"
        },
        "answer": "B",
        "answerText": "Data validation, quality control and error correction",
        "explanation": "Systematic quality assurance (QA/QC), topology validation, and ground verification are essential for high-integrity GIS."
      }
    ],
    "CO4": [
      {
        "id": "CO4_Q1",
        "co": "CO4",
        "qNum": 1,
        "question": "What is the full form of GPS?",
        "options": {
          "A": "Global Positioning System",
          "B": "Geographic Processing System",
          "C": "General Positioning Service",
          "D": "Global Processing Satellite"
        },
        "answer": "A",
        "answerText": "Global Positioning System",
        "explanation": "GPS stands for Global Positioning System (officially Navstar GPS)."
      },
      {
        "id": "CO4_Q2",
        "co": "CO4",
        "qNum": 2,
        "question": "Which organization originally developed GPS?",
        "options": {
          "A": "NASA",
          "B": "United States Department of Defense",
          "C": "European Space Agency",
          "D": "ISRO"
        },
        "answer": "B",
        "answerText": "United States Department of Defense",
        "explanation": "GPS was developed and launched by the United States Department of Defense (DoD) for military and civilian positioning."
      },
      {
        "id": "CO4_Q3",
        "co": "CO4",
        "qNum": 3,
        "question": "How many segments are present in the GPS architecture?",
        "options": {
          "A": "Two",
          "B": "Four",
          "C": "Three",
          "D": "Five"
        },
        "answer": "C",
        "answerText": "Three",
        "explanation": "The GPS architecture comprises three distinct segments: Space Segment, Control Segment, and User Segment."
      },
      {
        "id": "CO4_Q4",
        "co": "CO4",
        "qNum": 4,
        "question": "Which of the following is NOT a major segment of GPS?",
        "options": {
          "A": "Space segment",
          "B": "Control segment",
          "C": "User segment",
          "D": "Atmospheric segment"
        },
        "answer": "D",
        "answerText": "Atmospheric segment",
        "explanation": "The three segments of GPS are Space, Control, and User. The atmospheric medium is not a designated architecture segment."
      },
      {
        "id": "CO4_Q5",
        "co": "CO4",
        "qNum": 5,
        "question": "What is the primary function of the GPS space segment?",
        "options": {
          "A": "Transmitting navigation signals from satellites",
          "B": "Preparing digital maps",
          "C": "Monitoring groundwater",
          "D": "Managing land records"
        },
        "answer": "A",
        "answerText": "Transmitting navigation signals from satellites",
        "explanation": "The space segment consists of the orbiting constellation of satellites continuously broadcasting coded radio navigation signals."
      },
      {
        "id": "CO4_Q6",
        "co": "CO4",
        "qNum": 6,
        "question": "What is the main function of the GPS control segment?",
        "options": {
          "A": "Receiving signals from mobile phones",
          "B": "Monitoring and managing GPS satellites",
          "C": "Producing satellite images",
          "D": "Measuring rainfall"
        },
        "answer": "B",
        "answerText": "Monitoring and managing GPS satellites",
        "explanation": "The control segment (master station, monitor stations, ground antennas) tracks satellites, updates orbits, and synchronizes clocks."
      },
      {
        "id": "CO4_Q7",
        "co": "CO4",
        "qNum": 7,
        "question": "Which component of GPS receives satellite signals to determine location?",
        "options": {
          "A": "Ground control station",
          "B": "Satellite antenna",
          "C": "GPS receiver",
          "D": "Weather radar"
        },
        "answer": "C",
        "answerText": "GPS receiver",
        "explanation": "The user segment consists of GPS receivers that pick up satellite signals and calculate precise user coordinates."
      },
      {
        "id": "CO4_Q8",
        "co": "CO4",
        "qNum": 8,
        "question": "What is the basic principle used by GPS to calculate position?",
        "options": {
          "A": "Triangulation using angles",
          "B": "Electromagnetic reflection",
          "C": "Image classification",
          "D": "Trilateration using distances"
        },
        "answer": "D",
        "answerText": "Trilateration using distances",
        "explanation": "GPS calculates position via trilateration—measuring distances from multiple satellites of known orbital positions."
      },
      {
        "id": "CO4_Q9",
        "co": "CO4",
        "qNum": 9,
        "question": "What is the minimum number of satellites generally required for a three-dimensional GPS position and receiver clock correction?",
        "options": {
          "A": "Four",
          "B": "Two",
          "C": "Three",
          "D": "Six"
        },
        "answer": "A",
        "answerText": "Four",
        "explanation": "A minimum of four satellites is required to solve for 3D position (X, Y, Z / Latitude, Longitude, Height) plus receiver clock bias (t)."
      },
      {
        "id": "CO4_Q10",
        "co": "CO4",
        "qNum": 10,
        "question": "What does a GPS receiver calculate using satellite signals?",
        "options": {
          "A": "Soil moisture only",
          "B": "Distance from satellites",
          "C": "Atmospheric pressure",
          "D": "Land surface temperature"
        },
        "answer": "B",
        "answerText": "Distance from satellites",
        "explanation": "A GPS receiver calculates satellite-to-receiver ranges by multiplying signal travel time by the speed of light."
      },
      {
        "id": "CO4_Q11",
        "co": "CO4",
        "qNum": 11,
        "question": "Which atmospheric layer causes significant delays in GPS signals due to ionization?",
        "options": {
          "A": "Troposphere",
          "B": "Stratosphere",
          "C": "Ionosphere",
          "D": "Mesosphere"
        },
        "answer": "C",
        "answerText": "Ionosphere",
        "explanation": "The ionosphere contains charged ions and free electrons that refract and delay radio waves, causing variable signal delays."
      },
      {
        "id": "CO4_Q12",
        "co": "CO4",
        "qNum": 12,
        "question": "Which factor can reduce GPS positioning accuracy?",
        "options": {
          "A": "Clear sky visibility",
          "B": "Use of multiple satellites",
          "C": "Open terrain",
          "D": "Multipath signal errors"
        },
        "answer": "D",
        "answerText": "Multipath signal errors",
        "explanation": "Multipath error occurs when GPS signals bounce off nearby buildings, rocks, or water before reaching the antenna."
      },
      {
        "id": "CO4_Q13",
        "co": "CO4",
        "qNum": 13,
        "question": "Which GPS technique improves positioning accuracy using a nearby reference station?",
        "options": {
          "A": "DGPS",
          "B": "GIS",
          "C": "LIDAR",
          "D": "RADAR"
        },
        "answer": "A",
        "answerText": "DGPS",
        "explanation": "Differential GPS (DGPS) uses a stationary base station at a known location to broadcast real-time corrections, boosting accuracy."
      },
      {
        "id": "CO4_Q14",
        "co": "CO4",
        "qNum": 14,
        "question": "What is the main purpose of GPS in vehicle navigation?",
        "options": {
          "A": "Measuring soil pH",
          "B": "Determining vehicle location and route",
          "C": "Measuring water quality",
          "D": "Monitoring vegetation density"
        },
        "answer": "B",
        "answerText": "Determining vehicle location and route",
        "explanation": "In vehicle navigation, GPS calculates real-time coordinates, heading, and speed to guide vehicles along routes."
      },
      {
        "id": "CO4_Q15",
        "co": "CO4",
        "qNum": 15,
        "question": "Which GPS application is most useful in precision agriculture?",
        "options": {
          "A": "Ocean temperature measurement",
          "B": "Building height estimation",
          "C": "Accurate field positioning and farm machinery guidance",
          "D": "Mineral processing"
        },
        "answer": "C",
        "answerText": "Accurate field positioning and farm machinery guidance",
        "explanation": "Precision agriculture uses high-accuracy GPS guidance for auto-steering tractors, variable-rate fertilizer application, and yield mapping."
      },
      {
        "id": "CO4_Q16",
        "co": "CO4",
        "qNum": 16,
        "question": "Which data is primarily represented in a Land Use/Land Cover map?",
        "options": {
          "A": "Only elevation",
          "B": "Only rainfall",
          "C": "Only groundwater depth",
          "D": "Types of land utilization and surface cover"
        },
        "answer": "D",
        "answerText": "Types of land utilization and surface cover",
        "explanation": "Land Use/Land Cover (LULC) maps categorize both how humans utilize land (agriculture, residential) and surface physical cover (forest, water)."
      },
      {
        "id": "CO4_Q17",
        "co": "CO4",
        "qNum": 17,
        "question": "Which of the following is an example of Land Use?",
        "options": {
          "A": "Agricultural land",
          "B": "Granite rock",
          "C": "River water",
          "D": "Natural soil texture"
        },
        "answer": "A",
        "answerText": "Agricultural land",
        "explanation": "Agricultural land represents a Land Use (human socioeconomic activity applied to the land)."
      },
      {
        "id": "CO4_Q18",
        "co": "CO4",
        "qNum": 18,
        "question": "Which of the following is an example of Land Cover?",
        "options": {
          "A": "Industrial development",
          "B": "Forest vegetation",
          "C": "Residential zoning",
          "D": "Commercial activity"
        },
        "answer": "B",
        "answerText": "Forest vegetation",
        "explanation": "Forest vegetation represents Land Cover (the physical biological cover observed on the Earth's surface)."
      },
      {
        "id": "CO4_Q19",
        "co": "CO4",
        "qNum": 19,
        "question": "Which remote sensing technique is commonly used for Land Use/Land Cover classification?",
        "options": {
          "A": "Seismic surveying",
          "B": "Groundwater pumping",
          "C": "Supervised classification",
          "D": "GPS trilateration"
        },
        "answer": "C",
        "answerText": "Supervised classification",
        "explanation": "Supervised classification uses analyst-selected training samples to train algorithms to classify image pixels into LULC categories."
      },
      {
        "id": "CO4_Q20",
        "co": "CO4",
        "qNum": 20,
        "question": "Which satellite is widely used for Land Use/Land Cover studies?",
        "options": {
          "A": "INSAT communication satellite",
          "B": "GPS navigation satellite",
          "C": "Communication relay satellite",
          "D": "Landsat satellite"
        },
        "answer": "D",
        "answerText": "Landsat satellite",
        "explanation": "Landsat satellites provide multi-decadal multispectral observations ideally suited for regional LULC mapping and monitoring."
      },
      {
        "id": "CO4_Q21",
        "co": "CO4",
        "qNum": 21,
        "question": "What is the Normalized Difference Vegetation Index (NDVI) mainly used for?",
        "options": {
          "A": "Assessing vegetation health and density",
          "B": "Measuring road length",
          "C": "Identifying building materials",
          "D": "Measuring groundwater pressure"
        },
        "answer": "A",
        "answerText": "Assessing vegetation health and density",
        "explanation": "The Normalized Difference Vegetation Index (NDVI) quantifies green vegetation density, vigor, and biomass."
      },
      {
        "id": "CO4_Q22",
        "co": "CO4",
        "qNum": 22,
        "question": "Which remote sensing bands are used to calculate NDVI?",
        "options": {
          "A": "Blue and green",
          "B": "Red and near-infrared",
          "C": "Thermal and microwave",
          "D": "Ultraviolet and blue"
        },
        "answer": "B",
        "answerText": "Red and near-infrared",
        "explanation": "NDVI is calculated as (NIR - Red) / (NIR + Red), utilizing red absorption and near-infrared reflectance of green leaves."
      },
      {
        "id": "CO4_Q23",
        "co": "CO4",
        "qNum": 23,
        "question": "What is the main purpose of change detection in Land Use/Land Cover studies?",
        "options": {
          "A": "Measuring satellite speed",
          "B": "Calculating GPS clock errors",
          "C": "Identifying changes in land cover over time",
          "D": "Measuring river discharge only"
        },
        "answer": "C",
        "answerText": "Identifying changes in land cover over time",
        "explanation": "Change detection compares multi-temporal satellite datasets to quantify land use changes and habitat transformation over time."
      },
      {
        "id": "CO4_Q24",
        "co": "CO4",
        "qNum": 24,
        "question": "Which GIS operation is useful for calculating the area of different land cover classes?",
        "options": {
          "A": "Network routing",
          "B": "Geocoding",
          "C": "Buffer generation",
          "D": "Area calculation and spatial analysis"
        },
        "answer": "D",
        "answerText": "Area calculation and spatial analysis",
        "explanation": "GIS area calculation functions tabulate pixel counts or polygon geometry to compute total acreage per land cover class."
      },
      {
        "id": "CO4_Q25",
        "co": "CO4",
        "qNum": 25,
        "question": "Which data source is commonly used to prepare Land Use/Land Cover maps?",
        "options": {
          "A": "Satellite imagery",
          "B": "Audio recordings",
          "C": "Text documents",
          "D": "Financial reports"
        },
        "answer": "A",
        "answerText": "Satellite imagery",
        "explanation": "Multispectral satellite imagery is the primary data source used for classifying and monitoring LULC over extensive landscapes."
      },
      {
        "id": "CO4_Q26",
        "co": "CO4",
        "qNum": 26,
        "question": "What does a slope map represent?",
        "options": {
          "A": "Soil chemical composition",
          "B": "Rate of change of elevation with horizontal distance",
          "C": "Groundwater salinity",
          "D": "Population density"
        },
        "answer": "B",
        "answerText": "Rate of change of elevation with horizontal distance",
        "explanation": "A slope map depicts terrain steepness as the rate of maximum change in elevation over horizontal distance."
      },
      {
        "id": "CO4_Q27",
        "co": "CO4",
        "qNum": 27,
        "question": "Which input data is commonly used to generate a slope map in GIS?",
        "options": {
          "A": "Census data",
          "B": "Road network data",
          "C": "Digital Elevation Model",
          "D": "Soil pH records"
        },
        "answer": "C",
        "answerText": "Digital Elevation Model",
        "explanation": "A Digital Elevation Model (DEM) is the primary raster input required to calculate slope and aspect in GIS."
      },
      {
        "id": "CO4_Q28",
        "co": "CO4",
        "qNum": 28,
        "question": "In which unit is slope commonly expressed?",
        "options": {
          "A": "Kilograms",
          "B": "Litres",
          "C": "Degrees Celsius",
          "D": "Degrees or percentage"
        },
        "answer": "D",
        "answerText": "Degrees or percentage",
        "explanation": "Slope gradient is standardly expressed either in angular degrees (0° to 90°) or as a percent slope (rise/run * 100)."
      },
      {
        "id": "CO4_Q29",
        "co": "CO4",
        "qNum": 29,
        "question": "Which terrain condition is generally more susceptible to surface runoff?",
        "options": {
          "A": "Steep slopes",
          "B": "Flat plains",
          "C": "Level agricultural fields",
          "D": "Coastal beaches"
        },
        "answer": "A",
        "answerText": "Steep slopes",
        "explanation": "Steep slopes accelerate gravity-driven runoff velocity, reducing infiltration and promoting severe surface erosion."
      },
      {
        "id": "CO4_Q30",
        "co": "CO4",
        "qNum": 30,
        "question": "Which GIS operation is used to derive slope from elevation data?",
        "options": {
          "A": "Overlay analysis",
          "B": "Terrain analysis",
          "C": "Network analysis",
          "D": "Attribute joining"
        },
        "answer": "B",
        "answerText": "Terrain analysis",
        "explanation": "Terrain analysis tools in GIS calculate surface slope, aspect, curvature, and hillshade directly from DEM rasters."
      },
      {
        "id": "CO4_Q31",
        "co": "CO4",
        "qNum": 31,
        "question": "What is a Digital Elevation Model (DEM)?",
        "options": {
          "A": "A database of population",
          "B": "A map of soil nutrients",
          "C": "A digital representation of ground surface elevation",
          "D": "A groundwater quality report"
        },
        "answer": "C",
        "answerText": "A digital representation of ground surface elevation",
        "explanation": "A Digital Elevation Model (DEM) is a regular raster grid representing bare-earth terrain surface elevations."
      },
      {
        "id": "CO4_Q32",
        "co": "CO4",
        "qNum": 32,
        "question": "Which of the following is an important application of slope mapping?",
        "options": {
          "A": "Credit card processing",
          "B": "Weather forecasting only",
          "C": "Vehicle registration",
          "D": "Road alignment and landslide susceptibility analysis"
        },
        "answer": "D",
        "answerText": "Road alignment and landslide susceptibility analysis",
        "explanation": "Slope maps are critical in civil engineering for designing highway alignments and assessing landslide hazards."
      },
      {
        "id": "CO4_Q33",
        "co": "CO4",
        "qNum": 33,
        "question": "What is the primary objective of groundwater prospect mapping?",
        "options": {
          "A": "Identifying areas suitable for groundwater occurrence",
          "B": "Measuring traffic density",
          "C": "Mapping building heights",
          "D": "Identifying industrial emissions"
        },
        "answer": "A",
        "answerText": "Identifying areas suitable for groundwater occurrence",
        "explanation": "Groundwater prospect mapping delineates potential subsurface groundwater recharge zones and high-yielding aquifer areas."
      },
      {
        "id": "CO4_Q34",
        "co": "CO4",
        "qNum": 34,
        "question": "Which of the following is an important factor in groundwater prospect mapping?",
        "options": {
          "A": "Internet speed",
          "B": "Geology and geological structures",
          "C": "Vehicle population",
          "D": "Political boundaries"
        },
        "answer": "B",
        "answerText": "Geology and geological structures",
        "explanation": "Lithology, structural faults, fractures, and rock porosity are primary geological factors governing groundwater storage."
      },
      {
        "id": "CO4_Q35",
        "co": "CO4",
        "qNum": 35,
        "question": "Which landform generally supports groundwater recharge?",
        "options": {
          "A": "Concrete surfaces",
          "B": "Steep rocky cliffs",
          "C": "Valley fills and weathered zones",
          "D": "Industrial rooftops"
        },
        "answer": "C",
        "answerText": "Valley fills and weathered zones",
        "explanation": "Valley fills, alluvial plains, and deeply weathered rock horizons feature high permeability and favorable groundwater accumulation."
      },
      {
        "id": "CO4_Q36",
        "co": "CO4",
        "qNum": 36,
        "question": "Which remote sensing feature can help identify groundwater potential zones?",
        "options": {
          "A": "Building colours",
          "B": "Road traffic",
          "C": "Administrative boundaries",
          "D": "Lineaments and drainage patterns"
        },
        "answer": "D",
        "answerText": "Lineaments and drainage patterns",
        "explanation": "Lineaments (fault lines, fracture traces) and drainage anomalies visible on satellite imagery indicate subsurface water potential."
      },
      {
        "id": "CO4_Q37",
        "co": "CO4",
        "qNum": 37,
        "question": "What are lineaments in geological mapping?",
        "options": {
          "A": "Linear features representing possible geological structures",
          "B": "Circular urban settlements",
          "C": "Agricultural field boundaries only",
          "D": "River water quality values"
        },
        "answer": "A",
        "answerText": "Linear features representing possible geological structures",
        "explanation": "Lineaments are linear or curvilinear surface expressions representing subsurface fractures, faults, or jointing in bedrock."
      },
      {
        "id": "CO4_Q38",
        "co": "CO4",
        "qNum": 38,
        "question": "Which GIS method is commonly used to prepare groundwater potential maps?",
        "options": {
          "A": "Text formatting",
          "B": "Weighted overlay analysis",
          "C": "Network packet analysis",
          "D": "Image compression"
        },
        "answer": "B",
        "answerText": "Weighted overlay analysis",
        "explanation": "Weighted overlay analysis assigns thematic weights to layers (geology, geomorphology, slope, LULC, drainage) to map groundwater potential."
      },
      {
        "id": "CO4_Q39",
        "co": "CO4",
        "qNum": 39,
        "question": "Which of the following is a common groundwater recharge structure?",
        "options": {
          "A": "Flyover",
          "B": "Railway station",
          "C": "Check dam",
          "D": "Shopping complex"
        },
        "answer": "C",
        "answerText": "Check dam",
        "explanation": "Check dams across ephemeral gullies slow down runoff, impound water, and enhance local groundwater aquifer recharge."
      },
      {
        "id": "CO4_Q40",
        "co": "CO4",
        "qNum": 40,
        "question": "Which factor indicates groundwater availability in a region?",
        "options": {
          "A": "Building density alone",
          "B": "Road width",
          "C": "Population age",
          "D": "Well yield and aquifer characteristics"
        },
        "answer": "D",
        "answerText": "Well yield and aquifer characteristics",
        "explanation": "Well yields, transmissivity, storativity, and aquifer water table levels are direct hydrogeologic indicators of water availability."
      },
      {
        "id": "CO4_Q41",
        "co": "CO4",
        "qNum": 41,
        "question": "What is a watershed?",
        "options": {
          "A": "An area draining water to a common outlet",
          "B": "A type of urban road",
          "C": "A groundwater treatment plant",
          "D": "A satellite communication zone"
        },
        "answer": "A",
        "answerText": "An area draining water to a common outlet",
        "explanation": "A watershed (catchment or drainage basin) is the topographically delineated land area that channels all runoff to a common outlet."
      },
      {
        "id": "CO4_Q42",
        "co": "CO4",
        "qNum": 42,
        "question": "What is the main objective of watershed management?",
        "options": {
          "A": "Increasing traffic congestion",
          "B": "Conserving soil and water resources",
          "C": "Increasing industrial pollution",
          "D": "Reducing vegetation cover"
        },
        "answer": "B",
        "answerText": "Conserving soil and water resources",
        "explanation": "Watershed management aims to conserve, harvest, and sustainably develop soil, water, and vegetative resources within a catchment."
      },
      {
        "id": "CO4_Q43",
        "co": "CO4",
        "qNum": 43,
        "question": "Which GIS technique is used to identify watershed boundaries?",
        "options": {
          "A": "Image sharpening",
          "B": "Network buffering",
          "C": "DEM-based hydrological analysis",
          "D": "Statistical sampling only"
        },
        "answer": "C",
        "answerText": "DEM-based hydrological analysis",
        "explanation": "Hydrological analysis tools delineate flow direction, flow accumulation, stream order, and basin divides from DEMs."
      },
      {
        "id": "CO4_Q44",
        "co": "CO4",
        "qNum": 44,
        "question": "What is the purpose of a drainage network map in watershed management?",
        "options": {
          "A": "Identifying building materials",
          "B": "Calculating population income",
          "C": "Monitoring vehicle speed",
          "D": "Understanding surface water flow patterns"
        },
        "answer": "D",
        "answerText": "Understanding surface water flow patterns",
        "explanation": "Drainage network maps illustrate stream hierarchy and hydrological flow routes, guiding conservation planning."
      },
      {
        "id": "CO4_Q45",
        "co": "CO4",
        "qNum": 45,
        "question": "Which structure is commonly used for soil and water conservation in watersheds?",
        "options": {
          "A": "Check dam",
          "B": "Airport runway",
          "C": "Industrial chimney",
          "D": "Railway bridge"
        },
        "answer": "A",
        "answerText": "Check dam",
        "explanation": "Check dams constructed across gully streams arrest silt, retard runoff velocity, and encourage water infiltration."
      },
      {
        "id": "CO4_Q46",
        "co": "CO4",
        "qNum": 46,
        "question": "What is the purpose of a watershed action plan?",
        "options": {
          "A": "Increasing urban traffic",
          "B": "Identifying and prioritizing conservation and development activities",
          "C": "Measuring satellite orbits",
          "D": "Mapping communication towers only"
        },
        "answer": "B",
        "answerText": "Identifying and prioritizing conservation and development activities",
        "explanation": "A watershed action plan prioritizes specific site interventions (contour trenches, percolation tanks, check dams) for sustainable management."
      },
      {
        "id": "CO4_Q47",
        "co": "CO4",
        "qNum": 47,
        "question": "Which factor is important when prioritizing watershed development activities?",
        "options": {
          "A": "Internet usage",
          "B": "Vehicle colour",
          "C": "Erosion risk and drainage characteristics",
          "D": "Building decoration"
        },
        "answer": "C",
        "answerText": "Erosion risk and drainage characteristics",
        "explanation": "Sub-watersheds are prioritized for conservation based on high soil erosion risk, steep slope gradients, and drainage density."
      },
      {
        "id": "CO4_Q48",
        "co": "CO4",
        "qNum": 48,
        "question": "Which GIS analysis helps identify suitable locations for rainwater harvesting structures?",
        "options": {
          "A": "Text classification",
          "B": "Network address translation",
          "C": "Audio analysis",
          "D": "Spatial suitability analysis"
        },
        "answer": "D",
        "answerText": "Spatial suitability analysis",
        "explanation": "Spatial multi-criteria suitability analysis overlays slope, soil permeability, runoff, and stream order to site harvesting structures."
      },
      {
        "id": "CO4_Q49",
        "co": "CO4",
        "qNum": 49,
        "question": "What is the main objective of water quality modelling?",
        "options": {
          "A": "Predicting and assessing water quality conditions",
          "B": "Measuring building heights",
          "C": "Calculating road traffic",
          "D": "Identifying land ownership"
        },
        "answer": "A",
        "answerText": "Predicting and assessing water quality conditions",
        "explanation": "Water quality modelling mathematically simulates pollutant transport, chemical transformations, and degradation in water bodies."
      },
      {
        "id": "CO4_Q50",
        "co": "CO4",
        "qNum": 50,
        "question": "Which of the following is a common water quality parameter?",
        "options": {
          "A": "Road width",
          "B": "pH",
          "C": "Building density",
          "D": "Satellite altitude"
        },
        "answer": "B",
        "answerText": "pH",
        "explanation": "pH is a fundamental chemical parameter measuring acidity or alkalinity of water, vital for aquatic life."
      },
      {
        "id": "CO4_Q51",
        "co": "CO4",
        "qNum": 51,
        "question": "What does Biological Oxygen Demand (BOD) indicate?",
        "options": {
          "A": "Amount of suspended sand only",
          "B": "Total road length",
          "C": "Oxygen required by microorganisms to decompose biodegradable organic matter",
          "D": "Ground elevation"
        },
        "answer": "C",
        "answerText": "Oxygen required by microorganisms to decompose biodegradable organic matter",
        "explanation": "BOD (Biological Oxygen Demand) measures the dissolved oxygen consumed by aerobic microorganisms decomposing organic matter in water."
      },
      {
        "id": "CO4_Q52",
        "co": "CO4",
        "qNum": 52,
        "question": "What does high Chemical Oxygen Demand (COD) generally indicate?",
        "options": {
          "A": "Low population density",
          "B": "High groundwater level",
          "C": "Low soil erosion",
          "D": "High concentration of chemically oxidizable substances"
        },
        "answer": "D",
        "answerText": "High concentration of chemically oxidizable substances",
        "explanation": "High COD (Chemical Oxygen Demand) indicates heavy contamination by chemically oxidizable organic and industrial pollutants."
      },
      {
        "id": "CO4_Q53",
        "co": "CO4",
        "qNum": 53,
        "question": "Which GIS function is useful for mapping water quality sampling locations?",
        "options": {
          "A": "Spatial mapping and interpolation",
          "B": "Audio editing",
          "C": "Text translation",
          "D": "Network security"
        },
        "answer": "A",
        "answerText": "Spatial mapping and interpolation",
        "explanation": "GIS spatial interpolation (Kriging, IDW) converts discrete water sampling point measurements into continuous water quality surfaces."
      },
      {
        "id": "CO4_Q54",
        "co": "CO4",
        "qNum": 54,
        "question": "Which of the following models is commonly used to simulate water quality in rivers?",
        "options": {
          "A": "GPS trilateration model",
          "B": "QUAL2K",
          "C": "NDVI model",
          "D": "Slope gradient model"
        },
        "answer": "B",
        "answerText": "QUAL2K",
        "explanation": "QUAL2K is a widely adopted one-dimensional river water quality simulation model developed by the US EPA."
      },
      {
        "id": "CO4_Q55",
        "co": "CO4",
        "qNum": 55,
        "question": "What is the main purpose of monitoring dissolved oxygen in water bodies?",
        "options": {
          "A": "Measuring road capacity",
          "B": "Calculating land prices",
          "C": "Assessing aquatic ecosystem health",
          "D": "Identifying satellite position"
        },
        "answer": "C",
        "answerText": "Assessing aquatic ecosystem health",
        "explanation": "Monitoring Dissolved Oxygen (DO) is vital because oxygen is essential for fish survival and indicates healthy aquatic ecosystems."
      },
      {
        "id": "CO4_Q56",
        "co": "CO4",
        "qNum": 56,
        "question": "What is saltwater intrusion?",
        "options": {
          "A": "Entry of rainwater into forests",
          "B": "Movement of soil particles by wind",
          "C": "Increase in freshwater recharge",
          "D": "Movement of saline water into freshwater aquifers"
        },
        "answer": "D",
        "answerText": "Movement of saline water into freshwater aquifers",
        "explanation": "Saltwater intrusion occurs when denser seawater migrates into coastal freshwater aquifers, salinizing drinking and irrigation wells."
      },
      {
        "id": "CO4_Q57",
        "co": "CO4",
        "qNum": 57,
        "question": "Which activity can increase saltwater intrusion in coastal aquifers?",
        "options": {
          "A": "Excessive groundwater pumping",
          "B": "Rainwater harvesting",
          "C": "Afforestation",
          "D": "Controlled groundwater extraction"
        },
        "answer": "A",
        "answerText": "Excessive groundwater pumping",
        "explanation": "Over-extraction and excessive pumping of coastal groundwater lowers the freshwater hydraulic head, inviting seawater encroachment."
      },
      {
        "id": "CO4_Q58",
        "co": "CO4",
        "qNum": 58,
        "question": "Which model is commonly used to simulate variable-density groundwater flow and saltwater intrusion?",
        "options": {
          "A": "HEC-HMS",
          "B": "SEAWAT",
          "C": "ArcMap Layout",
          "D": "NDVI"
        },
        "answer": "B",
        "answerText": "SEAWAT",
        "explanation": "SEAWAT (USGS) couples MODFLOW and MT3DMS to simulate 3D variable-density groundwater flow and coastal saltwater intrusion."
      },
      {
        "id": "CO4_Q59",
        "co": "CO4",
        "qNum": 59,
        "question": "Which parameter is important in saltwater intrusion modelling?",
        "options": {
          "A": "Road traffic volume",
          "B": "Building height",
          "C": "Groundwater salinity",
          "D": "Population literacy"
        },
        "answer": "C",
        "answerText": "Groundwater salinity",
        "explanation": "Groundwater salinity (total dissolved solids / electrical conductivity) is the key indicator parameter for tracking saltwater intrusion."
      },
      {
        "id": "CO4_Q60",
        "co": "CO4",
        "qNum": 60,
        "question": "What is the main objective of monitoring the freshwater-saltwater interface?",
        "options": {
          "A": "Measuring forest density",
          "B": "Calculating road gradients",
          "C": "Identifying urban boundaries",
          "D": "Assessing the extent of saltwater intrusion"
        },
        "answer": "D",
        "answerText": "Assessing the extent of saltwater intrusion",
        "explanation": "Monitoring the freshwater-saline transition zone tracks the landward encroachment of saline water to protect wellfields."
      },
      {
        "id": "CO4_Q61",
        "co": "CO4",
        "qNum": 61,
        "question": "Which GIS analysis is useful for selecting a suitable pipeline alignment?",
        "options": {
          "A": "Least-cost path analysis",
          "B": "Text formatting",
          "C": "Audio classification",
          "D": "Image watermarking"
        },
        "answer": "A",
        "answerText": "Least-cost path analysis",
        "explanation": "Least-cost path analysis in GIS computes the optimal minimum-cost traversal path between origins and destinations across a friction surface."
      },
      {
        "id": "CO4_Q62",
        "co": "CO4",
        "qNum": 62,
        "question": "Which factor should be considered while selecting a pipeline route?",
        "options": {
          "A": "Colour of nearby buildings",
          "B": "Terrain slope and geological conditions",
          "C": "Internet connection speed",
          "D": "Number of shopping centres"
        },
        "answer": "B",
        "answerText": "Terrain slope and geological conditions",
        "explanation": "Pipeline corridor selection balances terrain steepness, geohazards, geotechnical foundation, environmental impacts, and land acquisition."
      },
      {
        "id": "CO4_Q63",
        "co": "CO4",
        "qNum": 63,
        "question": "Why should environmentally sensitive areas be avoided during pipeline alignment?",
        "options": {
          "A": "To increase pipeline length",
          "B": "To increase construction cost",
          "C": "To reduce environmental impacts",
          "D": "To increase land fragmentation"
        },
        "answer": "C",
        "answerText": "To reduce environmental impacts",
        "explanation": "Routing pipelines away from ecologically sensitive reserves and wetlands minimizes environmental degradation and habitat loss."
      },
      {
        "id": "CO4_Q64",
        "co": "CO4",
        "qNum": 64,
        "question": "Which GIS operation is used to identify areas within a specified distance from a pipeline?",
        "options": {
          "A": "Image classification",
          "B": "Watershed delineation",
          "C": "Slope calculation",
          "D": "Buffer analysis"
        },
        "answer": "D",
        "answerText": "Buffer analysis",
        "explanation": "Buffer analysis creates protective setback zones (e.g. 50m corridor) along pipeline centerlines to manage right-of-way safety."
      },
      {
        "id": "CO4_Q65",
        "co": "CO4",
        "qNum": 65,
        "question": "What is the main objective of pipeline route optimization?",
        "options": {
          "A": "Finding a suitable and economical route while satisfying constraints",
          "B": "Increasing construction hazards",
          "C": "Avoiding all geographical information",
          "D": "Selecting the steepest possible route"
        },
        "answer": "A",
        "answerText": "Finding a suitable and economical route while satisfying constraints",
        "explanation": "Pipeline route optimization identifies the most cost-effective and safe route while respecting environmental and engineering constraints."
      },
      {
        "id": "CO4_Q66",
        "co": "CO4",
        "qNum": 66,
        "question": "Which is an important criterion for selecting a solid waste disposal site?",
        "options": {
          "A": "Proximity to schools only",
          "B": "Distance from residential areas and water bodies",
          "C": "Location in a flood-prone zone",
          "D": "High groundwater vulnerability"
        },
        "answer": "B",
        "answerText": "Distance from residential areas and water bodies",
        "explanation": "Landfills must maintain safe setback distances from human settlements and surface water bodies to prevent contamination and nuisance."
      },
      {
        "id": "CO4_Q67",
        "co": "CO4",
        "qNum": 67,
        "question": "Which GIS method is commonly used for landfill site suitability analysis?",
        "options": {
          "A": "GPS clock correction",
          "B": "Image compression",
          "C": "Multi-criteria decision analysis",
          "D": "Audio signal processing"
        },
        "answer": "C",
        "answerText": "Multi-criteria decision analysis",
        "explanation": "Multi-Criteria Decision Analysis (MCDA) integrated with GIS overlays environmental, social, and economic constraint layers for landfill siting."
      },
      {
        "id": "CO4_Q68",
        "co": "CO4",
        "qNum": 68,
        "question": "Why should landfill sites be located away from rivers and lakes?",
        "options": {
          "A": "To increase transportation time",
          "B": "To increase land acquisition cost",
          "C": "To improve traffic congestion",
          "D": "To reduce the risk of water contamination"
        },
        "answer": "D",
        "answerText": "To reduce the risk of water contamination",
        "explanation": "Siting landfills far from surface water bodies prevents leachate runoff and toxic contamination of aquatic habitats and drinking water."
      },
      {
        "id": "CO4_Q69",
        "co": "CO4",
        "qNum": 69,
        "question": "Which factor is important when selecting a hazardous waste disposal site?",
        "options": {
          "A": "Geological stability and groundwater protection",
          "B": "Proximity to drinking water wells",
          "C": "Location in an ecologically sensitive area",
          "D": "High flood susceptibility"
        },
        "answer": "A",
        "answerText": "Geological stability and groundwater protection",
        "explanation": "Hazardous waste landfills demand stable bedrock geology, low permeability clay formations, and isolation from drinking aquifers."
      },
      {
        "id": "CO4_Q70",
        "co": "CO4",
        "qNum": 70,
        "question": "What is the main purpose of a leachate collection system in a landfill?",
        "options": {
          "A": "Increasing waste volume",
          "B": "Collecting contaminated liquid generated by waste",
          "C": "Measuring air temperature",
          "D": "Improving road connectivity"
        },
        "answer": "B",
        "answerText": "Collecting contaminated liquid generated by waste",
        "explanation": "A leachate collection system captures toxic wastewater percolating through decomposing refuse, preventing groundwater contamination."
      },
      {
        "id": "CO4_Q71",
        "co": "CO4",
        "qNum": 71,
        "question": "What is landslide susceptibility mapping?",
        "options": {
          "A": "Mapping urban population",
          "B": "Measuring river water temperature",
          "C": "Identifying areas prone to landslides",
          "D": "Mapping agricultural market prices"
        },
        "answer": "C",
        "answerText": "Identifying areas prone to landslides",
        "explanation": "Landslide susceptibility mapping evaluates where slope instability and mass wasting are most likely to occur based on local terrain factors."
      },
      {
        "id": "CO4_Q72",
        "co": "CO4",
        "qNum": 72,
        "question": "Which of the following is an important factor in landslide susceptibility mapping?",
        "options": {
          "A": "Mobile phone usage",
          "B": "Building colour",
          "C": "Internet speed",
          "D": "Slope, geology and land cover"
        },
        "answer": "D",
        "answerText": "Slope, geology and land cover",
        "explanation": "Primary landslide triggers include slope steepness, geological lithology, fault proximity, rainfall, and vegetative cover."
      },
      {
        "id": "CO4_Q73",
        "co": "CO4",
        "qNum": 73,
        "question": "Which GIS technique is commonly used in landslide susceptibility analysis?",
        "options": {
          "A": "Weighted overlay analysis",
          "B": "Text editing",
          "C": "Audio recording",
          "D": "Database encryption"
        },
        "answer": "A",
        "answerText": "Weighted overlay analysis",
        "explanation": "Weighted overlay combines rated factor maps (slope, aspect, lithology, drainage proximity) to delineate landslide hazard zones."
      },
      {
        "id": "CO4_Q74",
        "co": "CO4",
        "qNum": 74,
        "question": "How can GIS support urban planning and management?",
        "options": {
          "A": "Measuring satellite clock errors",
          "B": "Analysing land use, infrastructure and urban growth",
          "C": "Predicting credit card transactions",
          "D": "Measuring ocean salinity only"
        },
        "answer": "B",
        "answerText": "Analysing land use, infrastructure and urban growth",
        "explanation": "GIS provides urban planners with spatial databases to model land use zoning, traffic patterns, urban expansion, and infrastructure needs."
      },
      {
        "id": "CO4_Q75",
        "co": "CO4",
        "qNum": 75,
        "question": "Which GIS analysis is most useful for identifying suitable locations for new urban facilities?",
        "options": {
          "A": "GPS signal modulation",
          "B": "Audio classification",
          "C": "Site suitability analysis",
          "D": "Satellite clock synchronization"
        },
        "answer": "C",
        "answerText": "Site suitability analysis",
        "explanation": "Site suitability analysis evaluates multiple spatial criteria (accessibility, land use, topography) to locate schools, hospitals, and parks."
      }
    ]
  }
};