import { useState } from "react";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchBar/SearchBar";

const API_URL = 'https://www.omdbapi.com'
const API_KEY = 'apikey=a2526df0'

const MovieList = () => {
    const [searchState, setSearchState] = useState('');

    const onSearchInputChange = (event) => {
        setSearchState(
            event.target.value
        )
    }

    const onEnterPress = (event) => {
        if (event.code === 'Enter') {
            console.log(searchState);
            const url = `${API_URL}/?${API_KEY}&s=${searchState}`;

            fetch(url)
                .then(response => response.json())
                .then(data => console.log(data));
        }
    }

    return (
        <>
            <Header text="Movie Search"/>
            <SearchBar
                onChangeMethod={onSearchInputChange}
                onEnterPressMethod={onEnterPress}
            />
        </>
    )
}

export default MovieList;