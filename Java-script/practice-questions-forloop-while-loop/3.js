//Implement a JavaScript function to find the sum of all numbers between 1 and 100 using a while loop.
function sumNumbers() {
    let sum = 0;
    let i = 1;
  
    // Using a while loop to iterate from 1 to 100
    while (i <= 100) {
      sum += i;
      i++;
    }
  
    return sum;
  }
  
  // Call the function and log the result
  console.log("Sum of numbers from 1 to 100:", sumNumbers());
  