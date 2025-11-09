import '../styles.css'

export default function MovieCard({ movie }) {

    const handleError = (e) => {
        e.target.src = 'images/default.jpg'
    }

    return (
        <>
            <div key={movie.id} className="movie-card">
                <img src={`images/${movie.image}`} alt={movie.title} onError={handleError} />
                <div className="movie-card-info">
                    <div className="movie-card-title">{movie.title}</div>
                    <div className="movie-card-genre">{movie.genre}</div>
                    <div className="movie-card-rating">{movie.rating}</div>
                </div>
            </div>
        </>
    )
}