/*
Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

You can assume the input string only contains lowercase letters.

Examples:

"civic" should return true
"ivicc" should return true
"civil" should return false
"livci" should return false
"But 'ivicc' isn't a palindrome!"
*/
//? Attention !!!
/*
If you had this thought, read the question again carefully. 
We're asking if any permutation of the string is a palindrome. 
Spend some extra time ensuring you fully understand the question before starting.
 Jumping in with a flawed understanding of the problem doesn't look good in an interview. */
function hasPalindromePermutation(theString) {
  if (theString.length === 0) return false;
  if (theString.length === 1) return true;
  if (!theString) return true;
  let map = {};

  for (let i = 0; i < theString.length; i++) {
    const char = theString[i];
    if (char in map) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  console.log('map: ' + JSON.stringify(map));

  let count = 0;

  for (let char in map) {
    if (map[char] % 2 !== 0) {
      count++;
      if (count === 2) return false;
    }
  }

  return true;
}

console.log(hasPalindromePermutation('civil'));
