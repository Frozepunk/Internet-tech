let x = 10;

switch (true) {
    case x % 2 === 0:
        console.log("X is an even number");
        break;
    case x % 3 === 0 && x !== 3:
        console.log("X is an odd number");
        break;
    default:
        console.log("X is a prime number");
}
