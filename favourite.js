
// Event listener for the 'DOMContentLoaded' event.
// Invokes the 'showFevMovies' function when the document is fully loaded.
document.addEventListener('DOMContentLoaded', function() {
    showFevMovies();
});

// Container element to display favorite movie details.
const movieContainer = document.getElementById('movie-container');


// Displays favorite movies stored in local storage.
// Retrieves favorite movies from local storage, creates card elements, and appends them to the movie container.
function showFevMovies(){
    let fevMovies = JSON.parse(localStorage.getItem('fevMovies'));
    if(!fevMovies) fevMovies = []
    movieContainer.innerHTML = '';
    fevMovies.forEach(movie => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.style.width = '19rem';
        cardElement.innerHTML = `
            <img src=${movie.Poster} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <button type="button" class="btn btn-info" id='detailBtn'>Details</button>
                <button type="button" class="btn btn-info" id='fevBtn' >Remove ❌</button>
            </div>
        `;
        cardElement.querySelector('#detailBtn').addEventListener('click', () => redirect(movie.imdbID));
        cardElement.querySelector('#fevBtn').addEventListener('click', () => removefromFev(movie));
        movieContainer.appendChild(cardElement);
    });
    //when there is no favourite movie present in the local localstorage  
    if(fevMovies.length === 0){
        movieContainer.innerHTML='No favourite movie availabe 🚫'
    }
}


// Redirects to the movie detail page based on the IMDb ID.
function redirect(imdbID){
    const url = `./moviedetail.html?imdbID=${imdbID}`;
    window.open(url, '_blank');
}


// Removes a movie from the list of favorite movies stored in local storage.
function removefromFev(currentmovie){
    let fevMovies = JSON.parse(localStorage.getItem('fevMovies'));
    if(!fevMovies) fevMovies = []

    let updatedFevMoviesArr = fevMovies.filter(movie => movie.imdbID !== currentmovie.imdbID);

    let upadtedfevMovies = JSON.stringify(updatedFevMoviesArr);
    localStorage.setItem('fevMovies', upadtedfevMovies);
    showFevMovies();
}