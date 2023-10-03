/**
 * Insertion Sort:
 *  Most Efficient in small dataset or  Almost sorted Best case o (n)
 *  Time Complexity :  o (n^2)   Best case o (n)
   Space complexity o(1)
 *
 */

// Note: Array.splice inserts if the 2 parameter is sent as 0 and returns the removed items

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  // loop through the items of the array.

  for (let i = 0; i < array.length; i++) {
    // check if current item is less than first item then place it at first object

    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // loop through all the items to see where it can be placed
      for (let j = 0; j < array.length; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          array.splice(j, 0, array.splice(j, 1)[0]);
          // here we are inserting the value using second parameter as 0 and array.splice(j,1) returns the deleted number
        }
      }
    }
  }
}

export function init() {
  console.log(insertionSort(numbers));
}
