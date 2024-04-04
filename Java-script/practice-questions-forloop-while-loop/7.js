//Implement a function to find the largest element in an array using a for loop.
function findLargestElement(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
      return null;
    }
  
    let largest = arr[0]; // Assume the first element is the largest
  
    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i]; // Update largest if the current element is greater
      }
    }
  
    return largest;
  }
  
  // Example usage:
  const array = [10, 5, 20, 15, 30];
  console.log("Largest element in the array:", findLargestElement(array));
  