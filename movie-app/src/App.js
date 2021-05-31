import Navbar from './components/Navbar'
import MovieCard from './components/MovieCard'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

function App() {

  const [cards, setCards] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=203042a4&s=${term}`)
      .then(response => response.json())
      .then(result => setCards(result.Search))
  })

  return (
    <div className="App">
      <Navbar search={setTerm} />
      <MovieCard cards={cards} />
      <Footer />
    </div>
  );
}

export default App;
