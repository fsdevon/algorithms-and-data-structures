import steps from "../printing-step";

it("steps function is defined", () => {
  expect(steps).toBeDefined();
});

// it("steps with n = 2", () => {
//   const consoleSpy = jest.spyOn(console, "log");
//   steps(2);
//   expect(consoleSpy).toBeCalledTimes(2);
//   expect(consoleSpy).toBeCalledWith("# ");
//   expect(consoleSpy).toBeCalledWith("##");
// });
