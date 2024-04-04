//Write a program that prints the multiplication table of a given number using a for loop.
function printMultiplicationTable(number) {
    // Loop through numbers from 1 to 10
    for (let i = 1; i <= 10; i++) {
      // Multiply the current number by the given number
      let result = i * number;
      // Print the result
      console.log(`${number} * ${i} = ${result}`);
    }
  }
  
  // Example usage:
  const givenNumber = 7;
  console.log(`Multiplication table for ${givenNumber}:`);
  printMultiplicationTable(givenNumber);
  