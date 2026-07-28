// ==========================================
// UI Rendering Logic
// ui.js
// ==========================================

// DOM Elements
const cityNameEl = document.getElementById("city-name");
const dateTimeEl = document.getElementById("date-time");
const weatherIconEl = document.getElementById("weather-icon");
const weatherDescriptionEl = document.getElementById("weather-description");
const temperatureEl = document.getElementById("temperature");
const feelsLikeEl = document.getElementById("feels-like");
const humidityEl = document.getElementById("humidity");
const windSpeedEl = document.getElementById("wind-speed");
const pressureEl = document.getElementById("pressure");
const visibilityEl = document.getElementById("visibility");
const sunriseEl = document.getElementById("sunrise");
const sunsetEl = document.getElementById("sunset");

/**
 * Render current weather data
 * @param {Object} data
 */
function renderCurrentWeather(data) {
    // City and country
    cityNameEl.textContent = `${data.name}, ${data.sys.country}`;

    // Date and time
   dateTimeEl.textContent = formatDateTime(data.timezone);

    // Weather condition
    weatherDescriptionEl.textContent = capitalizeText(
        data.weather[0].description
    );

    // Weather icon
    weatherIconEl.src = getWeatherIcon(data.weather[0].icon);
    weatherIconEl.alt = data.weather[0].description;

    // Temperature
    temperatureEl.textContent = `${Math.round(data.main.temp)}°C`;
    feelsLikeEl.textContent = `${Math.round(data.main.feels_like)}°C`;

    // Weather details
    humidityEl.textContent = `${data.main.humidity}%`;
    windSpeedEl.textContent = `${Math.round(data.wind.speed * 3.6)} km/h`;
    pressureEl.textContent = `${data.main.pressure} hPa`;
    visibilityEl.textContent = formatVisibility(data.visibility);
    sunriseEl.textContent = formatTime(data.sys.sunrise);
    sunsetEl.textContent = formatTime(data.sys.sunset);

    // Change background according to weather
    updateWeatherBackground(data.weather[0].main);
}

/**
 * Update body background based on weather condition
 * @param {string} weatherMain
 */
function updateWeatherBackground(weatherMain) {
    // Remove previous weather classes
    document.body.classList.remove(
        "sunny",
        "cloudy",
        "rainy",
        "snowy",
        "stormy"
    );

    // Add new weather class
    const weatherClass = getWeatherClass(weatherMain);
    document.body.classList.add(weatherClass);
}
// ==========================================
// UI MODULE - PART 2
// js/ui.js
// ==========================================


// ==========================================
// DOM ELEMENTS
// ==========================================

const forecastContainer = document.querySelector(".forecast-container");
const loadingElement = document.querySelector("#loading");

const errorElement = document.querySelector("#error-message");

// ==========================================
// RENDER 5 DAY FORECAST
// ==========================================

function renderForecast(forecastData) {

    if (!forecastContainer) return;

    forecastContainer.innerHTML = "";


    const dailyForecast = forecastData.list.filter((item) => {
        return item.dt_txt.includes("12:00:00");
    });


    dailyForecast.slice(0, 5).forEach((day) => {


        const date = new Date(day.dt_txt);


        const card = document.createElement("div");

        card.classList.add("forecast-card");


        card.innerHTML = `

            <h3>
                ${date.toLocaleDateString("en-US", {
                    weekday: "short"
                })}
            </h3>


            <img 
            src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"
            alt="${day.weather[0].description}"
            >


            <p class="forecast-condition">
                ${day.weather[0].main}
            </p>


            <div class="forecast-temp">

                <span>
                    ${Math.round(day.main.temp_max)}°C
                </span>


                <span>
                    ${Math.round(day.main.temp_min)}°C
                </span>

            </div>

        `;


        forecastContainer.appendChild(card);

    });

}



// ==========================================
// SHOW LOADING
// ==========================================

function showLoading() {

    if (!loadingElement) return;

    loadingElement.classList.remove("hidden");

}



// ==========================================
// HIDE LOADING
// ==========================================

function hideLoading() {

    if (!loadingElement) return;

    loadingElement.classList.add("hidden");

}



// ==========================================
// SHOW ERROR MESSAGE
// ==========================================

function showError(message) {

    if (!errorElement) return;

    // Error text ko <p> ke andar show karo
    errorElement.querySelector("p").textContent = message;

    errorElement.classList.remove("hidden");

}


// ==========================================
// HIDE ERROR MESSAGE
// ==========================================

function hideError() {

    if (!errorElement) return;

    // Error text reset karo
    errorElement.querySelector("p").textContent = "";

    errorElement.classList.add("hidden");

}



// ==========================================
// WEATHER SECTION CONTROL
// ==========================================

function toggleWeatherContent(show = true) {


    const weatherSection = document.querySelector(
        ".weather-section"
    );


    if (!weatherSection) return;


    if(show){

        weatherSection.classList.remove("hidden");

    }
    else{

        weatherSection.classList.add("hidden");

    }

}