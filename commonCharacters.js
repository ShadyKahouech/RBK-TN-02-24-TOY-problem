/**

 *

 * Write a function `f(a, b)` which takes two strings as arguments and returns a

 * string containing the characters found in both strings (without duplication), in the

 * order that they appeared in `a`. Remember to skip spaces and characters you

 * have already encountered!

 *

 * Example: commonCharacters('acexivou', 'aegihobu')

 * Returns: 'aeiou'

 * Should return null or empty string of there is no commonCharacters

 **/

// function findCaracter(string1, string2) {
//   var res = [];
//   var exist = {};
//   for (var i = 0; string1.length; i++) {
//     var char = string1[i];
//     if (char !== "" && string2.includes(char) && !exist[char]) {
//       exist[char] = true;
//       res.push(char);
//     }
//   }
//   return res.join("");
// }

/**

 *

 * Write a function `f(a, b)` which takes two strings as arguments and returns a

 * string containing the characters found in both strings (without duplication), in the

 * order that they appeared in `a`. Remember to skip spaces and characters you

 * have already encountered!

 *

 * Example: commonCharacters('acexivou', 'aegihobu')

 * Returns: 'aeiou'

 * Should return null or empty string of there is no commonCharacters

 **/

function findCaracter(string1, string2) {
  var res = [];
  var exist = {};
  for (var i = 0; i < string1.lenght; i++) {
    var char = string1[i];
    if (char !== " " && string2.includes(char) && !exist[char]) {
      exist[char] = true;
      res.push(char);
    }
  }

  return res.join("");
}

function findCaracter(string1, string2) {
  var res = "";
  for (var i = 0; i < string1.length; i++) {
    for (var j = 0; j < string2.length; j++) {
      if (
        string1[i] === string2[j] &&
        !res.includes(string1[i]) &&
        string1[i] !== " "
      ) {
        res += string1[i];
      }
    }
  }
  return res || null;
}
