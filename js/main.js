// ==========================================
// MAIN MODULE
// js/main.js
// ==========================================

// DOM Elements
const searchInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-btn");
const themeToggle = document.getElementById("theme-toggle");
const locationButton = document.getElementById("location-btn");
const recentContainer = document.getElementById("recent-searches-container");

// ==========================================
// SEARCH WEATHER FUNCTION
// ==========================================

async function searchWeather(cityName = null) {
    const city = cityName || searchInput.value.trim();

    if (city === "") {
        showError("Please enter a city name");
        return;
    }

    try {
        hideError();
        showLoading();

        // Fetch current weather
        const weatherData = await fetchCurrentWeather(city);

        // Render current weather
        renderCurrentWeather(weatherData);

        // Fetch forecast
        const forecastData = await fetchForecast(city);

        // Render forecast
        renderForecast(forecastData);

        // Save recent city
        saveRecentCity(city);

        hideLoading();

    } catch (error) {
        hideLoading();
        showError(handleApiError(error));
        console.error(error);
    }
}

// ==========================================
// CURRENT LOCATION WEATHER
// ==========================================

async function getCurrentLocationWeather() {

    // Check if browser supports geolocation
    if (!navigator.geolocation) {
        showError("Geolocation is not supported by your browser");
        return;
    }

    showLoading();
    hideError();

    navigator.geolocation.getCurrentPosition(

        // Success callback
        async (position) => {
            try {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Fetch weather by coordinates
                const weatherData = await fetchWeatherByCoords(latitude, longitude);
                const forecastData = await fetchForecastByCoords(latitude, longitude);

                // Render UI
                renderCurrentWeather(weatherData);
                renderForecast(forecastData);

                // Save current city to recent searches
                saveRecentCity(weatherData.name);

                hideLoading();

            } catch (error) {
                hideLoading();
                showError("Unable to fetch weather for your location");
                console.error(error);
            }
        },

        // Error callback
        (error) => {
            hideLoading();

            switch (error.code) {
                case error.PERMISSION_DENIED:
                    showError("Location permission denied");
                    break;
                case error.POSITION_UNAVAILABLE:
                    showError("Location information unavailable");
                    break;
                case error.TIMEOUT:
                    showError("Location request timed out");
                    break;
                default:
                    showError("Unable to get your location");
            }
        }
    );
}

// ==========================================
// RECENT SEARCHES
// ==========================================

function saveRecentCity(city) {
    let cities = getRecentSearches();

    // Remove duplicate city (case-insensitive)
    cities = cities.filter(
        item => item.toLowerCase() !== city.toLowerCase()
    );

    // Add new city at the beginning
    cities.unshift(city);

    // Keep only last 5 cities
    cities = cities.slice(0, 5);

    // Save to localStorage
    saveRecentSearches(cities);

    // Re-render recent searches
    renderRecentSearches(cities);
}

function renderRecentSearches(cities) {
    recentContainer.innerHTML = "";

    if (cities.length === 0) {
        recentContainer.innerHTML = "<p class='no-recent'>No recent searches</p>";
        return;
    }

    cities.forEach(city => {
        const button = document.createElement("button");
        button.classList.add("recent-city");
        button.textContent = city;

        button.addEventListener("click", () => {
            searchInput.value = city;
            searchWeather(city);
        });

        recentContainer.appendChild(button);
    });
}

function loadRecentCities() {
    const cities = getRecentSearches();
    renderRecentSearches(cities);
}

// ==========================================
// DARK MODE & THEME TOGGLE
// ==========================================

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector(".theme-icon");

    body.classList.toggle("dark-theme");

    const isDark = body.classList.contains("dark-theme");

    saveTheme(isDark ? "dark" : "light");

    themeIcon.textContent = isDark ? "☀️" : "🌙";
}

function loadTheme() {
    const savedTheme = getTheme();
    const themeIcon = document.querySelector(".theme-icon");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        themeIcon.textContent = "☀️";
    } else {
        document.body.classList.remove("dark-theme");
        themeIcon.textContent = "🌙";
    }
}

// ==========================================
// EVENT LISTENERS
// ==========================================

// Search button click
searchButton.addEventListener("click", () => searchWeather());

// Enter key press
searchInput.addEventListener("keypress", event => {
    if (event.key === "Enter") {
        searchWeather();
    }
});

// Theme toggle click
themeToggle.addEventListener("click", toggleTheme);

// Current location button click
locationButton.addEventListener("click", getCurrentLocationWeather);

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    loadRecentCities();
    loadTheme();
});