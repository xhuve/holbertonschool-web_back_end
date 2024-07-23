module.exports = function updateUniqueItems(groceriesMap) {
  groceriesMap.forEach((value, key, map) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });

  return groceriesMap;
};
