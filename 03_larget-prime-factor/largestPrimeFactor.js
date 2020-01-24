// check if input is number
// loop through to get prime numbers
// push prime numbers into an array
// find the largest
// return the largest

module.exports = inputNum => {
  if (typeof inputNum != "number") {
    return `Input must be a number`;
  }
  let numArr = [];
  for (let i = inputNum; i > 1; i--) {
    if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
      numArr.push(i);
    }
  }
  return numArr[0];
};
