// --- Directions
// Wrie a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character. Make sure the pyramid has spaces on both the left and right hand sides
// --- Examples
// pyramid(1)
//    '#'
// pyramid(2)
//    ' # '
//    '###'
// pyramid(3)
//    '  #  '
//    ' ### '
//    '#####'

const pyramid = (n: number, row: number = 0, level: string = "") => {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    // tslint:disable-next-line: no-console
    console.log(level);
    pyramid(n, row + 1);
    return;
  }
  const midpoint = Math.floor((2 * n - 1) / 2);
  let add = "";
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, level + add);
};

const pyramid1 = (n: number) => {
  const midpoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let level = "";
    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    // tslint:disable-next-line: no-console
    console.log(level);
  }
};

export default pyramid;
