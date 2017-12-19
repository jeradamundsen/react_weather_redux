import axios from 'axios';

const API_KEY = '878c392640dbe4ae6104b39425b1e6fe';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){

  const url =`${ROOT_URL}&q=${city},us`
  const request = axios.get(url)
  console.log('request', request)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
