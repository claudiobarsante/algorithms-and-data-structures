/**
 * Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
 
Consider tests cases:
s="0P" ;false
s=".," ; false

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';

  if (s.length === 1) return true;

  const filtered = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();
    if (alphabet.indexOf(char) >= 0) filtered.push(char);
  }

  if (filtered.length === 0) return true;

  let left = 0;
  let right = filtered.length - 1;

  while (left < right) {
    const charAtLeft = filtered[left];
    const charAtRight = filtered[right];

    if (charAtLeft === charAtRight) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};
