/*
Success
Details 
Runtime: 80 ms, faster than 73.99% of JavaScript online submissions for Backspace String Compare.
Memory Usage: 38.3 MB, less than 97.88% of JavaScript online submissions for Backspace String Compare. */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let sPointer = s.length - 1;
  let tPointer = t.length - 1;

  while (sPointer >= 0 || tPointer >= 0) {
    if (s[sPointer] === '#' || t[tPointer] === '#') {
      if (s[sPointer] === '#') {
        let backCount = 2; //you have to skip the next character and position on the immediately following character

        while (backCount > 0) {
          sPointer--;
          backCount--;
          if (s[sPointer] === '#') backCount += 2; //if it's '#' and again 2 to backCount
        }
      }

      if (t[tPointer] === '#') {
        let backCount = 2;

        while (backCount > 0) {
          tPointer--;
          backCount--;
          if (t[tPointer] === '#') backCount += 2;
        }
      }
    } else {
      if (s[sPointer] !== t[tPointer]) {
        return false;
      } else {
        sPointer--;
        tPointer--;
      }
    }
  }

  return true;
};

console.log(backspaceCompare('ab#c', 'ad#c'));
/*
844. Backspace String Compare
Easy

2497

116

Add to List

Share
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

 

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a##c", t = "#a#c"
Output: true
Explanation: Both s and t become "c".
Example 4:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 

Constraints:

1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.
 

Follow up: Can you solve it in O(n) time and O(1) space?
*/
