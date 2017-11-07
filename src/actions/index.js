import axios from 'axios';

const API_KEY = '68474242';
const ROOT_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export const FETCH_MOVIE = 'FETCH_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';

export function fetchMovie(title) {
  const url = `${ROOT_URL}&t=${title}`;
  const request = axios.get(url);

  return {
    type: FETCH_MOVIE,
    payload: request
  };
}

export function removeMovie(movie) {
  return {
    type: REMOVE_MOVIE,
    payload: movie
  }
}
