import React, { useEffect } from 'react'
// 24694db
const API_key = 'htpp://www.omdbapi.com?apikey=24694db';
const App = () => {
    const search_Movie = async (title) => {
        const response = await fetch(`${API_key}&s=${title}`);
        const data = await response.json();

        console.log(data);
    }
    useEffect(() => {
        search_Movie('spiderman');
    })
    return (
        <h1>Hello</h1>
    );
}

export default App;