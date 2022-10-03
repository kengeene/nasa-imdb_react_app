/* eslint-disable no-console */
import { useState } from 'react';

function SingleMovie() {
  const [movie] = useState({
    adult: false,
    backdrop_path: '/rL0XOlPfxrIvH2japmt1cSczt4d.jpg',
    belongs_to_collection: null,
    budget: 0,
    genres: [{ id: 99, name: 'Documentary' }],
    homepage: '',
    id: 706614,
    imdb_id: 'tt12397734',
    original_language: 'en',
    original_title: 'NASA & SpaceX: Journey to the Future',
    overview:
      'A film crew was granted unprecedented access to NASA and to SpaceX headquarters, giving viewers a rare glimpse inside Launch Control and firsthand accounts from SpaceX founder and chief engineer Elon Musk, Bridentstine and the astronauts flying the mission: Bob Behnken and Doug Hurley.',
    popularity: 2.47,
    poster_path: '/oHqKd2jwRgL4BsgOqCv01hekvme.jpg',
    production_companies: [
      { id: 98690, logo_path: null, name: 'Storied Media Group', origin_country: 'US' }
    ],
    production_countries: [{ iso_3166_1: 'US', name: 'United States of America' }],
    release_date: '2020-05-25',
    revenue: 0,
    runtime: 83,
    spoken_languages: [
      { english_name: 'English', iso_639_1: 'en', name: 'English' },
      { english_name: 'French', iso_639_1: 'fr', name: 'Français' }
    ],
    status: 'Released',
    tagline: '',
    title: 'NASA & SpaceX: Journey to the Future',
    video: false,
    vote_average: 7.2,
    vote_count: 8
  });

  console.log(movie);

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
