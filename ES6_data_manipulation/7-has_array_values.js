module.exports = function hasValuesFromArray(set, arr) {
  // eslint-disable-next-line no-restricted-syntax
  for (const value in arr) {
    if (set.has(Number(value))) { return false; }
  }
  return true;
};
