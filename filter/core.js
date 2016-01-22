function onlyEven (array) {
  return array.filter(function(num) {
    return (num % 2 === 0);
  });
}

function onlyOneWord (array) {
  return array.filter(function(str) {
    return !str.includes(' ');
  });
}

function positiveRowsOnly (array) {
  return array.filter(function (arr) {
    return arr.every(function(num) {
      return (num > 0);
    });
  });
}

function allSameVowels (array) {
  // your code here
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};