import reverseString from "../reverse-string";

it("Reverse function is defined", () => {
  expect(reverseString).toBeDefined();
});

it("Reverse reverses a string", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

it("Reverse reverses a string", () => {
  expect(reverseString("github")).toEqual("buhtig");
});
