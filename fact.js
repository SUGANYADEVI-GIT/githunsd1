function findFactorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

// Example usage
const inputNumber = 8;
const factorial = findFactorial(inputNumber);

// Using template literal for output
console.log(`✅ The factorial of ${inputNumber} is ${factorial}.`);
