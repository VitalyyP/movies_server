const { IMAGE_BASE_PATH } = require("../../config");
const { changeFormat } = require("../../utils");

class Movie {
  constructor(movie) {
    this.id = movie.id;
    this.title = movie.title;
    this.originalTitle = movie.original_title;
    this.originalLanguage = movie.original_language;
    this.releaseDate = movie.release_date;
    // this.releaseDate = changeFormat(movie.release_date);
    this.posterPath = `${IMAGE_BASE_PATH}${movie.poster_path}`;
    this.genres = movie.genre_ids;
    this.adult = movie.adult;
    this.overview = movie.overview;
    this.backdropPath = `${IMAGE_BASE_PATH}${movie.backdrop_path}`;
    this.popularity = movie.popularity;
    this.voteCount = movie.vote_count;
    this.video = movie.video;
    this.voteAverage = movie.vote_average;
  }
}

module.exports = { Movie };
