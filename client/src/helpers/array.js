function isEmpty(array) {
  return !Array.isArray(array) || array.length === 0;
}

export default {
  isEmpty
};