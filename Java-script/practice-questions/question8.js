//Create a function that determines the discount percentage based on the total purchase amount using a switch statement (e.g., 0-100: no discount, 101-500: 10% discount, etc.).
function calculateDiscount(totalPurchaseAmount) {
    let discountPercentage;

    switch (true) {
        case totalPurchaseAmount <= 100:
            discountPercentage = 0;
            break;
        case totalPurchaseAmount <= 500:
            discountPercentage = 10;
            break;
        case totalPurchaseAmount <= 1000:
            discountPercentage = 20;
            break;
        default:
            discountPercentage = 30;
    }

    return discountPercentage;
}

// Test the function with different total purchase amounts
console.log("Discount percentage for $50: " + calculateDiscount(50) + "%");
console.log("Discount percentage for $200: " + calculateDiscount(200) + "%");
console.log("Discount percentage for $700: " + calculateDiscount(700) + "%");
console.log("Discount percentage for $1500: " + calculateDiscount(1500) + "%");
