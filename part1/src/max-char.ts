// --- Directions
// Given a string, return the character that is most commonly used in the string.
// --- Examples
// maxChar('abccccccd') === 'c'
// maxChar('apple 1231111') === '1'

const maxChar = (str: string) => {
  const charMap: { [key: string]: number } = {};
  let max = 0;
  let character: string = "";

  for (const char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }

    if (charMap[char] > max) {
      max = charMap[char];
      character = char;
    }
  }

  return character;
};

export default maxChar;
