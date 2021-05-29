import Navbar from './components/Navbar'
import MovieCard from './components/MovieCard'
import { useEffect, useState } from 'react'

function App() {

  const [cards, setCards] = useState([]);
  const [term, setTerm] = useState("boat");

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=203042a4&s=${term}`)
    .then(response => response.json())
    .then(result => setCards(result.Search))
  })
  
  return (
    <div className="App">
      <Navbar />
      <MovieCard cards={cards} />
    </div>
  );
}

export default App;
