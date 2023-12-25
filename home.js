export const baseURL = `https://omdbapi.com/?apikey=d098fec2&`; //Base URL for making requests to the OMDB API.
export const suffix = `&type=movie` //Suffix to be added to API requests for movie searches.


const searchbar = document.getElementById('searchbar'); // Event listener for the search bar input. 
const movieContainer = document.getElementById('movie-container');// Container element to display movie search results.

if(searchbar) searchbar.addEventListener('input', fetchMovie); //Triggers the fetchMovie function.

// Fetches movie data from the OMDB API based on the search query.
// Displays loading indicator while fetching.
async function fetchMovie(){
    let query = searchbar.value.trim();
    if(query.length === 0) query='spider' //if query string is empty search for a default query (i.e. spider)
    try {
        //when fetching movies from API, show a loading image
        movieContainer.innerHTML = `<img src="./images/loading.svg" alt="" srcset="">`;
        let response = await fetch(`${baseURL}s=${query}${suffix}`);

        if (response.ok) {
            let data = await response.json();
            let searchMovies = data.Search;
            showMovies(searchMovies);
        } else {
            console.error(`Error: ${response.status} - ${response.statusText}`);
        }
    } catch (error) {
        console.error('An error occurred during the fetch:', error);
    }
}
fetchMovie(); // Initial fetchMovie call


// Displays movie data in the movie container.
// Creates a card element for each movie.
function showMovies(movies){
    movieContainer.innerHTML = '';
    movies.forEach(movie => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.style.width = '19rem';
        cardElement.innerHTML = `
            <img src=${movie.Poster} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <button type="button" class="btn btn-info" id='detailBtn'>Details</button>
                <button type="button" class="btn btn-info" id='fevBtn' >Favourite 💝</button>
            </div>
        `;
        cardElement.querySelector('#detailBtn').addEventListener('click', () => redirect(movie.imdbID));
        cardElement.querySelector('#fevBtn').addEventListener('click', () => addToFev(movie));
        movieContainer.appendChild(cardElement);
    });
    //if movie array is empty then show a loading image
    if(movies.length === 0){
        movieContainer.innerHTML = `<img src="./images/loading.svg" alt="" srcset="">`;
    }
}


// Redirects to the movie detail page based on the IMDb ID.
function redirect(imdbID){
    const url = `./moviedetail.html?imdbID=${imdbID}`;
    window.open(url, '_blank');
}


// Adds the current movie to the list of favorite movies stored in local storage.
function addToFev(currentmovie){
    console.log(currentmovie);
    let fevMovies = JSON.parse(localStorage.getItem('fevMovies'));
    if(!fevMovies) fevMovies = [] //if fevMovies is not present in localstorage then assign fevMovies as array

    // Check if the movie is already in the array
    const isMoviePresent = fevMovies.some(movie => movie.imdbID === currentmovie.imdbID);
    // If the movie is not present, add it to the array
    if (!isMoviePresent) {
        fevMovies.push(currentmovie);
    }

    let upadtedfevMovies = JSON.stringify(fevMovies);
    localStorage.setItem('fevMovies', upadtedfevMovies);
}



