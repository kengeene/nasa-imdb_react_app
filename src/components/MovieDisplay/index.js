/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { fetchMovieInfo } from '../../requests';

/* eslint-disable react/prop-types */
function MovieDisplay() {
  const [movies, setMovies] = useState([
    {
      adult: false,
      backdrop_path: '/dZsC1wAyOXfQMe2DjMhKlITMahm.jpg',
      genre_ids: [99],
      id: 706614,
      original_language: 'en',
      original_title: 'NASA & SpaceX: Journey to the Future',
      overview:
        'A film crew was granted unprecedented access to NASA and to SpaceX headquarters, giving viewers a rare glimpse inside Launch Control and firsthand accounts from SpaceX founder and chief engineer Elon Musk, Bridentstine and the astronauts flying the mission: Bob Behnken and Doug Hurley.',
      popularity: 2.47,
      poster_path: '/oHqKd2jwRgL4BsgOqCv01hekvme.jpg',
      release_date: '2020-05-25',
      title: 'NASA & SpaceX: Journey to the Future',
      video: false,
      vote_average: 7.2,
      vote_count: 8
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99],
      id: 25240,
      original_language: 'en',
      original_title: 'NASA DREAMTiME',
      overview:
        'A short 9 minute documentary, part of the DREAMTiME project, a commercial high-definition television (HDTV) system was flown on the Space Shuttle.  Most of the footage was shot during the STS-99 Mission on Space Shuttle Endeavour (OV-105)',
      popularity: 0.841,
      poster_path: null,
      release_date: '2001-01-01',
      title: 'NASA DREAMTiME',
      video: true,
      vote_average: 0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99],
      id: 142087,
      original_language: 'en',
      original_title: 'NASA: 25 Years',
      overview: 'A collection of NASA films, from Project Mercury to the Space Shuttle.',
      popularity: 0.686,
      poster_path: '/jRK0BSOZagc0MdafNXTPXRgkHcx.jpg',
      release_date: '1983-01-01',
      title: 'NASA: 25 Years',
      video: false,
      vote_average: 8,
      vote_count: 2
    },
    {
      adult: false,
      backdrop_path: '/qsVekwcPR62aM0cYZ2e8eQNipgO.jpg',
      genre_ids: [],
      id: 510202,
      original_language: 'en',
      original_title: 'NASA: Water On Mars',
      overview:
        "NASA Press conference of September 28, 2015: New findings from NASA's Mars Reconnaissance Orbiter (MRO) provide the strongest evidence yet that liquid water flows intermittently on present-day Mars.",
      popularity: 0.845,
      poster_path: '/nxqTuMCqcdCVjP8bQi0iKlGF9Zq.jpg',
      release_date: '2015-01-01',
      title: 'NASA: Water On Mars',
      video: false,
      vote_average: 0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99],
      id: 369467,
      original_language: 'en',
      original_title: 'Synthesis: NASA Data Visualizations',
      overview:
        "When we feel The Earth beneath our feet, see it with our eyes, hear it when the wind blows, we perceive only the most obvious filaments of a far more complex place. Only with exquisite machines--spacecraft in orbit and powerful computers on the ground--can humanity begin to uncover the elegant nature of our complex home.  Presented here are a collection of data visualizations based on observations gathered by a fleet of spacecraft. In various depictions we see the currents of the world's oceans, changes in temperature and land cover over time, and precipitation as it cycles energy and water around our living planet.  But The Earth is only one part of a dynamic sphere, and with its companion The Moon nearby, we cannot hlep but remeber that our whole planet travels in a wider ocean. This video presents Earth's Moon with data gathered by the remarkable Lunar Reconnaissance Orbiter, an advanced probe designed to map our planetary companion in unprecedented detail.",
      popularity: 0.846,
      poster_path: '/cd79e7ticO6mwUN3oYHwfXpln7Q.jpg',
      release_date: '2015-11-01',
      title: 'Synthesis: NASA Data Visualizations',
      video: true,
      vote_average: 0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: '/2wxL66qY94ZCLscd0msHoOBJnPj.jpg',
      genre_ids: [10751, 18],
      id: 350547,
      original_language: 'bs',
      original_title: 'Naša svakodnevna priča',
      overview:
        "Family Susic lives everyday Bosnian story. Father Muhamed (63) is employed in a reputable company; mother Marija (60) is retired. Son Sasa (35), who spent the war in Army of Bosnia and Herzegovina, lives with his parents, while their daughter Senada (40) lives in Slovenia. Their life begins to fall apart because of father's dissatisfaction after his company is sold on the stock exchange, Sasa's negligent attitude towards work and family, Marija's breast cancer diagnose. When problems begin to line up Muhamed and Sasa realize that actually only family is important, that it is man's last oasis",
      popularity: 0.942,
      poster_path: '/dUppSl3gN0uxDkNaWlvn3KapL2N.jpg',
      release_date: '2015-01-01',
      title: 'Our Everyday Life',
      video: false,
      vote_average: 7,
      vote_count: 1
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99],
      id: 887254,
      original_language: 'en',
      original_title: 'Naša burza',
      overview:
        'We begin with a fragmented portrait of Činča, between the stories she tells and the thoughts of those surrounding her. In The Head, a girl is confronted with the possibility of dying. Intermezzo focusses on the moments of abstraction amid the hustle and bustle of a city. In Our Stock Exchange, unemployed people seek work. Second Floor, Basement shows us a hospital where only two floors separate birth and death.',
      popularity: 0.6,
      poster_path: null,
      release_date: '1987-10-01',
      title: 'Our Stock Exchange',
      video: false,
      vote_average: 0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [35],
      id: 924064,
      original_language: 'sl',
      original_title: 'Naša demokracija',
      overview:
        'It is 1976 in Yugoslavia. Brotherhood and unity is also evident on the local radio station, where everyone is rejoicing. Namely, they received the award for the most homogeneous collective. The most homogeneous collective, however, soon begins to disintegrate, as it turns out that the award is in fact intended for the best individual.',
      popularity: 0.6,
      poster_path: '/owcEedaO3pBRc1ps0NQAW8CoM7a.jpg',
      release_date: '2010-10-03',
      title: 'Our Democracy',
      video: false,
      vote_average: 0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [10770, 99],
      id: 574480,
      original_language: 'hr',
      original_title: 'Tvornica je naša!',
      overview:
        'How to fight the incompetent, overnight licensed bankruptcy trustees and corrupted new owners of Croatian ITAS Prvomajska metal factory, whose goal is to destroy once profitable company and lay off all the workers? The ITAS workers solution was this – occupy it! All this is happening in Croatia, after the bloody war between ex-socialist Yugoslavian countries.',
      popularity: 0.6,
      poster_path: '/exwrGE96cFz2WcWw5GGtRbhnIaj.jpg',
      release_date: '2017-05-01',
      title: 'The Factory is Ours!',
      video: false,
      vote_average: 0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99],
      id: 516753,
      original_language: 'en',
      original_title: 'NASA: A Space Odyssey Vol. 3',
      overview:
        'What if other life was out there? Join us as we try to answer that most-asked question.l With millions of stars the possibility is more than that, it is a very high probability! Follow Pioneer 10 as is flies by our largest planet, the massive giant Jupiter, and learn the message Pioneer 10 carries as it leaves our solar system.. just in case!',
      popularity: 1.138,
      poster_path: '/plFlimWCNq2oGEeAwwFJzNgOAJH.jpg',
      release_date: '2001-01-01',
      title: 'NASA: A Space Odyssey Vol. 3',
      video: false,
      vote_average: 0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [10751, 18],
      id: 1021913,
      original_language: 'tl',
      original_title: 'Sana Nasa Sana',
      overview:
        "Follows Desiree's journey through a fruitful conversation with her father that fills her with longing and realization about her life.",
      popularity: 0.6,
      poster_path: '/ge5D2IhYC9lN4IJyArOECyoDRIv.jpg',
      release_date: '',
      title: 'Sana Nasa Sana',
      video: false,
      vote_average: 10,
      vote_count: 1
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99],
      id: 789828,
      original_language: 'sv',
      original_title: 'Min kroatiska näsa',
      overview: "About Richard's nose and the father it came from.",
      popularity: 0.6,
      poster_path: null,
      release_date: '2007-01-28',
      title: 'My Croatian Nose',
      video: false,
      vote_average: 0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [],
      id: 304033,
      original_language: 'en',
      original_title: 'Alien Contact: NASA Exposed',
      overview:
        'Whistleblowers claim NASA not only knows about alien visitations but that they are in contact with extraterrestrials.',
      popularity: 0.6,
      poster_path: '/cFJ63qtCUkX9n5sWtdv7X37WRef.jpg',
      release_date: '2014-11-14',
      title: 'Alien Contact: NASA Exposed',
      video: false,
      vote_average: 0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [],
      id: 436092,
      original_language: 'en',
      original_title: 'NASA: The First 25 Years',
      overview:
        "This is the gripping and dynamic story of the USA's first 25 years of efforts to conquer the worlds beyond earth.",
      popularity: 0.6,
      poster_path: null,
      release_date: '1987-01-01',
      title: 'NASA: The First 25 Years',
      video: true,
      vote_average: 0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [],
      id: 135109,
      original_language: 'en',
      original_title: 'NASA: The American Space Odyssey',
      overview:
        'The complete NASA Historical Film Library included on thirty individual volumes. Some include introductions by the Astronauts themselves. See individual volumes for details.',
      popularity: 0.6,
      poster_path: null,
      release_date: '1971-04-12',
      title: 'NASA: The American Space Odyssey',
      video: false,
      vote_average: 0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99],
      id: 496894,
      original_language: 'en',
      original_title: 'Alien Contact: NASA Exposed 2',
      overview:
        'A former astronaut recently went on record to allege that there is abundant evidence that we are being contacted by Alien races and that these civilizations have been visiting us for a very long time. These claims also state that the Alien creatures appearance "is bizarre compared to any type of traditional western point of view and that these visitors use the technologies of consciousness and that they use "toroids," co-rotating magnetic disks for their propulsion systems. In addition, the recent discovery of 1,300 exoplanets that could sustain life has rocked the scientific world. Now more and more people, from world leaders to former astronauts, are testifying that UFOs not only exist, but that Aliens are here and have been monitoring the human race for centuries.',
      popularity: 0.629,
      poster_path: '/u8cnyEpQmAadtNoWQ5bte8AGmog.jpg',
      release_date: '2017-12-01',
      title: 'Alien Contact: NASA Exposed 2',
      video: false,
      vote_average: 8,
      vote_count: 1
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [10751, 99, 36],
      id: 346036,
      original_language: 'en',
      original_title: 'NASA 50 Years of Space Exploration',
      overview:
        'Enjoy the epic story of NASA space exploration. This comprehensive edition takes you on an adventure showcasing the most thrilling moments in U.S. Space exploration, while also examining the heartbreaking events when tragedy struck.  It’s all here…. From the amazing flight of John Glenn in Friendship 7 to The “Eagle has landed” historic mission to the moon, and Skylab and more.  A Brilliant combination of adventure, science, history  - perfect for the whole family.',
      popularity: 0.6,
      poster_path: null,
      release_date: '2003-06-23',
      title: 'NASA 50 Years of Space Exploration',
      video: false,
      vote_average: 0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [18, 10749],
      id: 962656,
      original_language: 'en',
      original_title: 'Ako ba ang nasa puso mo?',
      overview:
        "Abraham's wife dies in a hospital after giving birth to a son, Ariel. Abraham (Abe) is the head of a household. Biring, a housemaid, gave birth to a girl (Theresa) shortly after a few months. Theresa and Ariel grew up together. One day, Theresa's parents left for the province due to illness in the family. Theresa's parents shortly die from a passenger bus accident. Chayong, Abe's sister, sent Theresa away with her Aunt. Theresa grew up with her Aunt. Her Aunt is a prostitute and has financial difficulty. When Theresa turned 18, her aunt wants her to work as a prostitute as well to help with the finances. This prompted Theresa to run away and ended back in Manila where she was re-united with Ariel and his family.",
      popularity: 0.841,
      poster_path: '/q4NhR8SlQTBtkW2HYBKcZFCxcYO.jpg',
      release_date: '1997-05-14',
      title: 'Ako ba ang nasa puso mo?',
      video: false,
      vote_average: 0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [],
      id: 993741,
      original_language: 'en',
      original_title: 'NASA & SpaceX: The Voyage Beyond',
      overview:
        'Rare, inside access to NASA and SpaceX operations and a look at how experts are on a mission to develop revolutionary spacecraft technology capable of transporting humans to Mars and beyond.',
      popularity: 0.6,
      poster_path: null,
      release_date: '',
      title: 'NASA & SpaceX: The Voyage Beyond',
      video: false,
      vote_average: 0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99],
      id: 36014,
      original_language: 'en',
      original_title: 'Secret Space: What is Nasa Hiding?',
      overview:
        'Is NASA sharing everything they know about UFOs? This documentary uses footage from missions into space to prove that there are aliens and our government has had this evidence for years without sharing it with the public.',
      popularity: 0.6,
      poster_path: null,
      release_date: '1997-06-19',
      title: 'Secret Space: What is Nasa Hiding?',
      video: false,
      vote_average: 0,
      vote_count: 0
    }
  ]);
  const baseImgUrl = 'https://image.tmdb.org/t/p/original//';

  useEffect(() => {
    const getMovieInfo = async () => {
      //   const { data } = await fetchMovieInfo();
      //   setMovies(data.results);
      // console.log('movies', movies);
    };
    getMovieInfo();
  }, []);

  return (
    <div className="grid-container">
      {movies.map(({ original_title, overview, release_date, id, popularity, poster_path }) => (
        <div className="grid-item movie" key={id}>
          <Link to={`movies/${id}`} className="movie-link">
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/original//${poster_path}`
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
