import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import WatchList from './components/WatchList';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("movies.json")
      .then(respons => respons.json())
      .then(data => setMovies(data))
  }, [])

  return (
    <div className="App">
      <div className='container'>
        <Header />



      </div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/watchlist">WatchList</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<MoviesGrid movies={movies} />}></Route>
          <Route path="/watchlist" element={<WatchList />}></Route>
        </Routes>

      </Router>
      <Footer />
    </div>
  );
}

export default App;
