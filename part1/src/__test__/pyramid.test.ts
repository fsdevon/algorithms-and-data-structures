import pyramid from "../pyramid";

it("pyramid function is defined", () => {
  expect(pyramid).toBeDefined();
});

// it("pyramid with n = 2", () => {
//   const consoleSpy = jest.spyOn(console, "log");
//   pyramid(2);
//   expect(consoleSpy).toBeCalledWith(" # ");
//   expect(consoleSpy).toBeCalledWith("###");
// });

// it("pyramid with n = 3", () => {
//   const consoleSpy = jest.spyOn(console, "log");
//   pyramid(3);
//   expect(consoleSpy).toBeCalledWith("  #  ");
//   expect(consoleSpy).toBeCalledWith(" ### ");
//   expect(consoleSpy).toBeCalledWith("#####");
// });
