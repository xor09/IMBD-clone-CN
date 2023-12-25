# Coding-Ninja-IMDB-Clone

## IMDB CLONE - Project Report [Live Demo](https://xor09.github.io/IMBD-clone-CN/)

### Overview:
This project is a clone of the popular movie database website, IMDB. It allows users to browse and view information about movies, search for their favorite films, and mark movies as favorites from. [OMDB API](https://www.omdbapi.com/).

### Features:

1. *Home Page:*
   - Allows users to search for movies with real-time suggestions.
   - Each search result has a favorite button to add the movie to the user's favorites list.
   - Clicking on a search result opens a new page with detailed information about that movie.

2. *Movie Detail Page:*
   - Displays detailed information about a selected movie, including name, photo, description and genre.

3. *My Favourite Movie Page:*
   - Displays a list of all the user's favorite movies.
   - Persistence: The list remains the same even after closing or refreshing the browser.
   - Remove from favorites button: Allows users to remove a movie from the favorites list.

### Code Structure:

- *HTML:*
  - index.html: Home page layout.
  - moviedetail.html: Movie detail page layout.
  - favourite.html: Favorites page layout.

- *CSS:*
  - style.css: Styles for the entire application, including responsiveness.

- *JavaScript:*
  - home.js: Handles search functionality, API calls, and general application logic for index.html page.
  - moviedetail.js: Manages fetching and displaying details for a specific movie using its imdbID.
  - favourite.js: Deals with displaying and managing favorite movies.

### Code Quality:

- *Comments:*
  - Code is well-commented, providing insights into functionality and purpose.

- *Indentation and Naming:*
  - Consistent indentation and meaningful variable/function naming enhance code readability.

- *Styling:*
  - Clear separation of concerns with a dedicated CSS file for styling.
  - Responsive design principles applied for a better user experience.

### Additional Components:

- *Navbar:*
  - Navigation bar added for easy access to home and favorites and a search bar (only for home page).

- *Loader:*
  - A loader displays during API calls to indicate ongoing processes.

- *Success Message:*
  - A success message notifies the user when a movie is successfully added to favorites.

### GitHub and Hosting:

- *GitHub Repository:*
  - All code is hosted on [GitHub](https://github.com/xor09/IMBD-clone-CN).
  
- *Readme:*
  - A comprehensive Readme.md file is included, providing instructions, project overview, and setup details.

### Video Explanation:

- A concise [video explanation](link_to_video) is available, demonstrating how the project was approached, the implemented features, and an overview of the final product.

### Conclusion:

The IMDB Clone successfully implements the specified features, adheres to coding standards, and provides a user-friendly experience. The comprehensive documentation and well-structured code make it an accessible project for both developers and users.

### Future Improvements:

- Explore additional features like user authentication for personalized favorites.
- Enhance the user interface and add more engaging visuals.