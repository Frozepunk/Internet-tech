//Implement a program that checks if a given string is a palindrome using a for loop.
function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Use two pointers approach with a for loop to check if the string is a palindrome
    for (let i = 0; i < cleanStr.length / 2; i++) {
      // Compare characters from the beginning and end of the string
      if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
        return false; // If characters don't match, it's not a palindrome
      }
    }
    
    return true; // If all characters match, it's a palindrome
  }
  
  // Example usage:
  const inputString = "A man, a plan, a canal, Panama";
  console.log(`Is "${inputString}" a palindrome?`, isPalindrome(inputString));
  