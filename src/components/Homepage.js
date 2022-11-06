import { useEffect, useState } from 'react';
import '../styles/App.css';
import { fetchNasaInfo } from '../requests/index';
import MoviesDisplay from './MoviesDisplay';
import { convertDateFormat } from '../utils/date';

function Homepage() {
  const [nasaInfo, setNasaInfo] = useState({});
  const [dateString, setDateString] = useState('');

  useEffect(() => {
    // This function fetches fetches info needed to render the Menubar date and the background image displayed onthe homepage
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
        {nasaInfo.media_type === 'video' ? (
          <iframe width="420" height="315" src={nasaInfo.url} title="NASA video" />
        ) : (
          <img src={nasaInfo.hdurl} alt="background" className="background-image" />
        )}
      </div>
      {/* Grid used to display the movies fetched by the API */}
      <MoviesDisplay />
    </div>
  );
}

export default Homepage;
