// --- Directions
// Given a string, return true if the string is a palindrome or false if it is not.
// Palindromes are strings that form the same word if it is reversed. *Do* inclue spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
// palindrome('abba') === true
// palindrome('abcd') === false

const palindrome = (str: string) => {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
};

const palindrome1 = (str: string) => {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};

export default palindrome;
