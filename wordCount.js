function wordCount(a) {
  if (a === undefined) {
    return 0;
  }
  const splitBySpace = a.split(' ');
  const words = splitBySpace.filter((word) => {
   return word !== ''
  });
  return words.length;
}

module.exports = wordCount;