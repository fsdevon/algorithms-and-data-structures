import fizzBuzz from "../fizzbuzz";

it("fizzBuzz function is defined", () => {
  expect(fizzBuzz).toBeDefined();
});

// it("Call fizzBuzz with `5` prints out 5 statements", () => {
//   const consoleSpy = jest.spyOn(console, "log");
//   fizzBuzz(5);
//   expect(consoleSpy).toHaveBeenCalledTimes(5);
// });

// it("Call fizzBuzz with 15 prints out correct valuess", () => {
//   const consoleSpy = jest.spyOn(console, "log");
//   fizzBuzz(15);
//   expect(consoleSpy).toHaveBeenCalledWith(1);
//   expect(consoleSpy).toHaveBeenCalledWith(2);
//   expect(consoleSpy).toHaveBeenCalledWith("fizz");
//   expect(consoleSpy).toHaveBeenCalledWith(4);
//   expect(consoleSpy).toHaveBeenCalledWith("buzz");
//   expect(consoleSpy).toHaveBeenCalledWith("fizz");
//   expect(consoleSpy).toHaveBeenCalledWith(7);
//   expect(consoleSpy).toHaveBeenCalledWith(8);
//   expect(consoleSpy).toHaveBeenCalledWith("fizz");
//   expect(consoleSpy).toHaveBeenCalledWith("buzz");
//   expect(consoleSpy).toHaveBeenCalledWith(11);
//   expect(consoleSpy).toHaveBeenCalledWith("fizz");
//   expect(consoleSpy).toHaveBeenCalledWith(13);
//   expect(consoleSpy).toHaveBeenCalledWith(14);
//   expect(consoleSpy).toHaveBeenCalledWith("fizzbuzz");
// });
