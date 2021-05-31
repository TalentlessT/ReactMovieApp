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
            <div className="card-wrap">
                <div className="cards-container">
                    {props.cards.map((movie, index) =>
                        <div className="movieCard" key={index}>
                            <div className="overlay">
                                <div className="overlay-info">
                                    <h3>{movie.Year}</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Voluptatum, quasi magni voluptates dolor nam at quae.
                                        Neque necessitatibus accusamus vitae harum, voluptatum
                                        id cumque quam optio est culpa consequuntur numquam.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Sunt dolore magni veritatis error placeat? Incidunt,
                                        nesciunt autem libero nemo.
                                    </p>
                                </div>
                                <img src={movie.Poster} alt="movie" className="movieImage" />
                            </div>
                            <h5>{movie.Title}</h5>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default MovieCard;