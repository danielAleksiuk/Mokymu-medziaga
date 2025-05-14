import { useState } from "react";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchBar/SearchBar";
import { Container } from 'react-bootstrap';
import List from "../../components/list/List";
import Loader from "../../components/loader/Loader";

const API_URL = 'https://www.omdbapi.com'
const API_KEY = 'apikey=a2526df0'

const MovieList = () => {
    const [searchState, setSearchState] = useState('');
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const onSearchInputChange = (event) => {
        setSearchState(
            event.target.value
        )
    }

    const onEnterPress = (event) => {
        if (event.code === 'Enter') {
            setIsLoading(true);

            setTimeout(() => {
                const url = `${API_URL}/?${API_KEY}&s=${searchState}`;

                fetch(url)
                    .then(response => response.json())
                    .then(data => setMovies(data.Search))
                    .finally(() => setIsLoading(false));
            }, 1500)
            
        }
    }

    return (
        <Container>  
            <Header text="Movie Search"/>
            <SearchBar
                onChangeMethod={onSearchInputChange}
                onEnterPressMethod={onEnterPress}
            />
            { isLoading && <Loader /> }
            { movies && <List list={movies}/>}
        </Container>
    )
}

export default MovieList;