/**
 * @desc adds number
 * @param {number} acc 
 * @param {number} currentValue 
 */
const numSum = (acc, currentValue) => acc + currentValue;

/**
 * @desc using while loop to generate fibonacci sequence
 * @param {number} num 
 */
const fibonacciSeqArr = inputNum => {
  let fibSeqArray = [];
  let numCounter = 1;
  while (numCounter <= inputNum) {
    if (numCounter <= 2) {
      fibSeqArray.push(numCounter);
    } else {
      fibSeqArray.push(fibSeqArray[numCounter - 2] + fibSeqArray[numCounter - 3]);
    }
    numCounter++;
  }
  return fibSeqArray
}

/**
 * @desc generates a fibonacci sequence in an array
 * @param {number} numInput
 */
const genFibNums = numInput => {
  // checks if input is number
  if (typeof numInput != 'number') {
    return `Input must be a number!`;
  }
  
  // checks if input is greater than 0
  if (numInput <= 0) {
    return `Number must be greater than zero(0);`
  }
  return fibonacciSeqArr(numInput);
}

/**
 * @desc returns an array of even numbers
 * @param {array} numArr 
 */
const getEvenNums = numArr => {
  return numArr.filter(numElement => numElement % 2 === 0);
}

/**
 * @desc
 */
module.exports = numInput => {
  const numArr = genFibNums(numInput);
  const evenNumberArray = getEvenNums(numArr);
  return evenNumberArray.reduce(numSum, 0);
};
