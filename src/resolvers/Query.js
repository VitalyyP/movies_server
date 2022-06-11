function movies(parent, args) {
  return {
    page: 1,
    totalResults: 10,
    totalPages: 10,
    results: [
      {
        id: "1",
        title: "movie title",
        releaseDate: "release date",
        posterPath: "https://www.themoviedb.org/tv/92830-obi-wan-kenobi#",
        genres: [
          {
            id: 1,
            name: "Drama",
          },
        ],
      },
    ],
  };
}

module.exports = {
  movies,
};
