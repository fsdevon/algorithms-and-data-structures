import capitalize from "../capitalize-string";

it("capitalize function is defined", () => {
  expect(capitalize).toBeDefined();
});

it("capitalize the first letter of every word in a sentence", () => {
  expect(capitalize("a short sentence")).toEqual("A Short Sentence");
});

it("capitalize the first letter", () => {
  expect(capitalize("hello")).toEqual("Hello");
});
