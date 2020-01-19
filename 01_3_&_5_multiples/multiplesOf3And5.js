const arrSum = (acc, currentValue) => acc + currentValue;

/**
 * @desc 
 */
module.exports = numberInput => { 
  // checks if input is number
  if (typeof numberInput != 'number') {
    return `Input must be a number!`;
  }

  let numArray = [];
  let numCounter=1

  //checks for multiples of 3 & 5
  while (numCounter < numberInput) {
    if (numCounter % 15 === 0 ||
      numCounter % 5 === 0 ||
      numCounter % 3 === 0) {
      numArray.push(numCounter);
    }
    numCounter++;
  }

  // sum all array element
  let result = numArray.reduce(arrSum, 0);

  // return the result
  return result;
};
