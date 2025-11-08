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
            {movies.length}
        </>
    )
}