// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunkedArray = [];
  let index = 0;
  while (index < array.length) {
    chunkedArray.push(array.slice(index, index + size));
    index += size;
  }

  return chunkedArray;
}

module.exports = chunk;

//Sol-1
// function chunk(array, size) {
//   let chunkedArray = [];
//   for (let elem of array) {
//     const currentArray = chunkedArray[chunkedArray.length - 1];
//     if (!currentArray || currentArray.length === size) {
//       chunkedArray.push([elem]);
//     } else {
//       currentArray.push(elem);
//     }
//   }
//   return chunkedArray;
// }

// module.exports = chunk;
