import anagrams from "../anagram";

it("anagrams function is defined", () => {
  expect(anagrams).toBeDefined();
});

it('"hello" ís an anagram of "llohe"', () => {
  expect(anagrams("hello", "llohe")).toEqual(true);
});

it('"Whoa! Hi!" ís an anagram of "Hi! Whoa!"', () => {
  expect(anagrams("Whoa! Hi!", "Hi! Whoa!")).toEqual(true);
});

it('"One One" ís not an anagram of "Two two two"', () => {
  expect(anagrams("One One", "Two two two")).toEqual(false);
});
