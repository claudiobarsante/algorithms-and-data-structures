const isPalindrome = function (s) {
	//? if use a regex to validate the string
	/* time:O(n) and space O(1)
    Runtime: 92 ms, faster than 81.32% of JavaScript online submissions for Valid Palindrome.
    Memory Usage: 40.4 MB, less than 98.06% of JavaScript online submissions for Valid Palindrome.*/
	/*
     s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    --> initialize left/right pointers at start and end of string respectively
    let left = 0; right = s.length - 1;
    
    --> loop through string characters while comparing them, then move the pointers closer to the center
    while(left < right) {
        if(s[left] !== s[right]) {
            return false
        }
        
        left++;
        right--;
    }    
    return true;
    */

	//? using a function to remove invalid characters
	/* time:O(n) and space O(n)
    Runtime: 96 ms, faster than 63.80% of JavaScript online submissions for Valid Palindrome.
    Memory Usage: 44.5 MB, less than 31.17% of JavaScript online submissions for Valid Palindrome.*/

	const valid = 'abcdefghijklmnopqrstuvwxyz0123456789';

	let lower = '';

	for (let i = 0; i < s.length; i++) {
		const char = s[i].toLowerCase();
		if (valid.indexOf(char) >= 0) {
			lower += char;
		}
	}

	if (lower.length <= 1) return true;

	let left = 0;
	right = lower.length - 1;

	// loop through string characters while comparing them, then move the pointers closer to the center
	while (left < right) {
		if (lower[left] !== lower[right]) {
			return false;
		}

		left++;
		right--;
	}

	return true;
};

/*
125. Valid Palindrome
Easy

Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases. 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/
