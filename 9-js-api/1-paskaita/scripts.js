async function fetchMovie() {
    const response = await fetch(
        'https://api.tvmaze.com/search/shows?q=spiderman'
    );

   return await response.json();
}

fetchMovie()
    .then (data => {
        const moviesContainer = document.createElement('div');
        moviesContainer.className = 'movies-container';

        for (let movie of data) {
            const movieDiv = document.createElement('div');
            movieDiv.className = 'movie';

            movieDiv.innerHTML = `
                <img src='${movie.show.image.medium}'>
                <h3>${movie.show.name}</h3>
                <p> genres: ${movie.show.genres.join(',')}</p>
                <p> ${movie.show.summary} </p>
            `;

            moviesContainer.appendChild(movieDiv);
        }

        document.body.appendChild(moviesContainer);
    });
