/*In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

Each order is represented by an "order id" (an integer).

We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

For example:

  const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19] */
function mergeSortedArrays(myArray, alicesArray) {
  if (myArray.length === 0 && alicesArray.length === 0) return [];

  if (myArray.length === 0) return alicesArray;

  if (alicesArray.length === 0) return myArray;
  let myIdx = 0;
  let alicesIdx = 0;
  let merged = [];

  while (myIdx < myArray.length || alicesIdx < alicesArray.length) {
    if (myArray[myIdx] < alicesArray[alicesIdx]) {
      merged.push(myArray[myIdx]);
      myIdx++;
    } else {
      merged.push(alicesArray[alicesIdx]);
      alicesIdx++;
    }
  }

  while (myIdx < myArray.length) {
    merged.push(myArray[myIdx]);
    myIdx++;
  }

  while (alicesIdx < alicesArray.length) {
    merged.push(alicesArray[alicesIdx]);
    alicesIdx++;
  }
  return merged;
}

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeSortedArrays(myArray, alicesArray));
