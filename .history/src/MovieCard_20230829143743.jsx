import React  from "react";

const MovieCard = (props) => {
    return (
        <div className="movie">
            <div>
                <p>{props.Year}</p>
            </div>
            <div>
                <img src={props.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
            </div>
            <div>
                <span>{movie1.Type}</span>
                <h3>{movie1.Title}</h3>
            </div>
        </div>
    )
}
export default MovieCard;