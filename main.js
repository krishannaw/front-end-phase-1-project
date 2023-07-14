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
function renderMovies(movies) {
    moviesContainer.innerHTML = '';
  
    movies.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');
  
      const titleElement = document.createElement('h2');
      titleElement.textContent = movie.title;
      movieElement.appendChild(titleElement);
  
      const genreElement = document.createElement('p');
      genreElement.textContent = `Genre: ${movie.genre}`;
      movieElement.appendChild(genreElement);
  
      const yearElement = document.createElement('p');
      yearElement.textContent = `Year: ${movie.year}`;
      movieElement.appendChild(yearElement);
  
      moviesContainer.appendChild(movieElement);
    });
  }
  // Filter movies based on user search
function filterMovies(movies, searchQuery) {
    return movies.filter(movie => {
      const title = movie.title.toLowerCase();
      const genre = movie.genre.toLowerCase();
  
      return title.includes(searchQuery) || genre.includes(searchQuery);
    });
  }
  