const MovieCard = (props) => {

    return (
        <div>
            {props.cards.map((movie, index) =>
                <div className="movieCard" key={index}>
                    <h1>{movie.Title}</h1>
                    <img src={movie.Poster} alt="movie" />
                </div>
            )}
        </div>
    );
}

export default MovieCard;