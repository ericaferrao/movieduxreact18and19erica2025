import '../styles.css'

export default function MovieCard({ movie }) {

    const handleError = (e) => {
        e.target.src = 'images/default.jpg'
    }

    const getRatingClass = (rating) => {
        if (rating >= 8) {
            return 'rating-good'
        }
        if (rating > 5 && rating <= 8) {
            return 'rating-ok'
        }
        return 'rating-bad'
    }

    return (
        <>
            <div key={movie.id} className="movie-card">
                <img src={`images/${movie.image}`} alt={movie.title} onError={handleError} />
                <div className="movie-card-info">
                    <div className="movie-card-title">{movie.title}</div>
                    <div className="movie-card-genre">{movie.genre}</div>
                    <div className={`movie-card-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</div>
                </div>
            </div>
        </>
    )
}