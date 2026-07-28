// ==========================================
// API MODULE
// js/api.js
// ==========================================

// Apni OpenWeather API key yahan paste karo
const API_KEY = "2f50822c34083386122199be7ac101ef";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Current weather by city
async function fetchCurrentWeather(city) {
    const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to fetch current weather");
    }

    return data;
}

// 5-day forecast by city
async function fetchForecast(city) {
    const url = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to fetch forecast");
    }

    return data;
}

// Current weather by coordinates
async function fetchWeatherByCoords(lat, lon) {
    const url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to fetch location weather");
    }

    return data;
}

// Forecast by coordinates
async function fetchForecastByCoords(lat, lon) {
    const url = `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to fetch location forecast");
    }

    return data;
}

// Error handler
function handleApiError(error) {
    return error.message || "Something went wrong. Please try again.";
}