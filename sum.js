function sum(a = 0, b = 0) {
  if (typeof(a) !== 'number' || typeof(b) !== 'number') {
    return NaN;
  }
  return a + b;
}

module.exports = sum;