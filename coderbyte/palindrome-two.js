/**
 * Palindrome Two
Have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true.
Examples
Input: "Noel - sees Leon"
Output: true
Input: "A war at Tarawa!"
Output: true
 */

function PalindromeTwo(str) {
  // code goes here
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // -- edges
  if (str.length === 0) return true;
  if (str.length === 1) {
    const char = str[0].toLowerCase();
    if (alphabet.includes(char)) return 'true';
    return 'false';
  }
  // --
  let cleanedString = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (alphabet.includes(char)) cleanedString += char;
  }

  cleanedString.trim();

  let left = 0;
  let right = cleanedString.length - 1;

  while (left < right) {
    if (cleanedString[left] !== cleanedString[right]) return 'false';
    left++;
    right--;
  }

  return 'true';
}

// keep this function call here
console.log(PalindromeTwo(readline()));
