//Write a program that counts the number of vowels in a given string using a for loop.
function countVowels(str) {
    const vowels = "aeiouAEIOU"; // Define a string containing all vowels
    let vowelCount = 0; // Initialize the vowel count
  
    // Iterate through each character of the string
    for (let i = 0; i < str.length; i++) {
      // Check if the current character is a vowel
      if (vowels.includes(str[i])) {
        vowelCount++; // Increment the vowel count if it's a vowel
      }
    }
  
    return vowelCount; // Return the total count of vowels
  }
  
  // Example usage:
  const inputString = "Hello World";
  console.log("Number of vowels in the string:", countVowels(inputString));
  