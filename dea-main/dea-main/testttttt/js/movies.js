document.addEventListener('DOMContentLoaded', () => {
    const movies = [
        // Lista e filmave
        { title: 'Action Movie 2', genre: 'action', image: 'images/image 1.jpg' },
        { title: 'Action Movie 3', genre: 'action', image: 'images/image 2.jpg' },
        { title: 'Action Movie 4', genre: 'action', image: 'images/image 3.jpg' },
        { title: 'Action Movie 5', genre: 'action', image: 'images/image 4.jpg' },
        { title: 'Action Movie 6', genre: 'action', image: 'images/image 5.jpg' },
        { title: 'Action Movie 8', genre: 'action', image: 'images/image 7.jpg' },
        { title: 'Action Movie 9', genre: 'action', image: 'images/image 8.jpg' },
        { title: 'Action Movie 10', genre: 'action', image: 'images/image 9.jpg' },
        { title: 'Action Movie 10', genre: 'action', image: 'images/image 10.jpg' },
        { title: 'Action Movie 10', genre: 'action', image: 'images/image 11.jpg' },
        { title: 'Comedy Movie 1', genre: 'comedy', image: 'images/image 1.jpg' },
        { title: 'Comedy Movie 2', genre: 'comedy', image: 'images/image 2.jpg' },
        { title: 'Comedy Movie 3', genre: 'comedy', image: 'images/image 3.jpg' },
        { title: 'Comedy Movie 4', genre: 'comedy', image: 'images/image 4.jpg' },
        { title: 'Comedy Movie 5', genre: 'comedy', image: 'images/image 5.jpg' },
        { title: 'Comedy Movie 6', genre: 'comedy', image: 'images/image 6.jpg' },
        { title: 'Comedy Movie 7', genre: 'comedy', image: 'images/image 7.jpg' },
        { title: 'Comedy Movie 8', genre: 'comedy', image: 'images/image 8.jpg' },
        { title: 'Comedy Movie 9', genre: 'comedy', image: 'images/image 9.jpg' },
        { title: 'Comedy Movie 10', genre: 'comedy', image: 'images/image 10.jpg' },
        { title: 'Comedy Movie 10', genre: 'comedy', image: 'images/image 11.jpg' },
        { title: 'Drama Movie 1', genre: 'drama', image: 'images/image 1.jpg' },
        { title: 'Drama Movie 2', genre: 'drama', image: 'images/image 2.jpg' },
        { title: 'Drama Movie 3', genre: 'drama', image: 'images/image 3.jpg' },
        { title: 'Drama Movie 4', genre: 'drama', image: 'images/image 4.jpg' },
        { title: 'Drama Movie 5', genre: 'drama', image: 'images/image 5.jpg' },
        { title: 'Drama Movie 6', genre: 'drama', image: 'images/image 6.jpg' },
        { title: 'Drama Movie 7', genre: 'drama', image: 'images/image 7.jpg' },
        { title: 'Drama Movie 8', genre: 'drama', image: 'images/image 8.jpg' },
        { title: 'Drama Movie 9', genre: 'drama', image: 'images/image 9.jpg' },
        { title: 'Drama Movie 10', genre: 'drama', image: 'images/image 10.jpg' },
        { title: 'Drama Movie 10', genre: 'drama', image: 'images/image 11.jpg' },
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/image 1.jpg' },
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/image 2.jpg' },
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/image 3.jpg' },
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/image 4.jpg' },
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/image 5.jpg' },
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/image 6.jpg' },
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/image 7.jpg' },
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/image 8.jpg' },
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/image 9.jpg' },
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/image 10.jpg' },
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/image 11.jpg' },
        { title: 'Romance Movie 1', genre: 'romance', image: 'images/image 1.jpg' },
        { title: 'Romance Movie 1', genre: 'romance', image: 'images/image 2.jpg' },
        { title: 'Romance Movie 1', genre: 'romance', image: 'images/image 3.jpg' },
        { title: 'Romance Movie 1', genre: 'romance', image: 'images/image 4.jpg' },
        { title: 'Romance Movie 1', genre: 'romance', image: 'images/image 5.jpg' },
        { title: 'Romance Movie 1', genre: 'romance', image: 'images/image 6.jpg' },
        { title: 'Romance Movie 1', genre: 'romance', image: 'images/image 7.jpg' },
        { title: 'Sci-Fi Movie 1', genre: 'sci-fi', image: 'images/image 1.jpg' },
        { title: 'Thriller Movie 1', genre: 'thriller', image: 'images/image 1.jpg' },
        { title: 'Documentary Movie 1', genre: 'documentary', image: 'images/image 1.jpg' }
    ];

    const searchInput = document.getElementById('search-input');
    const moviesContainer = document.getElementById('movies-container');

    // Funksioni për të lexuar parametrin e zhanrit nga URL-ja
    const lexoParametrinZhanrit = () => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('genre');
    };

    // Funksioni për të filtruar filmat bazuar në fjalët kyçe dhe zhanrin e zgjedhur
    const filterMovies = () => {
        const query = searchInput.value.toLowerCase();
        const selectedGenre = lexoParametrinZhanrit(); // Lexo zhanrin e zgjedhur nga URL-ja

        const filteredMovies = movies.filter(movie => {
            const titleMatches = movie.title.toLowerCase().includes(query);
            const genreMatches = !selectedGenre || movie.genre.toLowerCase() === selectedGenre;
            return titleMatches && genreMatches;
        });

        displayMovies(filteredMovies);
    };

    // Funksioni për të shfaqur filmat
    const displayMovies = (filteredMovies) => {
        moviesContainer.innerHTML = '';
        filteredMovies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <h3>${movie.title}</h3>
            `;
            moviesContainer.appendChild(movieElement);
        });
    };

    // Dëgjuesi për ndryshime në inputin e kërkimit
    searchInput.addEventListener('input', filterMovies);

    // Paraqit filmat fillestarë
    filterMovies();
});

