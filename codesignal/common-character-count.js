/**
 * Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
solution(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s1

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s1.length < 15.

[input] string s2

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s2.length < 15.

[output] integer
 */
function solution(s1, s2) {
  let seen1 = {};
  let seen2 = {};

  let commom = 0;

  for (let i = 0; i < s1.length; i++) {
    const key = s1[i];
    if (key in seen1) {
      seen1[key]++;
    } else {
      seen1[key] = 1;
    }
  }

  for (let i = 0; i < s2.length; i++) {
    const key = s2[i];
    if (key in seen2) {
      seen2[key]++;
    } else {
      seen2[key] = 1;
    }
  }

  console.log(seen1, seen2);
  for (let key in seen1) {
    if (key in seen2) {
      const min = Math.min(seen1[key], seen2[key]);
      console.log('key', key, min);
      commom += min;
      console.log('commom', commom);
    }
  }
  return commom;
}
