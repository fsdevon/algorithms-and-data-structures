// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character. Make sure the step has spaces on the right hand side.
// --- Example
// steps(2)
//    '# '
//    '##'
// steps(3)
//    '#  '
//    '## '
//    '###'
// steps(4)
//    '#   '
//    '##  '
//    '### '
//    '####'

const steps = (n: number, row: number = 0, stair: string = "") => {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    // tslint:disable-next-line: no-console
    console.log(stair);
    steps(n, row + 1);
    return;
  }

  const add = stair.length <= row ? "#" : " ";
  steps(n, row, stair + add);
};

const steps1 = (n: number) => {
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    // tslint:disable-next-line: no-console
    console.log(stair);
  }
};

export default steps;
