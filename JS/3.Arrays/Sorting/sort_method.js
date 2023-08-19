// .sort(); method is used to do sorting in JavaScript
// It arranges the sorted data in ascending order.
// Basically, it doesn't make new array or object, it only replaces the same array with the sorted array.


// Syntax:  <array_name>.sort();

//Eg:

console.log("\n");
const months = ["March", "Jan", "Feb", "Dec"];

console.log(months.sort());   // Here, now new array is returned, same 'months' variable is replaced by sorted array.
console.log("\n");
// Output: [ 'Dec', 'Feb', 'Jan', 'March' ]

// For numbers:

const values = [1, 20, 3, 40, 10000];

console.log(values.sort());
// Output: [ 1, 10000, 20, 3, 40 ]

// Here, this is incorrect order but the thing/logic/concept is:
// => All the array elements are firstly converted into String then only they are sorted.

// Therefore, we can say: 25 > 100

console.log("\n");