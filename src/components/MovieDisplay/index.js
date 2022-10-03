/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { fetchMovieInfo } from '../../requests';

/* eslint-disable react/prop-types */
function MovieDisplay() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovieInfo = async () => {
      const { data } = await fetchMovieInfo();
      setMovies(data.results);
    };
    getMovieInfo();
  }, []);

  return (
    <div className="grid-container">
      {movies.map(({ original_title, overview, release_date, id, popularity, poster_path }) => (
        <div className="grid-item movie" key={id}>
          <Link to={`movies/${id}`} state={id} className="movie-link">
            <img
              src={
                poster_path
                  ? `${process.env.REACT_APP_MOVIE_IMG_BASE_URL}${poster_path}`
                  : 'https://nasa-movies.netlify.app/image/gallery.png'
              }
              alt="poster"
              className="movie-img"
            />
            <h1 className="movie-title">{original_title}</h1>
            <h4 className="movie-description-title">Description:</h4>
            <p className="movie-description">{overview}</p>
            <p className="movie-popularity">
              Popularity: <em>{popularity}</em>
            </p>
            <p className="movie-release-date">
              Release Date: <em>{release_date}</em>
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MovieDisplay;
