/*
Runtime: 76 ms, faster than 74.89% of JavaScript online submissions for Length of Last Word.
Memory Usage: 38.6 MB, less than 45.84% of JavaScript online submissions for Length of Last Word.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	if (s === ' ') return 0;
	if (s.length <= 1) return s.length;

	let index = s.length - 1;

	let count = 0;

	while (index >= 0) {
		if (s[index] === ' ') {
			if (count > 0) return count;
		} else {
			count++;
		}

		index--;
	}

	return count;
};

console.log(lengthOfLastWord('Hello World'));

//? Consider edge cases : 'a ' or 'a b  '

/*
58. Length of Last Word
Easy

1111

3191

Add to List

Share
Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

A word is a maximal substring consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Example 2:

Input: s = " "
Output: 0
 

Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
*/
