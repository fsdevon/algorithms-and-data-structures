// --- Directions
// Given a string, return a new string with the reversed order of characters
// --- Examples
// reverse('apple') === 'elppa'
// reverse('hello') === 'olleh'

// Solution #1
const reverseString1 = (str: string) => {
  return str.split("").reverse().join("");
};

// Solution #2
const reverseString2 = (str: string) => {
  let reversed = "";
  for (const character of str) {
    reversed = character + reversed;
  }
  return reversed;
};

const reverseString = (str: string) => {
  return str.split("").reduce((rev, char) => char + rev, "");
};

export default reverseString;
