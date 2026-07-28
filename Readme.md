# SkyCast — Real-Time Weather Forecast Platform

SkyCast is a modern, responsive weather forecasting web application built using HTML5, CSS3, and Vanilla JavaScript. It provides real-time weather information, location-based weather detection, and upcoming 5-day forecasts using weather API integration.

The application allows users to search weather conditions by city name or use their current location to get accurate weather updates with temperature, humidity, wind speed, and forecast details.

---

# Live Demo

Add your deployed project link after hosting:

**Live Demo:**  https://rajat-bhardwaj2003.github.io/SkyCast/

**GitHub Repository:** https://github.com/RAJAT-BHARDWAJ2003/SkyCast

---

# Features

## Real-Time Weather Updates

- Search weather by city name
- Fetch current weather conditions using API
- Display temperature and weather status
- Real-time humidity information
- Wind speed details
- Weather condition icons


## Location-Based Weather

- Detect user's current location
- Uses browser Geolocation API
- Automatically fetch weather data for current position


## Forecast System

- 5-day weather forecast
- Future weather prediction display
- Daily temperature information
- Weather condition overview


## User Experience

- Responsive design for desktop, tablet, and mobile
- Clean and modern weather dashboard
- Smooth animations and transitions
- Loading states
- Error handling for invalid locations
- User-friendly interface


## Storage & Preferences

- Search history management
- Persistent data using LocalStorage
- Stores user preferences


---

# Tech Stack

## Frontend

- HTML5 — Structure and semantic markup
- CSS3 — Styling, responsive design, and animations
- Vanilla JavaScript (ES6+) — Application logic and API handling


## APIs & Browser Features

- Weather API — Real-time weather data
- Geolocation API — Current location detection
- LocalStorage — Persistent user data


## Development Tools

- VS Code
- Git & GitHub
- Live Server


---

# Project Structure


SkyCast/

│

├── index.html

├── README.md

│

├── css/

│   └── style.css

│

├── js/

│   ├── api.js

│   ├── main.js

│   ├── storage.js

│   ├── ui.js

│   └── utils.js

│

└── assets/

    └── screenshots/


---

# How To Run Locally


## 1. Clone the repository


git clone https://github.com/RAJAT-BHARDWAJ2003/SkyCast.git


## 2. Open project folder

cd SkyCast



## 3. Run the project

Open `index.html` directly in your browser.

Or use the **Live Server** extension in VS Code for better development experience.


---

# Application Architecture


SkyCast follows a modular JavaScript structure where different responsibilities are separated into individual files.


## API Module (api.js)

Responsible for:

- Connecting with weather API
- Sending location requests
- Fetching real-time weather data
- Handling API responses


## Main Module (main.js)

Responsible for:

- Application initialization
- Event handling
- Managing user interactions
- Connecting different modules


## UI Module (ui.js)

Responsible for:

- Rendering weather information
- Updating forecast cards
- Managing dynamic UI changes


## Storage Module (storage.js)

Responsible for:

- Saving search history
- Managing LocalStorage data
- Maintaining user preferences


## Utility Module (utils.js)

Responsible for:

- Helper functions
- Data formatting
- Reusable application logic




# Key Functionalities


## Weather Search System

- Search weather by city name
- Fetch live weather information
- Display temperature and conditions
- Handle invalid city searches


## Current Location Detection

- Access user's current coordinates
- Convert location into weather information
- Provide instant weather updates


## Forecast Dashboard

- Display upcoming 5-day forecast
- Show temperature variations
- Provide future weather possibilities


## Error Handling

- Invalid city detection
- API failure handling
- Location permission handling
- Loading state management


## Responsive Interface

- Mobile-friendly layout
- Adaptive weather cards
- Optimized user experience across devices



# Screenshots


## Weather Dashboard
<img width="1920" height="1080" alt="dashboard" src="https://github.com/user-attachments/assets/ff3ebad5-f151-4a30-85fc-f2c76d3faa4f" />



## Location Based Weather
<img width="1920" height="1080" alt="Live" src="https://github.com/user-attachments/assets/93a3799e-34f3-488e-9bbd-618699c334de" />


## 5- days forecast

<img width="1920" height="1080" alt="forecast" src="https://github.com/user-attachments/assets/eddf2f98-1f0e-4a94-a559-4833170d46b9" />



## history

<img width="1920" height="1080" alt="history" src="https://github.com/user-attachments/assets/fd7c5c44-13c8-4e6b-82cf-1187f729875e" />



---

# Learning Outcomes


Through this project, I improved my understanding of:


- API integration using JavaScript
- Asynchronous JavaScript (Promises & Fetch API)
- Working with external data sources
- Browser Geolocation API
- DOM manipulation
- LocalStorage management
- Responsive web development
- Modular JavaScript architecture


---

# Future Improvements


- Weather alerts and notifications
- Hourly weather forecast
- Multiple saved locations
- Weather map integration
- User authentication
- Advanced weather analytics
- PWA support for offline installation


---

# Author


**Rajat Bhardwaj**


GitHub:

https://github.com/RAJAT-BHARDWAJ2003


LinkedIn:

https://linkedin.com/in/your-linkedin


---

# License


This project is open source and available under the **MIT License**.
