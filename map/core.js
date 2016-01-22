function multiplyBy10 (array) {
  return array.map(function(num) {
    return num * 10;
  });
}

function shiftRight (array) {
  return array.map(function(element, index, array) {
    if (index === 0) {
      return array[array.length - 1];
    } else {
      return array[index - 1];
    }
  });
}

function onlyVowels (array) {
  return (array.map(function(str) {
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
      if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'y') {
      newStr += str[i];
    }
  }
  return newStr;
 }));
}

function doubleMatrix (array) {
  return array.map(function(array) {
    return array.map(function(num) {
      return num * 2;
    });
  });
}

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};