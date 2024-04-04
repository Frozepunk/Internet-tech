//Write a JavaScript program that checks if a number is even or odd using if-else statements.
// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Test the function with some numbers
console.log(checkEvenOrOdd(10)); // Output: Even
console.log(checkEvenOrOdd(7));  // Output: Odd
console.log(checkEvenOrOdd(0));  // Output: Even (0 is even)
