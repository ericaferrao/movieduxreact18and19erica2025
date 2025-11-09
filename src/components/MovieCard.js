import '../styles.css'

export default function MovieCard({ movie }) {

    return (
        <>
            <div key={movie.id} className="movie-card">
                <img src={`images/${movie.image}`} alt={movie.title} />
                <div className="movie-card-info">
                    <div className="movie-card-title">{movie.title}</div>
                    <div className="movie-card-genre">{movie.genre}</div>
                    <div className="movie-card-rating">{movie.rating}</div>
                </div>
            </div>
        </>
    )
}