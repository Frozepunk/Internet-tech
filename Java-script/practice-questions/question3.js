//Implement a JavaScript function that calculates the grade of a student based on their score using if-else statements.
function calculateGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80 && score < 90) {
        return "B";
    } else if (score >= 70 && score < 80) {
        return "C";
    } else if (score >= 60 && score < 70) {
        return "D";
    } else if (score >= 0 && score < 60) {
        return "F";
    } else {
        return "Invalid score";
    }
}

// Test the function with some scores
console.log(calculateGrade(95));   // Output: A
console.log(calculateGrade(85));   // Output: B
console.log(calculateGrade(75));   // Output: C
console.log(calculateGrade(65));   // Output: D
console.log(calculateGrade(55));   // Output: F
console.log(calculateGrade(-5));   // Output: Invalid score
console.log(calculateGrade(105));  // Output: Invalid score
