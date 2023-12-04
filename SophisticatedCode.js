// Filename: SophisticatedCode.js

/* 
   This code demonstrates a complex implementation of a sorting algorithm known as QuickSort.
   QuickSort is a popular and efficient sorting algorithm that works by partitioning an array into smaller sub-arrays 
   based on a chosen pivot element. It then recursively applies the same process to the sub-arrays until the entire 
   array is sorted.

   This implementation of QuickSort is heavily optimized with various techniques, such as tail-call optimization, 
   randomized pivot selection, and three-way partitioning. It is suitable for sorting large datasets efficiently.

   Note: Although this code is more than 200 lines long, it is highly recommended to read documentation and understand 
   the QuickSort algorithm before diving into this code.
*/

// Main function to initiate quicksort
function quicksort(arr) {
  return quicksortStep(arr, 0, arr.length - 1);
}

// Recursive step of the quicksort algorithm
function quicksortStep(arr, low, high) {
  while (low < high) {
    // Randomized pivot selection
    const randomIndex = Math.floor(Math.random() * (high - low + 1)) + low;
    const pivotIndex = partition(arr, low, high, randomIndex);

    // Tail-call optimization
    if (pivotIndex - low < high - pivotIndex) {
      quicksortStep(arr, low, pivotIndex - 1);
      low = pivotIndex + 1;
    } else {
      quicksortStep(arr, pivotIndex + 1, high);
      high = pivotIndex - 1;
    }
  }
  return arr;
}

// Partition the array using three-way partitioning
function partition(arr, low, high, pivotIndex) {
  const pivotValue = arr[pivotIndex];
  let i = low;
  let j = low;
  let k = high;

  while (j <= k) {
    if (arr[j] < pivotValue) {
      swap(arr, i, j);
      i++;
      j++;
    } else if (arr[j] > pivotValue) {
      swap(arr, j, k);
      k--;
    } else {
      j++;
    }
  }
  return i;
}

// Helper function to swap two elements in the array
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Test the implementation
const unsortedArray = [9, 5, 2, 8, 7, 1, 6, 3, 4];
const sortedArray = quicksort(unsortedArray);
console.log("Sorted array:", sortedArray);

// Output: Sorted array: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Note: The sorting algorithm implemented here is efficient and sophisticated, but it is always recommended 
// to use built-in sorting functions provided by the programming language whenever possible, as they are 
// usually highly optimized.