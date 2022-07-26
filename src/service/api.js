import axios from 'axios';

const API_KEY = '44d416356c22cc8e7735ee915c193364';
const URL = 'https://api.themoviedb.org/3/trending/all/day';
const URL_SEARCH_BY_NAME = 'https://api.themoviedb.org/3/search/movie';
const URL_SEARCH_BY_ID = 'https://api.themoviedb.org/3/movie';

// get popular cinema
async function getDataPopularCinema() {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  try {
    const { data } = await axios.get(`${URL}`);
    // console.log(data);
    return data.results;
  } catch (error) {}
}

// поиск по name фильма на апи themoviedb
async function getDataByName(name) {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
    query: `${name}`,
  };
  try {
    const { data } = await axios.get(`${URL_SEARCH_BY_NAME}`);
    return data.results;
  } catch (error) {}
}

// get by id cinema
async function getDataById(id) {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  try {
    const { data } = await axios.get(`${URL_SEARCH_BY_ID}/${id}`);

    return data;
  } catch (error) {}
}

// search actor by id
async function getDataActorById(id) {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  try {
    const { data } = await axios.get(`${URL_SEARCH_BY_ID}/${id}/credits`);
    return data.cast;
  } catch (error) {}
}

// search reviews by id
async function getDataReviewsById(id) {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
    page: 1,
  };
  try {
    const { data } = await axios.get(`${URL_SEARCH_BY_ID}/${id}/reviews`);
    return data.results;
  } catch (error) {}
}

const apiGet = {
  popular: getDataPopularCinema,
  movieById: getDataById,
  getReviews: getDataReviewsById,
  getCharacter: getDataActorById,
  getCinemaByName: getDataByName,
};

export default apiGet;
