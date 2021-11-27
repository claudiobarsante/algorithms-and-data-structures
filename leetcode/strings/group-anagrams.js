// 49. Group Anagrams
// Medium

// 7435

// 269

// Add to List

// Share
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters

// -- Tip: good explanation at https://javascript.plainenglish.io/the-algo-alcove-group-anagrams-7b2ae5a7f5fc

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 0) return [['']];
  if (strs.length === 1) return new Array(strs);

  let output = {};

  for (let i = 0; i < strs.length; i++) {
    const currentString = strs[i];
    // -- with spread operator it turns 'eat' into ['e', 'a', 't'], then you sort and finally transform on a string again with join('')
    const sortedString = [...currentString].sort().join('');

    if (!output[sortedString]) output[sortedString] = [];

    output[sortedString].push(currentString);
  }
  // --output { aet: [ 'eat', 'tea', 'ate' ], ant: [ 'tan', 'nat' ], abt: [ 'bat' ] }
  // -- the Object.values will return a new array with all the values, not the keys
  // The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop
  return Object.values(output);
};
