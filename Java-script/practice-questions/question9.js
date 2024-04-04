//Write a JavaScript program that converts a given month number into its corresponding name (e.g., 1 for January) using a switch statement.
function getMonthName(monthNumber) {
    let monthName;

    switch (monthNumber) {
        case 1:
            monthName = "January";
            break;
        case 2:
            monthName = "February";
            break;
        case 3:
            monthName = "March";
            break;
        case 4:
            monthName = "April";
            break;
        case 5:
            monthName = "May";
            break;
        case 6:
            monthName = "June";
            break;
        case 7:
            monthName = "July";
            break;
        case 8:
            monthName = "August";
            break;
        case 9:
            monthName = "September";
            break;
        case 10:
            monthName = "October";
            break;
        case 11:
            monthName = "November";
            break;
        case 12:
            monthName = "December";
            break;
        default:
            monthName = "Invalid month number";
    }

    return monthName;
}

// Test the function with different month numbers
console.log(getMonthName(1));   // Output: January
console.log(getMonthName(6));   // Output: June
console.log(getMonthName(12));  // Output: December
console.log(getMonthName(13));  // Output: Invalid month number
