//Implement a switch statement in JavaScript to determine the name of the day based on its number representation (1 for Monday, 2 for Tuesday, etc.).
function getDayName(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day number";
    }

    return dayName;
}

// Test the function with different day numbers
console.log(getDayName(1));  // Output: Monday
console.log(getDayName(3));  // Output: Wednesday
console.log(getDayName(6));  // Output: Saturday
console.log(getDayName(8));  // Output: Invalid day number
