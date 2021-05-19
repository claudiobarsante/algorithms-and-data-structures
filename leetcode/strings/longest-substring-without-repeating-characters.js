//? using two pointers - optimal
/*
Runtime: 136 ms, faster than 40.00% of JavaScript online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 44.3 MB, less than 55.41% of JavaScript online submissions for Longest Substring Without Repeating Characters.

const lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;
    
    const seen = {};
    let left = 0, longest = 0;
    
    for(let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        const previouslySeenChar = seen[currentChar];
        
        if(previouslySeenChar >= left) {
          left = previouslySeenChar + 1;
        }
        
        seen[currentChar] = right;
        
        longest = Math.max(longest, right - left + 1);
    }
    
    return longest;
};

console.log(lengthOfLongestSubstring(string));
*/
/*
Runtime: 328 ms, faster than 20.71% of JavaScript online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 44.3 MB, less than 55.41% of JavaScript online submissions for Longest Substring Without Repeating Characters.
*/

const lengthOfLongestSubstring = s => {
	if (s.length <= 1) return s.length;

	let max = -Infinity;
	let set = new Set();
	let i = 0;
	let last = 0;

	while (i < s.length) {
		if (!set.has(s[i])) {
			set.add(s[i]);
			i++;
		} else {
			max = Math.max(max, set.size);
			set.clear();
			last++;
			i = last;
		}
	}
	max = Math.max(max, set.size);

	return max;
};

console.log(lengthOfLongestSubstring('bbbbb'));

/*
3. Longest Substring Without Repeating Characters
Medium


Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/
