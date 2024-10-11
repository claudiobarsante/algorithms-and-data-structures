/*
Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.

*/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let center = 1;
  let left = 0;
  let right = 0;

  let longest = s[0];
  let longestSize = 1;

  function expand(left, right, length) {
    while (left >= 0 && right < length) {
      if (s[left] === s[right]) {
        const palindrome = s.slice(left, right + 1);
        if (palindrome.length > longestSize) {
          longest = palindrome;
          longestSize = palindrome.length;
        }
        left--;
        right++;
      } else {
        break;
      }
    }
  }

  while (center < s.length) {
    const centerChar = s[center];
    // -- expand from the center
    left = center - 1;
    right = center + 1;
    // -- odd
    expand(left, right, s.length);

    // -- check even
    left = center - 1;
    right = center;
    expand(left, right, s.length);
    center++;
  }

  return longest;
};
