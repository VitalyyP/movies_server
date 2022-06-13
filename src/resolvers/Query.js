const { getPopular } = require("../modules/movies");

async function movies(parent, args) {
  // console.log("hello before getPopular");
  const data = await getPopular();
  // console.log("data after getPupular: ", data);
  return data;
}

module.exports = {
  movies,
};
