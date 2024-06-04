/**
 *  Given an arbitrary input string, return the first nonrepeated character in
 *  the string. For example:
 *  firstNonRepeatedCharacter('ABA'); // => 'B'
 *  firstNonRepeatedCharacter('AACBDB'); // => 'C'
 *  Should return null or empty string of there is no repeated characters
 *
 * @function firstNonRepeatedCharacter
 * @param {String} string
 * @returns {String}
 */

function firstNonRepeatedCharacter(string) {
  return string
    .split("")
    .filter(function (character, index, string) {
      return string.indexOf(character) === string.lastIndexOf(character);
    })
    .shift();
}

function firstNonRepeatedCharacter(string) {
  var str = string.split("");
  var char = str[0];
  for (var i = 0; i < str.length; i++) {
    for (var j = 1; j < str.length; j++) {
      if (i !== j && str[j] === str[i]) {
        char = str[i++];
      }
    }
  }
  return char;
}
