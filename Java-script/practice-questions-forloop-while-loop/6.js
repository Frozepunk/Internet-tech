//Create a JavaScript program that generates the Fibonacci sequence up to a certain limit using a while loop.
function generateFibonacci(limit) {
    let fibonacciSequence = [0, 1]; // Initialize the Fibonacci sequence array with the first two numbers
  
    // Generate Fibonacci sequence using a while loop
    while (fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2] <= limit) {
      let nextFibonacciNumber = fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2];
      fibonacciSequence.push(nextFibonacciNumber);
    }
  
    return fibonacciSequence;
  }
  
  // Example usage:
  const limit = 100; // Define the limit up to which Fibonacci sequence will be generated
  console.log("Fibonacci sequence up to", limit, ":");
  console.log(generateFibonacci(limit));
  