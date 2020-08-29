import fib from "../fibonacci";

it("fib function is defined", () => {
  expect(fib).toBeDefined();
});

it("calculates correct fib value for 1", () => {
  expect(fib(1)).toEqual(1);
});

it("calculates correct fib value for 2", () => {
  expect(fib(2)).toEqual(1);
});

it("calculates correct fib value for 3", () => {
  expect(fib(3)).toEqual(2);
});

it("calculates correct fib value for 4", () => {
  expect(fib(4)).toEqual(3);
});

it("calculates correct fib value for 40", () => {
  expect(fib(40)).toEqual(102334155);
});
