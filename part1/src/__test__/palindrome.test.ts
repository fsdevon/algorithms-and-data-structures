import palindrome from "../palindrome";

it("Palindrome function is defined", () => {
  expect(palindrome).toBeDefined();
});

it('"aba" is a palindrome', () => {
  expect(palindrome("aba")).toEqual(true);
});

it('" aba" is not a palindrome', () => {
  expect(palindrome(" aba")).toEqual(false);
});

it('"aba " is not a palindrome', () => {
  expect(palindrome("aba ")).toEqual(false);
});

it('"greetings" is not a palindrome', () => {
  expect(palindrome("greetings")).toEqual(false);
});

it('"1000001" is a palindrome', () => {
  expect(palindrome("1000001")).toEqual(true);
});
