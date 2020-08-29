import reverseInt from "../reverse-int";

it("ReverseInt function is defined", () => {
  expect(reverseInt).toBeDefined();
});

it("ReverseInt handles 0 as an input", () => {
  const n = 0;
  expect(reverseInt(n)).toEqual(n);
});

it("ReverseInt flips a positive number", () => {
  const n = 1992;
  expect(reverseInt(n)).toEqual(2991);
});

it("ReverseInt flips a nagative number", () => {
  const n = -1992;
  expect(reverseInt(n)).toEqual(-2991);
});
