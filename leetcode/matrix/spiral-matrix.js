/**
 * 54. Spiral Matrix
Medium

5307

733

Add to List

Share
Given an m x n matrix, return all elements of the matrix in spiral order.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
Accepted
600,266
Submissions
1,531,549
 */
var spiralOrder = function (matrix) {
  let result = [];

  let rowStart = 0;
  let rowEnd = matrix.length - 1;

  let colStart = 0;
  let colEnd = matrix[0].length - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // -- top
    for (let col = colStart; col <= colEnd; col++) {
      result.push(matrix[rowStart][col]);
    }
    // -- right border
    for (let row = rowStart + 1; row <= rowEnd; row++) {
      result.push(matrix[row][colEnd]);
    }
    // -- bottom
    for (let col = colEnd - 1; col >= colStart; col--) {
      /**Handle the edge case when there's a single row in the middle of the matrix.
       * We don't want to double-count the values in this row, which we've already handled.
       * counted in the top traverse
       * edge case 1 */
      if (rowStart === rowEnd) break;
      result.push(matrix[rowEnd][col]);
    }
    // -- left border
    for (let row = rowEnd - 1; row > rowStart; row--) {
      /** Handle the edge case when there's a single column in the middle of the matrix.
       * We don't want to double-count the values in this column, which we've already handled.
       * counted in the right border traverse
       * edge case 2
       */
      if (colStart === colEnd) break;
      result.push(matrix[row][colStart]);
    }
    rowStart++;
    rowEnd--;
    colStart++;
    colEnd--;
  }
};
/**Edge case 1
     * {
  "array": [
    [1, 2, 3, 4],
    [10, 11, 12, 5],<--|11,12|
    [9, 8, 7, 6]
  ]
}*/

/**Edge case 2
 * {
  "array": [
    [1, 2, 3],
    [12, 13, 4],--|13|
    [11, 14, 5],--|14|
    [10, 15, 6],--|15|
    [9, 8, 7]
  ]
}
 * 
*/
