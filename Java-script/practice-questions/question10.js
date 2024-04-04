// Implement a function that calculates the area of a shape (circle, square, triangle) based on user input and using a switch statement to determine the shape type.
function calculateArea(shape, ...params) {
    let area;
    switch (shape.toLowerCase()) {
        case 'circle':
            const radius = params[0];
            area = Math.PI * Math.pow(radius, 2);
            break;
        case 'square':
            const side = params[0];
            area = Math.pow(side, 2);
            break;
        case 'triangle':
            const base = params[0];
            const height = params[1];
            area = 0.5 * base * height;
            break;
        default:
            area = "Invalid shape";
    }
    return area;
}

// Test the function with different shapes and parameters
console.log("Area of a circle with radius 5:", calculateArea('circle', 5)); // Output: Area of a circle with radius 5: 78.53981633974483
console.log("Area of a square with side 4:", calculateArea('square', 4));  // Output: Area of a square with side 4: 16
console.log("Area of a triangle with base 6 and height 8:", calculateArea('triangle', 6, 8)); // Output: Area of a triangle with base 6 and height 8: 24
console.log("Area of a rectangle:", calculateArea('rectangle', 6, 8));  // Output: Invalid shape
