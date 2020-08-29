// --- Directions
// Write a function that accepst a string. The function should capitalize
// the first letter of each word in the string then return the capitalized string.
// --- Examples
// capitalize('a short sentence') -> 'A Short Sentence'
// capitalize('a lazy fox') -> 'A Lazy Fox'
// capitalize('look, it is working') -> 'Look, It Is Working'

const capitalize = (str: string) => {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
};

const capitalize1 = (str: string) => {
  const words = [];
  for (const word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(" ");
};

export default capitalize;
