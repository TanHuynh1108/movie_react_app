import React, { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
// 24694db

const API_URL = 'http://www.omdbapi.com?apikey=24694db';
const App = () => {
    const searchIconRef = React.createRef();
    const handleKeyUp = (event) => {
      if (event.key === 'Enter') {
        searchIconRef.current.click();
      }
    }
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL }&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    const movie1 = {
        "Title": "Spiderman and Grandma",
        "Year": "2009",
        "imdbID": "tt1433184",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
    }
   
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    id="searchInput"
                    placeholder="Search for movies" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyUp={handleKeyUp}
                />
                <img 
                    id="searchIcon"
                    src={SearchIcon} 
                    alt="search" 
                    onClick={() => searchMovies(searchTerm)}
                    ref={this.searchIconRef}
                />
            </div>
            {
                movies?.length > 0 ?
                (
                    <div className="container">
                        {
                            movies.map((movie) =>(
                                <MovieCard movie={movie}/>
                            ))
                        }
                    </div>
                ) :
                (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
            
        </div>
    );
};

export default App;