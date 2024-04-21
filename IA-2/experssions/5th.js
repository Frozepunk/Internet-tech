// 1) Write an array that contains first 10 prime numbers
// 2) Increase the 5th number on the array by 1
// 3) Remove the last element of the array
// 4) Add a new prime larger than any prime (in the given array) to the above array.

//1st 
let arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
console.log(arr);
// 2nd
arr[4] = arr[4] + 1;
//3rd
arr.pop();
//4th
arr.push(37);