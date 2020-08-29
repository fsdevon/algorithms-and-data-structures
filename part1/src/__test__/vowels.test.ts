import vowels from "../vowel";

it("vowels function is defined", () => {
  expect(vowels).toBeDefined();
});

it("returns the number of vowels used", () => {
  expect(vowels("Hi There!")).toEqual(3);
});

it("returns the number of vowels used", () => {
  expect(vowels("Why do you ask?")).toEqual(4);
});

it("returns the number of vowels used", () => {
  expect(vowels("Why?")).toEqual(0);
});
