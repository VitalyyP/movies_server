const { getPopular } = require("../modules/movies");

async function movies(parent, args) {
  const data = await getPopular(args.page);
  console.log(data.results.length);
  return data;
}

module.exports = {
  movies,
};
