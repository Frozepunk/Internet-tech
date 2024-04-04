//Create a function that determines whether a given year is a leap year using if-else statements.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Test the function with some years
console.log(isLeapYear(2000)); // Output: true (2000 is a leap year)
console.log(isLeapYear(2004)); // Output: true (2004 is a leap year)
console.log(isLeapYear(1900)); // Output: false (1900 is not a leap year)

