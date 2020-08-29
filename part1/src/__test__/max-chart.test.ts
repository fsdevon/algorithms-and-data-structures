import maxChar from "../max-char";

it("maxChar function is defined", () => {
  expect(maxChar).toBeDefined();
});

it("Finds the most frequently used char", () => {
  const str = "abccccccd";
  expect(maxChar(str)).toEqual("c");
});

it("Works with numbers in the string", () => {
  const str = "apple 1231111";
  expect(maxChar(str)).toEqual("1");
});
