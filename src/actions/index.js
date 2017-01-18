import axios from 'axios';

const API_KEY = '96682b236254d8b2b1adc646083fbebb';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // this is a promise

  return {
    type: 'FETCH_WEATHER',
    payload: request
  };
}
