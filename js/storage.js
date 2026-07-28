// ==========================================
// STORAGE MODULE
// js/storage.js
// ==========================================


// ==========================================
// STORAGE KEYS
// ==========================================

const RECENT_SEARCH_KEY = "weather-recent-cities";

const THEME_KEY = "weather-theme";



// ==========================================
// RECENT SEARCH FUNCTIONS
// ==========================================


// Save recent cities

function saveRecentSearches(cities){

    localStorage.setItem(
        RECENT_SEARCH_KEY,
        JSON.stringify(cities)
    );

}



// Get recent cities

function getRecentSearches(){

    const savedCities = localStorage.getItem(
        RECENT_SEARCH_KEY
    );


    if(savedCities){

        return JSON.parse(savedCities);

    }


    return [];

}



// ==========================================
// THEME FUNCTIONS
// ==========================================


// Save theme

function saveTheme(isDark){

    localStorage.setItem(
        THEME_KEY,
        isDark ? "dark" : "light"
    );

}



// Get theme

function getTheme(){

    return localStorage.getItem(
        THEME_KEY
    );

}