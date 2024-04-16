/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

 

Example 1:


Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
Example 2:


Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

Constraints:

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1
 

Follow up:

A straightforward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?

https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/777/


*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function (matrix) {
  const directions = {
    up: [-1, 0],
    right: [0, 1],
    down: [1, 0],
    left: [0, -1]
  };

  let row = 0;
  let col = 0;

  const visited = new Set();
  const toUpdate = new Set();
  // -- DFS to visit all cells and check for zeroes
  function dfs(row, col, visited, toUpdate) {
    // -- edge -- if row or col are out of bounds
    if (row < 0 || col >= matrix[0].length || row >= matrix.length || col < 0)
      return;

    const position = JSON.stringify({ row, col });
    if (visited.has(position)) return;

    visited.add(position);

    const value = matrix[row][col];
    if (value === 0) toUpdate.add(position);

    for (let direction in directions) {
      const [x, y] = directions[direction];
      dfs(row + x, col + y, visited, toUpdate);
    }
  }

  dfs(row, col, visited, toUpdate);

  // -- update the entire row and col to 0's
  function update(row, col) {
    if (row < 0 || col >= matrix[0].length || row >= matrix.length || col < 0)
      return;

    // -- row
    for (let i = 0; i < matrix[row].length; i++) {
      matrix[row][i] = 0;
    }

    // -- col
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }

  toUpdate.forEach(element => {
    const position = JSON.parse(element);
    update(position.row, position.col);
  });

  return matrix;
};
