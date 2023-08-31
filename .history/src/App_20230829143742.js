import React, { useEffect } from 'react'
import './App.css'
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
// 24694db
const API_URL = 'http://www.omdbapi.com?apikey=24694db';
const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL }&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }
    const movie1 = {
        "Title": "Spiderman and Grandma",
        "Year": "2009",
        "imdbID": "tt1433184",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
    }
    useEffect(() => {
        searchMovies('spiderman');
    })
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies" 
                    value="Superman" 
                    onChange={() => {}}
                />
                <img src={SearchIcon} alt="search" onClick={() => {}}/>
            </div>

            <div className="container">
               <MovieCard />
            </div>
        </div>
    );
}

export default App;