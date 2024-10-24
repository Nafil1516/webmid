import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-info">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </div>
        </div>
    );
};

export default MovieCard;