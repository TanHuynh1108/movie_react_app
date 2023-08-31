import React, { useEffect } from 'react'
import './App.css'
import SearchIcon from './search.svg';
// 24694db
const API_URL = 'http://www.omdbapi.com?apikey=24694db';
const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL }&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }
    useEffect(() => {
        searchMovies('spiderman');
    })
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input placeholder="Search for movies" value="Superman" onChange={() => {}}/>
            </div>
            <img className="app_img" src={SearchIcon} alt="search" onClick={() => {}}/>
        </div>
    );
}

export default App;