const testMatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const directions = [
  //[row,col]
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
];

const traversalBFS = function (matrix) {
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

  const values = [];

  const queue = [[0, 0]]; //starting point in the Matrix, not the value but using the position

  while (queue.length) {
    const currentPos = queue.shift();
    const row = currentPos[0];
    const col = currentPos[1];

    // -- check boundaries
    if (
      row < 0 ||
      row >= matrix.length ||
      col < 0 ||
      col >= matrix[0].length ||
      seen[row][col]
    )
      continue;

    values.push(matrix[row][col]);
    seen[row][col] = true;

    for (let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      queue.push([row + currentDir[0], col + currentDir[1]]);
    }
  }

  return values;
};

console.log(traversalBFS(testMatrix));
