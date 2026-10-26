// Problem Description – Chunk Array
//
// When dealing with large datasets, it's often necessary to process them
// in smaller batches (chunks) to avoid overloading the CPU or I/O.
//
// Your task is to implement a function `chunkArray(array, size)` that
// splits an array into sub-arrays of a maximum specified size.
//
// Requirements:
// 1. The function should return a new array containing the chunks.
// 2. The last chunk might be smaller than the specified size.
// 3. Handle edge cases like empty arrays or chunk size <= 0.
//
// This is a prerequisite for common patterns like batching API calls.

// array = [1,2,3,4,5]
// size = 2
// subarry = [
// [1,2]
// [3,4]
// [5,6]
// ]

function chunkArray(array, size) {
  if (size <= 0 || array?.length <= 0 || !Array.isArray(array)) {
    return [];
  }
  if (size >= array.length) {
    return [array];
  }
  let newArray = [];
  for (let i = 0; i < array.length; i = i + size) {
    newArray.push(array.slice(i, i + size));
  }

  return newArray;
}

module.exports = chunkArray;
