//Implement a JavaScript function that calculates the grade of a student based on their score using if-else statements.
function calculateGrade(score) {
    let grade;

    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    return grade;
}

// Test the function with some example scores
console.log(calculateGrade(95)); // Output: A
console.log(calculateGrade(82)); // Output: B
console.log(calculateGrade(75)); // Output: C
console.log(calculateGrade(63)); // Output: D
console.log(calculateGrade(50)); // Output: F
