const MovieCard = (props) => {

    if (props.cards === undefined) {
        return (
            <div className="noResult">
                <h1>nothing was found</h1>
            </div>
        )
    }
    else {
        return (
            <div className="cards-container">
                {props.cards.map((movie, index) =>
                    <div className="movieCard" key={index}>
                        <img src={movie.Poster} alt="movie" />
                        <h5>{movie.Title}</h5>
                    </div>
                )}
            </div>
        );
    }
}

export default MovieCard;