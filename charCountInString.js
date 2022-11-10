function charCountInString(char, str) {
  if (char === undefined) {
    return char;
  }

  if (str === undefined) {
    return 0;
  }

  const split = str.split('');
  const charOccur = split.filter((val) => {
    return val == char;
  });

  return charOccur.length;
}

module.exports = charCountInString;