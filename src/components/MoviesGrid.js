import React, { useEffect, useState } from "react";
import '../styles.css';
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [genre, setGenre] = useState("All Genres");
    const [rating, setRating] = useState("All");

    useEffect(() => {
        fetch("movies.json")
            .then(respons => respons.json())
            .then(data => setMovies(data))
    }, [])

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleGenreChange = (e) => {
        setGenre(e.target.value)
    }

    const handleRatingChange = (e) => {
        setRating(e.target.value)
    }

    const matchRating = (movie, rating) => {
        switch (rating) {
            case "All":
                return true;
            case "Good":
                return movie.rating >= 8;
            case "Ok":
                return movie.rating > 5 && movie.rating < 8;
            case "Bad":
                return movie.rating <= 5;
            default:
                return false;

        }

    }

    const matchGenre = (movie, genre) => {
        return genre === 'All Genres' || genre.toLowerCase() === movie.genre.toLowerCase()

    }

    const matchSearchTerm = (movie, searchTerm) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase())

    }

    const filteredMovies = movies.filter((movie) =>
        matchGenre(movie, genre) &&
        matchSearchTerm(movie, searchTerm) &&
        matchRating(movie, rating)
    )

    return (
        <>
            <div>
                <input type="text"
                    className="search-input"
                    placeholder="Search Movies..."
                    value={searchTerm}
                    onChange={handleSearchChange} />
                <div className="filter-bar">
                    <div className="filter-slot">
                        <label>Genre</label>
                        <select onChange={handleGenreChange} value={genre} className="filter-dropdown">
                            <option>All Genres</option>
                            <option>Action</option>
                            <option>Drama</option>
                            <option>Fantasy</option>
                            <option>Horror</option>
                        </select>
                    </div>
                    <div className="filter-slot">
                        <label>Rating</label>
                        <select onChange={handleRatingChange} value={rating} className="filter-dropdown">
                            <option>All</option>
                            <option>Good</option>
                            <option>Ok</option>
                            <option>Bad</option>
                        </select>
                    </div>
                </div>
                <div className="movies-grid">
                    {filteredMovies.map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}

                </div>
            </div>

        </>
    )
}