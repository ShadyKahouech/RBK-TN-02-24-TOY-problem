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

  for (var j = 0; j < string2.length; j++) {
    if (string1.includes(string2[j])) {
      res.push(string2[j]);
    }
  }
  return res;
}
