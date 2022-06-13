const changeFormat = (string) =>
  `${string.substr(8, 2)}.${string.substr(5, 2)}.${string.substr(0, 4)}`;

module.exports = {
  changeFormat,
};
