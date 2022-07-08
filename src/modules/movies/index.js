const axios = require("axios");
const { Movies } = require("../entities/Movies");
const { API_KEY } = require("../../../.env");

const getPopular = async (page) => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );

  return new Movies(result.data);
};

const getDetails = (id) =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

module.exports = {
  getPopular,
  getDetails,
};
