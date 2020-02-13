module.exports = inputNum => {
  if (typeof inputNum != "number") {
    return `Input must be a number`;
  }
  let numArr = [];
  if (
    inputNum === 2 ||
    inputNum === 3 ||
    inputNum === 5 ||
    inputNum === 7 ||
    inputNum === 11 ||
    inputNum === 13
  ) {
    numArr.push(inputNum);
  }
  const root = Math.floor(Math.sqrt(inputNum));

  /**
   *
   * @param {number} num
   */
  const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  };

  for (let i = 2; i <= root; i++) {
    if (inputNum % i === 0) {
      if (isPrime(i)) {
        numArr.push(i);
      }
    }
  }

  const biggestFactor = numArr.pop();

  return biggestFactor;
};
