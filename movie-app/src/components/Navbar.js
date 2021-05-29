import { useState } from 'react'

const Navbar = ( props ) => {

    const [word, setWord] = useState();

    const handleButton = (e) => {
        e.preventDefault();
        props.search(word);
    }

    return (
        <div className="navbar">
            <div className="navbar-container">

                <div className="brand">
                    <h1>Movie App</h1>
                </div>

                <div className="search">
                    <form onSubmit={handleButton}>
                        <input type="text" placeholder="movie..." onChange={e => setWord(e.target.value)} />
                        <button type="submit">search</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Navbar;