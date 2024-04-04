//Develop a JavaScript function that converts a numerical grade into a letter grade (A, B, C, D, F) using if-else statements.
function convertToLetterGrade(grade) {
    if (grade >= 90 && grade <= 100) {
        return "A";
    } else if (grade >= 80 && grade < 90) {
        return "B";
    } else if (grade >= 70 && grade < 80) {
        return "C";
    } else if (grade >= 60 && grade < 70) {
        return "D";
    } else if (grade >= 0 && grade < 60) {
        return "F";
    } else {
        return "Invalid grade"; // Handle invalid grades
    }
}

// Test the function with some grades
console.log(convertToLetterGrade(95));   // Output: A
console.log(convertToLetterGrade(85));   // Output: B
console.log(convertToLetterGrade(75));   // Output: C
console.log(convertToLetterGrade(65));   // Output: D
console.log(convertToLetterGrade(55));   // Output: F
console.log(convertToLetterGrade(-5));   // Output: Invalid grade
console.log(convertToLetterGrade(105));  // Output: Invalid grade
