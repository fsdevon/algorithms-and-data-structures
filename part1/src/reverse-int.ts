// --- Directions
// Given an integer, return an integer that is the reverse ordering of numbers
// --- Examples
// reverseInt(15) === 51
// reverseInt(1992) === 2991
// reverseInt(500) === 5
// reverseInt(-21) === -12
// reverseInt(-10) === -1

const reverseInt = (n: number) => {
  const reversed: string = n.toString().split("").reverse().join("");
  return parseInt(reversed, undefined) * Math.sign(n);
};

export default reverseInt;
