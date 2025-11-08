import React, { useEffect, useState } from "react";
import '../styles.css'

export default function MoviesGrid() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const m = ['a', 'b', 'c'];
        setMovies(m)
    }, [])

    return (
        <>
            {movies.length}
        </>
    )
}