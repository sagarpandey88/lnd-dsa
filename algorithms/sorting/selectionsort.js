/**
 * Selection sort:
 *  Look for the smallest item in the list and move it to the top
 *
 * Time complexity O (n^2)
 * Space Complexity O(1)
 *
 */

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i; // assume current index is minimum
    let temp = array[i]; // set the value of current index in a temp variable

    //looping through current index +1 items
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        // if the new index is lower than current min replace it
        min = j;
      }
    }

    array[i] = array[min]; //moving the identified min value to current index
    array[min] = temp; // moving the current index value to outer loop index
  }
  return array;
}

export function init() {
  console.log(selectionSort(numbers));
}
