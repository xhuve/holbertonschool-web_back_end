module.exports = function hasValuesFromArray(set, arr) {
  // eslint-disable-next-line no-restricted-syntax
  return arr.every((value) => set.has(value));
};
