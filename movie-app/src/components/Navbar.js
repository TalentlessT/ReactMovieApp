const Navbar = () => {
    return (
        <div>
            <div className="brand">
                <h1>Movie App</h1>
            </div>

            <div className="search">
                <form action="submit">
                    <input type="text" placeholder="movie..." />
                    <button type="submit">search</button>
                </form>
            </div>
        </div>
    );
}

export default Navbar;