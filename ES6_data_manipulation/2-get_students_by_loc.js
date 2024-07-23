// eslint-disable-next-line no-undef
module.exports = function getStudentsByLocation(arr, city) {
  return arr.filter((x) => x.location === city);
};
