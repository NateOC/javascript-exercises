const palindromes = function (string) {
// all valid things
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
  
    // t o lower case and compile into array of only valid characters
    const cleanedString = string
      .toLowerCase()
      .split('')
      .filter((character) => alphanumerical.includes(character))
      .join('');
  
    // reverse to compare
    const reversedString = cleanedString.split('').reverse().join('');
  
    // true or false if it matches or not
    return cleanedString === reversedString;
  };
  
// Do not edit below this line
module.exports = palindromes;
