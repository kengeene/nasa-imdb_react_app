/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import '../assets/App.css';
import { fetchNasaInfo } from '../requests/index';
import MovieDisplay from './MovieDisplay';

function App() {
  const [nasaInfo, setNasaInfo] = useState({});
  const [dateString, setDateString] = useState('');
  const [movies, setMovies] = useState('');
  const convertDateFormat = (providedDate) => {
    const date = new Date(providedDate);
    return date.toDateString();
  };

  useEffect(() => {
    const getNasaInfo = async () => {
      const { data } = await fetchNasaInfo();
      setNasaInfo(data);
      setDateString(convertDateFormat(data.date));
    };
    getNasaInfo();
  }, []);

  return (
    <div className="App">
      <div>
        <h1 className="heading">
          <span>NASA:</span> Picture of the Day
          <div>{dateString}</div>
        </h1>
        <img src={nasaInfo.hdurl} alt="background" className="background-image" />
      </div>
      <MovieDisplay movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default App;
