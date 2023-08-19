
// All same as find(); method, the only difference is that it returns the index of returned value else returns -1 if not found.

const price = [1200, 300, 400, 500, 600, 1000, 10];

const findIndex = price.findIndex(element => element < 400);  // Output: 1
// Here, 300 is the value which is less than 400 because it is traversing from the starting index of the array.
// So it is returning the index of 300 (i.e. 1)

console.log(findIndex);