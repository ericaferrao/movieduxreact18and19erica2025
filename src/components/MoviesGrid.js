import React, { useEffect, useState } from "react";
import '../styles.css';
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch("movies.json")
            .then(respons => respons.json())
            .then(data => setMovies(data))
    }, [])

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <>
            <div>
                <input type="text" className="search-input" placeholder="Search Movies..." value={searchTerm} onChange={handleSearchChange} />
                <div className="movies-grid">
                    {movies.map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}

                </div>
            </div>

        </>
    )
}