import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovieInfo } from '../requests';

function MoviesDisplay() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // This function will be used to fetch the movies
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
            {/* Will default to default image if an image/poster is not found while querying the API */}
            <img
              src={
                poster_path
                  ? `${process.env.REACT_APP_MOVIE_IMG_BASE_URL}${poster_path}`
                  : process.env.REACT_APP_DEFAULT_MOVIE_IMG
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

export default MoviesDisplay;
