function findMaxNumber(numbers) {
  let max = numbers[0];
  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

// Example usage
const numberArray = [23, 89, 12, 44, 95, 37];
const maxValue = findMaxNumber(numberArray);

// Using template literal
console.log(` The maximum number in [${numberArray}] is ${maxValue}.`);
