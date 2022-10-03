import { useEffect, useState } from 'react';
import '../assets/App.css';
import { fetchNasaInfo } from '../requests/index';
import MoviesDisplay from './MoviesDisplay';

function Homepage() {
  const [nasaInfo, setNasaInfo] = useState({});
  const [dateString, setDateString] = useState('');
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
      <MoviesDisplay />
    </div>
  );
}

export default Homepage;
