array = ['average', 'exceptional', 'amazing'];

// string = 'average';

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

console.log(onlyVowels(array));
//
// function onlyVowels (str) {
//   var newStr = '';
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'y') {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }

// onlyVowels(string);