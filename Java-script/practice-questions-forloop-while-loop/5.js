//Write a JavaScript function to check whether a given number is prime or not.
function isPrime(number) {
    // Check if the number is less than 2
    if (number < 2) {
      return false;
    }
  
    // Loop through numbers from 2 to the square root of the given number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      // If the number is divisible by any number other than 1 and itself, it's not prime
      if (number % i === 0) {
        return false;
      }
    }
  
    // If the loop completes without finding a divisor, the number is prime
    return true;
  }
  
  // Example usage:
  const num = 17;
  console.log(`${num} is prime? ${isPrime(num)}`);
  