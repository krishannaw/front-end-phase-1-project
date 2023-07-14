console.log('connected')
// script.js

const moviesContainer = document.getElementById('moviesContainer');
const searchInput = document.getElementById('searchInput');

// Fetch movie data from a public API or your own API (db.json)
async function fetchMovies() {
  try {
    const response = await fetch('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching movies:', error);
    return [];
  }
}