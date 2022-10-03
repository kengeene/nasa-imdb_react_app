/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../requests';
// eslint-disable-next-line react/prop-types
function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovieDetails(id).then(async (response) => {
      const movieData = await response.data;
      setMovie(movieData);
    });
  }, [id]);

  return (
    <div style={{ color: '#ffffff' }}>
      <img
        src={`${process.env.REACT_APP_MOVIE_IMG_BASE_URL}${movie.poster_path}`}
        alt="movie_poster"
      />
      <h2>Title: {movie.title}</h2>
      <h2>Tagline: {movie.tagline}</h2>
      <h2>Overview: {movie.overview}</h2>
      <h2>Vote Average: {movie.vote_average}</h2>
      <h2>Total Votes: {movie.vote_count}</h2>
      <h2>Status: {movie.status}</h2>
      <h2>
        IMDB Link: <a href={`https://www.imdb.com/title/${movie.imdb_id}`}>{movie.imdb_id}</a>
      </h2>
      <h2>Budget: {movie.budget ? movie.budget : 'Unknown budget costs'}</h2>
      <h2>Production Countries:</h2>
      <ul>
        {movie.production_countries
          ? movie.production_countries.map(({ name }) => <li key={name}>{name}</li>)
          : null}
      </ul>
      <h2>Genres</h2>
      <ul>{movie.genres ? movie.genres.map(({ name }) => <li key={name}>{name}</li>) : null}</ul>
      <h2>Languages</h2>
      <ul>
        {movie.spoken_languages
          ? movie.spoken_languages.map(({ name }) => <li key={name}>{name}</li>)
          : null}
      </ul>
    </div>
  );
}

export default SingleMovie;
