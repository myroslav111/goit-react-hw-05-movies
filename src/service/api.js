import axios from 'axios';

const API_KEY = '44d416356c22cc8e7735ee915c193364';
const URL = 'https://api.themoviedb.org/3/trending/all/day';
const URL_SEARCH_BY_NAME = 'https://api.themoviedb.org/3/search/movie';
const URL_SEARCH_BY_ID = 'https://api.themoviedb.org/3/movie';

// get popular cinema
async function getDataPopularCinema() {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'uk-UA',
  };
  try {
    const { data } = await axios.get(`${URL}`);
    console.log(data);
    return data.results;
  } catch (error) {}
}
// getDataPopularCinema();

// поиск по name фильма на апи themoviedb
async function getDataByName() {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'uk-UA',
    query: 'Jack+Reacher',
  };
  try {
    const { data } = await axios.get(`${URL_SEARCH_BY_NAME}`);
    console.log(data);
    return data;
  } catch (error) {}
}
// getDataByName();

// get by id cinema
async function getDataById(id) {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'uk-UA',
  };
  try {
    const { data } = await axios.get(`${URL_SEARCH_BY_ID}/${id}`);
    console.log(data);
    return data;
  } catch (error) {}
}
// getDataById(507086);

// search actor by id
async function getDataActorById(id) {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'uk-UA',
  };
  try {
    const { data } = await axios.get(`${URL_SEARCH_BY_ID}/${id}/credits`);
    console.log(data);
    return data;
  } catch (error) {}
}
// getDataActorById(507086);

// search reviews by id
async function getDataReviewsById(id) {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
    page: 1,
  };
  try {
    const { data } = await axios.get(`${URL_SEARCH_BY_ID}/${id}/reviews`);
    console.log(data);
    return data;
  } catch (error) {}
}
// getDataReviewsById(507086);
const apiGet = {
  popular: getDataPopularCinema,
};

export default apiGet;
