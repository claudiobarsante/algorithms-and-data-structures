function reverse(arr) {
  if (arr.length === 0) return arr;
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx < rightIdx) {
    const temp = arr[leftIdx];
    arr[leftIdx] = arr[rightIdx];
    arr[rightIdx] = temp;
    leftIdx++;
    rightIdx--;
  }

  return arr;
}

console.log(reverse(['a', 'b', 'c', 'd', 'e']));

/*Write a function that takes an array of characters and reverses the letters in place. ↴

Why an array of characters instead of a string?

The goal of this question is to practice manipulating strings in place. Since we're modifying the input, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.

Breakdown
In general, an in-place ↴ algorithm will require swapping elements. */
