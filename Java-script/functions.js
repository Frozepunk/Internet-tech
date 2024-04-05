// function reatangle(l, b){
//     let area = l*b;
//     console.log(area, perimeter);
    
// }
// reatangle(2,3)
function cuboidVolume(length, width, height) {
    return length * width * height;
}

// Example usage:
var length = 5;
var width = 3;
var height = 2;
// var volume =
console.log(cuboidVolume(length, width, height));

function sumArray(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Example usage:
var numbers = [1, 2, 3, 4, 5];
var result = sumArray(numbers);
console.log("Sum of the numbers in the array is: " + result);

function isPalindrome(number) {
    var numStr = number.toString();
    
    
    var reversedStr = numStr.split('').reverse().join('');
    
    
    return numStr === reversedStr;
}

// Example usage:
var number = 12321;
var isPal = isPalindrome(number);
console.log(number + " is a palindrome: " + isPal);

// string reverse
function reverseString(str) {
    // Split the string into an array of characters, reverse the array, then join the characters back into a string
    return str.split('').reverse().join('');
}

// Example usage:
var inputString = "hello";
var reversedString = reverseString(inputString);
console.log("Original string: " + inputString);
console.log("Reversed string: " + reversedString);

// function getDigits(number) {
//     return Array.from(String(number), Number);
// }

// // Example usage:
// var number = 12345;
// var digits = getDigits(number);
// console.log("Digits of the number", number, "are:", digits);

function Digits(number) {
    var numStr = String(number); 
    var digitsArray = []; 
    for (var i = 0; i < numStr.length; i++) {

        digitsArray.push(Number(numStr[i]));
    }
    
    return digitsArray;
}
var number = 12345;
var digits = Digits(number);
console.log("Digits of the number", number, "are:", digits);
// Create a JavaScript program that generates the Fibonacci sequence up to a certain limit using a while loop.
function generateFibonacci(limit) {
    let sequence = [];
    let a = 0;
    let b = 1;
    
    while (a <= limit) {
        sequence.push(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
    
    return sequence;
}

const limit = 100;
const fibonacciSequence = generateFibonacci(limit);
console.log("Fibonacci sequence up to", limit, ": ", fibonacciSequence);




