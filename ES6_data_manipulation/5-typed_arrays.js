module.exports = function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const intArray = new Int8Array(buffer, 0, length);
  intArray[position] = value;

  return new DataView(buffer);
};
