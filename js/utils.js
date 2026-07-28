// ==========================================
// Utility Functions
// utils.js
// ==========================================

/**
 * Format current date and time
 * @returns {string}
 */
function formatDateTime(timezone = 0) {
    // Get current UTC time
    const now = new Date();

    // Convert current time to the city's local time
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const cityTime = new Date(utc + (timezone * 1000));

    return cityTime.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
}
/**
 * Get day name from timestamp
 * @param {number} timestamp
 * @returns {string}
 */
function getDayName(timestamp) {
    const date = new Date(timestamp * 1000);

    return date.toLocaleDateString("en-US", {
        weekday: "short",
    });
}

/**
 * Format time (sunrise/sunset)
 * @param {number} timestamp
 * @returns {string}
 */
function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);

    return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
}

/**
 * Capitalize first letter of weather description
 * @param {string} text
 * @returns {string}
 */
function capitalizeText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Convert visibility from meters to kilometers
 * @param {number} visibility
 * @returns {string}
 */
function formatVisibility(visibility) {
    return (visibility / 1000).toFixed(1) + " km";
}

/**
 * Get weather icon URL
 * @param {string} iconCode
 * @returns {string}
 */
function getWeatherIcon(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

/**
 * Determine weather class for dynamic background
 * @param {string} weatherMain
 * @returns {string}
 */
function getWeatherClass(weatherMain) {
    const weather = weatherMain.toLowerCase();

    switch (weather) {
        case "clear":
            return "sunny";

        case "clouds":
            return "cloudy";

        case "rain":
        case "drizzle":
            return "rainy";

        case "snow":
            return "snowy";

        case "thunderstorm":
            return "stormy";

        default:
            return "cloudy";
    }
}