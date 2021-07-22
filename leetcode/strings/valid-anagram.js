/**
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let map = {};

  for (let i = 0; i < s.length; i++) {
    const key = s[i];
    if (key in map) {
      map[key]++;
    } else {
      map[key] = 1;
    }
  }

  let map2 = {};

  for (let j = 0; j < t.length; j++) {
    const key = t[j];
    if (key in map2) {
      map2[key]++;
    } else {
      map2[key] = 1;
    }
  }

  for (let key in map) {
    const val = map[key];
    if (key in map2) {
      const val2 = map2[key];
      if (val !== val2) return false;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
