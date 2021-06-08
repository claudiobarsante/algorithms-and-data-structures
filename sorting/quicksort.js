// -- Average case matters more than worst case --
/** Time complexity
 * Best O(n log n);
 * Average O(n log n)
 * Worst O(n^2) -- if the array is almost sorted and you pick the first or last element
 *  as pivot
 * * Space complexity O(log n)
 */

const swap = (arr, left, right) => {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};

const pivotHelper = (arr, left = 0, right = arr.length - 1) => {
  let pivot = arr[left]; // We are assuming the pivot is always the first element
  let swapIdx = left;

  for (let i = left + 1; i <= right; i++) {
    /*finding a smaller number increase the swapIndex first then swap 
    the smaller number to the swapIdx and the number at the position(swapIdx)
    to position i */
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  /* At the end swap the first element(pivot) with the swapIdx.
  Now the item it's in the correct position and index in the array. 
  Finally return it's index. What it's important it's that all elements in the array
  that are less than the pivot are on it's left and the greater at it's right*/
  swap(arr, left, swapIdx);
  return swapIdx;
};

/* -- find pivot, smaller nums than the pivot to left, greater to the right
   -- swap the pivot with quantity of numbers are smaller(qt=index to swap)
   -- recursively continue to do it until the partitioning is equal to
   -- 1 element = while left < right */
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivotHelper(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }

  return arr;
};
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3, 12, 0]));
