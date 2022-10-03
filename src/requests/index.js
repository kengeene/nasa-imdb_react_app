import request from '../utils/axios';

export function fetchNasaInfo() {
  return request({
    url: 'https://api.nasa.gov/planetary/apod?api_key=SPkLKA7bCBamNIY9kJ4ceIeWB67uFjxP5lXkQeNR',
    method: 'get'
  });
}

export function fetchMovieInfo() {
  return request({
    url: 'https://api.themoviedb.org/3/search/movie?api_key=48b43c71c226d58239efb833d05ab17c&language=en-US&query=NASA&include_adult=false&1',
    method: 'get'
  });
}
