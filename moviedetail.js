import {baseURL, suffix} from './home.js' // Importing constants from the home module

// Event listener for the 'DOMContentLoaded' event.
// Invokes the 'showMovieDetails' function when the document is fully loaded.
document.addEventListener('DOMContentLoaded', function() {
    showMovieDetails();
});


//Retrieves the value of a query parameter from the URL.
function getQueryParameter(parameterName) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(parameterName);
}


// Fetches details of a specific movie using its IMDb ID and displays the details on the page.
// Invoked upon page load.
async function showMovieDetails(){
    const imdbID = getQueryParameter('imdbID')
    try {
        let response = await fetch(`${baseURL}i=${imdbID}${suffix}`);
        if (response.ok) {
            let movie = await response.json();
            console.log(movie)
            displayMoviedetail(movie);
        } else {
            console.error(`Error: ${response.status} - ${response.statusText}`);
        }
    } catch (error) {
        console.error('An error occurred during the fetch:', error);
    }
}

// Displays movie details on the page.
function displayMoviedetail(movie){
    document.getElementById('movie-detail-img').src = movie.Poster
    document.querySelector('h2').innerHTML = movie.Title
    document.querySelector('#description').innerHTML = movie.Plot
    document.querySelector('h6').innerHTML = movie.Genre
}


