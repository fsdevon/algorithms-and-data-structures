import chunk from "../array-chunk";

it("chunk function is defined", () => {
  expect(chunk).toBeDefined();
});

it("chunk divides an array of 4 elements with chunk size 2", () => {
  const arr = [1, 2, 3, 4];
  const size = 2;
  const chunked = chunk(arr, size);
  expect(chunked.length).toEqual(2);
  expect(chunked[0]).toEqual([1, 2]);
  expect(chunked[1]).toEqual([3, 4]);
});

it("chunk divides an array of 4 elements with chunk size 5", () => {
  const arr = [1, 2, 3, 4];
  const size = 5;
  const chunked = chunk(arr, size);
  expect(chunked.length).toEqual(1);
  expect(chunked[0]).toEqual(arr);
});
