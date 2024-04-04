//Create a function that calculates the factorial of a given number using a for loop.
function factorial(number) {
  // If the number is 0 or 1, factorial is 1
  if (number === 0 || number === 1) {
    return 1;
  }

  // Initialize the result variable
  let result = 1;

  // Loop through numbers from 2 to the given number
  for (let i = 2; i <= number; i++) {
    // Multiply the result by the current number
    result *= i;
  }

  // Return the factorial
  return result;
}

// Example usage:
const num = 5;
console.log(`Factorial of ${num} is: ${factorial(num)}`);
