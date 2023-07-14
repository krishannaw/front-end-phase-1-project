console.log('connected')
// script.js

const moviesContainer = document.getElementById('moviesContainer');
const searchInput = document.getElementById('searchInput');

// Fetch movie data from a public API
async function fetchMovies(searchQuery) {
  try {
    const response = await fetch('http://www.omdbapi.com/?s=${encodeURIComponent(searchQuery)}');
    const data = await response.json();
    return data.Search || [];
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
  // Event listener for search input
searchInput.addEventListener('input', async () => {
    const searchQuery = searchInput.value.toLowerCase();
    const movies = await fetchMovies();
    const filteredMovies = filterMovies(movies, searchQuery);
    renderMovies(filteredMovies);
  });
  // First fetch and render
(async function () {
    const movies = await fetchMovies();
    renderMovies(movies);
  })();
  