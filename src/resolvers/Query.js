const { getPopular, getDetails } = require("../modules/movies");
const { Movie } = require("../modules/entities/Movie");

async function movies(parent, args, context) {
  const data = await getPopular(args, context.locale);
  return data;
}
// async function movies(parent, args, { locale }) {
//   const data = await getPopular(args, locale);
//   return data;
// }

async function moviesByIds(parent, { ids }, context) {
  const requests = ids.map((id) => getDetails(id, context.locale));
  const data = await Promise.all(requests);
  const movies = data.map(({ data }) => new Movie(data));
  return movies;
}
// async function moviesByIds(parent, { ids }, { locale }) {
//   const requests = ids.map((id) => getDetails(id, locale));
//   const data = await Promise.all(requests);
//   const movies = data.map(({ data }) => new Movie(data));
//   return movies;
// }

module.exports = {
  movies,
  moviesByIds,
};
