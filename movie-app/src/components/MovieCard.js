const MovieCard = (props) => {

    return (
        <div>
            {props.cards.map(movie =>
                <div className="movieCard">
                    <h1>{movie.Title}</h1>
                    <img src={movie.Poster} alt="movie" />
                </div>
            )}
        </div>
    );
}

export default MovieCard;