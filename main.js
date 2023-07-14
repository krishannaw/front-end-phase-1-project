console.log('connected')
// script.js

const moviesContainer = document.getElementById('moviesContainer');
const searchInput = document.getElementById('searchInput');

// Fetch movie data from a public API or your own API (db.json)
async function fetchMovies() {
  try {
    // Replace 'API_URL' with the actual URL of the API you are using
    const response = await fetch('API_URL');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching movies:', error);
    return [];
  }
}