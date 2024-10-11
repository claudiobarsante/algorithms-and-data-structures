/*
Accepted

Runtime: 88 ms, faster than 96.50% of JavaScript online submissions for Valid Palindrome II.
Memory Usage: 45.9 MB, less than 77.11% of JavaScript online submissions for Valid Palindrome II.
Next challenges:
*/
const validPalindrome = function (s) {
  const isPalindrome = (s, left, right) => {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      } else {
        left++;
        right--;
      }
    }
    return true;
  };

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      //try first moving one char to the right and then try moving one char to the left
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    } else {
      left++;
      right--;
    }
  }

  return true;
};

console.log(validPalindrome('aba'));

//? Tests cases
// "racecar"  - already a plalindrome returs true
// "abccdba" - true
// "abcdefdba" - false
// "" true
// "a" true
// "ab" - any string with two chars returns true, because if one char is removed yield a string with one char that's a palindrome

/*
680. Valid Palindrome II
Easy

2595

168

Add to List

Share
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
*/
