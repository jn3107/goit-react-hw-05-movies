import axios from 'axios';

const KEY = 'dc46b2bf0e575d3fd6c04fa612170e69';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingList = async () => {
  try {
    const { data } = await axios.get('trending/movie/day', {
      params: {
        api_key: KEY,
        language: 'en-US',
      },
    });

    return data.results;
  } catch (error) {
    console.error('Error fetching trends:', error);
    throw error;
  }
};

export const fetchSearchMovies = async query => {
  try {
    const { data } = await axios.get('search/movie', {
      params: {
        api_key: KEY,
        query,
        language: 'en-US',
      },
    });
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchMovieInform = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}`, {
      params: {
        api_key: KEY,
        language: 'en-US',
      },
    });
    return data;
  } catch (error) {
    console.error('Error fetching movie information:', error);
    throw error;
  }
};

export const fetchActors = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}/credits`, {
      params: {
        api_key: KEY,
        language: 'en-US',
      },
    });
    return data.cast;
  } catch (error) {
    console.error('Error fetching cast:', error);
    throw error;
  }
};

export const fetchReviews = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}/reviews`, {
      params: {
        api_key: KEY,
        language: 'en-US',
      },
    });
    return data.results;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};
