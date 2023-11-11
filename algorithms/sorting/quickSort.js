/**
 * Merge sort: Use a pivot and move the items either to left or right of the pivot, continue doing so innrecurrsive way
 * Time Complexity o(nlog n) worst case o(n^2)
 * space complexity o (log(n)) *
 *
 */

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4];

function quickSort(arr) {
  //base case if the array has only 1 element
  if (arr.length <= 1) {
    return arr;
  }

  //choose the pivot
  const pivot = arr[arr.length - 1];
  // console.log(arr[pivotIdx]);
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  //  console.log("left",left, "right", right);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

export function init() {
  // console.log(quickSort(numbers));
}
