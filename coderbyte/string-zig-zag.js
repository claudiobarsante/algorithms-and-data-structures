/**
 * String Zigzag
Have the function StringZigzag(strArr) read the array of strings stored in strArr, which will contain two elements, the first some sort of string and the second element will be a number ranging from 1 to 6. The number represents how many rows to print the string on so that it forms a zig-zag pattern. For example: if strArr is ["coderbyte", "3"] then this word will look like the following if you print it in a zig-zag pattern with 3 rows:



Your program should return the word formed by combining the characters as you iterate through each row, so for this example your program should return the string creoebtdy.
Examples
Input: ["cat", "5"]
Output: cat
Input: ["kaamvjjfl", "4"]
Output: kjajfavlm
 */

// -- Tip --> https://dev.to/alisabaj/the-zigzag-conversion-problem-3nne
/**/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || s.length < numRows) return s;

  let rows = Array.from({ length: numRows }, () => []);
  let currentRow = 0;
  let isReverse = false;
  let result = '';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    rows[currentRow].push(char);

    if (isReverse) {
      currentRow--;
    } else {
      currentRow++;
    }

    if (currentRow === numRows - 1) isReverse = true;
    if (currentRow === 0) isReverse = false;
  }

  for (let i = 0; i < rows.length; i++) {
    const sub = rows[i];
    result += sub.join('');
  }

  return result;
};
function StringZigzag(strArr) {
  const string = strArr[0];
  const range = Number(strArr[1]);

  if (range === 1) {
    return string;
  }

  const rows = Array.from({ length: range }, () => []);

  let row = 0;
  let direction = 1;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    rows[row].push(char);

    const isToChangeDirection = row === range - 1; // -- reached last row

    if (row === 0) direction = 1;
    if (isToChangeDirection) direction = -1;

    row += direction;
  }

  return rows.flat().join('');
}

// keep this function call here
console.log(StringZigzag(readline()));
