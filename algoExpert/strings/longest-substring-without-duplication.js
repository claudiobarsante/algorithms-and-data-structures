//Very similar to Leetcode but instead of return max o characters
//returns the longest substring

function longestSubstringWithoutDuplication(s) {
	if (s.length <= 1) return s;

	let max = -Infinity;
	let longest = '';

	let set = new Set();

	let acum = 0;
	let prev = '';

	let i = 0;
	let last = 0;

	while (i < s.length) {
		const char = s[i];
		if (!set.has(char)) {
			set.add(char);
			prev += char;
			acum++;
			i++;
		} else {
			if (acum > max) {
				max = acum;
				longest = prev;
			}
			set.clear();
			acum = 0;
			prev = '';
			last++;
			i = last;
		}
	}

	let result = '';

	if (longest.length > prev.length) {
		result = longest;
	} else {
		result = prev;
	}
	return result;
}

console.log(longestSubstringWithoutDuplication('clementisacap'));
//! Longest substring without duplication - Hard
//Write a function that takes in a string an returns its longest substring without duplicate characters.
//You can assume that there will only be one longest substring without duplication.
// Input string "clementisacap" -> output "mentisac"
