/*
. Find All Anagrams in a String
Solved
Medium
Topics
Companies
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 

Constraints:

1 <= s.length, p.length <= 3 * 104
s and p consist of lowercase English letters.

*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const output = [];
  const targetMap = {}; // Store the frequency of characters in p

  // Populate targetMap with character frequencies of p
  for (const char of p) {
    targetMap[char] = (targetMap[char] || 0) + 1;
  }

  let left = 0,
    right = 0; // Sliding window pointers
  let count = Object.keys(targetMap).length; // Number of unique characters to match

  // Sliding window approach
  while (right < s.length) {
    if (targetMap[s[right]] !== undefined) {
      // Decrease frequency of current character in targetMap
      targetMap[s[right]]--;
      // If the frequency becomes 0, we have a complete match for this character
      if (targetMap[s[right]] === 0) {
        count--;
      }
    }

    right++;

    // When count becomes 0, an anagram is found
    if (count === 0) {
      output.push(left);
    }

    // If the window size equals p's length, move left pointer
    if (right - left === p.length) {
      if (targetMap[s[left]] !== undefined) {
        // Increase frequency of character at left pointer, because it's out of the window
        targetMap[s[left]]++;
        // If the frequency becomes 1, we need to match this character again
        if (targetMap[s[left]] === 1) {
          count++;
        }
      }
      left++;
    }
  }

  return output;
};
