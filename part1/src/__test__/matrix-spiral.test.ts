import matrix from "../matrix-spiral";

it("matrix function is defined", () => {
  expect(matrix).toBeDefined();
});

it("matrix produces a 2x2 array", () => {
  const results = matrix(2);
  expect(results).toEqual([
    [1, 2],
    [4, 3]
  ]);
});

it("matrix produces a 3x3 array", () => {
  const results = matrix(3);
  expect(results).toEqual([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
  ]);
});

it("matrix produces a 4x4 array", () => {
  const results = matrix(4);
  expect(results).toEqual([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]
  ]);
});
