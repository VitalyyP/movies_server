const axios = require("axios");
const { Movies } = require("../entities/Movies");
const { API_KEY } = require("../../../.env");

const getPopular = async ({ page }, locale) => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${locale}&page=${page}`
  );

  return new Movies(result.data);
};

const getDetails = (id, locale) =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=${locale}`
  );

module.exports = {
  getPopular,
  getDetails,
};
