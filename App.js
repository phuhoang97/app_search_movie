import "./App.css";
import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=97f1bd616b51e07825e04a855aaeed30&query=${query}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.log(err));
  };

  console.log(query);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className='products'>
          <div className='section-title'>
            <h2>search for movie</h2>
            <input
              type='input'
              id='myinput'
              placeholder='search for movie'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button id='mybtn'>search</button>
          </div>
        </section>
      </form>
      <div className='products-center'>
        <article className='product'>
          {movies.map((e) => {
            return (
              <>
                <div className='img-container'>
                  <img
                    className='product-img'
                    src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
                    alt='photo'
                  ></img>
                  <h3>{e.original_title}</h3>
                </div>
              </>
            );
          })}
        </article>
      </div>
    </div>
  );
}
export default App;
