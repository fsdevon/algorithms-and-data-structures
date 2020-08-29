import Queue from "../queue";
const q = new Queue();

it("queue function is defined", () => {
  expect(Queue).toBeDefined();
});

it("can add element to a queue", () => {
  q.add(1);
  expect(q.add).toBeDefined();
});

it("can remove element to a queue", () => {
  const data = q.remove();
  expect(data).toEqual(1);
});
