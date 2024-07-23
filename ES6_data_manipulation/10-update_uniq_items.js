module.exports = function updateUniqueItems(groceriesMap) {
  if (groceriesMap instanceof Map) return new Error('Cannot process');
  groceriesMap.forEach((value, key, map) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });

  return groceriesMap;
};
