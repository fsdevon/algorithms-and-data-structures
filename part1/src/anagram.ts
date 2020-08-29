// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters in the same quantity.
// Only consider characters, not spaces or punctuation. Consider capital letters to be the same as lower case
// --- Examples
// anagrams('rail safety', 'fairy tales') -> True
// anagrams('RAIL! SAFETY!', 'fairy tales') -> True
// anagrams('Hi there', 'Bey there') -> False

const anagrams = (strA: string, strB: string) => {
  return cleanString(strA) === cleanString(strB);
};

const anagrams1 = (strA: string, strB: string) => {
  const aCharMap = buildCharMap(strA);
  const bCharMap = buildCharMap(strB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (const char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
};

const cleanString = (str: string) => {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
};

const buildCharMap = (str: string) => {
  const charMap: { [key: string]: number } = {};
  for (const char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
};

export default anagrams;
