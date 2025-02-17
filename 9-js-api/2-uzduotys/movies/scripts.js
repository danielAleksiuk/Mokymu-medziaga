async function fetchMovie(params) {
    const url = `https://api.tvmaze.com/search/shows?q=${params}`;
    
    const response = await fetch(url);

   return await response.json();
}

function onSearchClick() {
    let inputValue = document.getElementById('searchInput').value;

    if (inputValue) {
        fetchMovie(inputValue)
            .then (data => {
                const moviesContainer = document.getElementById('movie-list');
                moviesContainer.innerHTML = '';
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
            })
            .catch(e => console.log(e));
    }
}