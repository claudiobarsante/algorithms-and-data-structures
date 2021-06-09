/*
Time: always O(n log n)
space: O(n);
*/
const merge = (array1, array2) => {
  let i = 0;
  let j = 0;

  let merged = [];

  while (i < array1.length && j < array2.length) {
    if (array1[i] > array2[j]) {
      merged.push(array2[j]);
      j++;
    } else {
      merged.push(array1[i]);
      i++;
    }
  }

  while (i < array1.length) {
    merged.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    merged.push(array2[j]);
    j++;
  }

  return merged;
};
//find a middle, break in smaller  arrays until array size is 0 or 1. Then sort and merge
const mergesort = array => {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);

  const left = mergesort(array.slice(0, mid));
  const right = mergesort(array.slice(mid));

  return merge(left, right);
};

console.log(mergesort([8, 7, 6, 5, 4, 3, 2, 1]));
