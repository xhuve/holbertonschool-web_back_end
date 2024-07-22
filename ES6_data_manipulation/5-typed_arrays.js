module.exports = function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(8);
  const intArray = new Int8Array(buffer, 0, length);
  intArray[position] = value;

  return intArray;
};
