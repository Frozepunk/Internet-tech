function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // If divisible by 4, check if it's also divisible by 100
        if (year % 100 === 0) {
            // If divisible by 100, check if it's also divisible by 400
            if (year % 400 === 0) {
                return true; // Divisible by 400, so it's a leap year
            } else {
                return false; // Not divisible by 400, so it's not a leap year
            }
        } else {
            return true; // Divisible by 4 but not by 100, so it's a leap year
        }
    } else {
        return false; // Not divisible by 4, so it's not a leap year
    }
}

// Test the function with some example years
console.log(isLeapYear(2020)); // Output: true
console.log(isLeapYear(2021)); // Output: false
console.log(isLeapYear(2000)); // Output: true
console.log(isLeapYear(1900)); // Output: false
