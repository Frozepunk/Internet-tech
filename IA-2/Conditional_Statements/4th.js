// Write a program that determines the type of a triangle (equilateral, isosceles, or scalene) based on the lengths of its sides using if-else statements.
function triangleType(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
        return "Equilateral"; // All sides are equal
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        return "Isosceles"; // At least two sides are equal
    } else {
        return "Scalene"; // No sides are equal
    }
}

// Test the function with some example side lengths
console.log(triangleType(5, 5, 5)); // Output: Equilateral
console.log(triangleType(3, 4, 4)); // Output: Isosceles
console.log(triangleType(3, 4, 5)); // Output: Scalene
