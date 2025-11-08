import React, { useEffect, useState } from "react";
import '../styles.css'

export default function MoviesGrid() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("movies.json")
            .then(respons => respons.json())
            .then(data => setMovies(data))
    }, [])

    return (
        <>
            <div className="movies-grid">
                {movies.map(movie => (
                    <div key={movie.id} className="movie-card">
                        <img src={`images/${movie.image}`} alt={movie.title} />
                        <div className="movie-card-info">
                            <div className="movie-card-title">{movie.title}</div>
                            <div className="movie-card-genre">{movie.genre}</div>
                            <div className="movie-card-rating">{movie.rating}</div>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}