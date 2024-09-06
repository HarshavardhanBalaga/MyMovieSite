import React, { useState } from 'react'
import { useEffect } from 'react';
import MovieCard from './MovieCard';

const API_URL = "https://www.omdbapi.com?apikey=7a1eb131";
function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies("Baahubali");
  }, []);

  const sampleMovie = {
    "Title": "The Avengers: Earth's Mightiest Heroes",
    "Year": "2010–2012",
    "imdbID": "tt1626038",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
};

  return (
    <div className='app'>
      <h1>MovieFlex</h1>
      <div className="search">

        <input 
          type="text" 
          placeholder='search for movies'
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
        />

        <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
            alt="search"
            onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        movies?.length > 0 
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
            ):(
              <div className='empty'>
                <h2>No movies found</h2>
              </div>
            )
         }

    </div>
  )
}

export default App;
