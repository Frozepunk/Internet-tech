//Create a JavaScript function that calculates the sum of digits of a given number using a while loop.
function sumOfDigits(number) {
    let sum = 0; // Initialize the sum variable
  
    // Iterate through each digit of the number
    while (number > 0) {
      // Extract the last digit of the number using modulo operator
      const digit = number % 10;
      sum += digit; // Add the digit to the sum
      // Remove the last digit from the number
      number = Math.floor(number / 10);
    }
  
    return sum; // Return the sum of digits
  }
  
  // Example usage:
  const num = 12345;
  console.log("Sum of digits of", num, "is:", sumOfDigits(num));
  