// Here, we will be using splice(); method.

// Syntax: <array_name>.splice(starting_index, no_of_elements_to_be_deleted, "array_to_be_added");


// 1. To add "Dec" at the end of Array.
console.log("\n");
console.log(`1. Array after adding "Dec" at last:`);
let month = ["Jan", "march", "April", "June", "July"];

month.splice(month.length, 0, "Dec");
console.log(month);

console.log("\n");
// 2. The return type of splice(); method is: 'The deleted value/element'.


// 3. Convert 'march' into 'March'.
console.log(`3. Array after converting "march" into "March":`);
month.splice(month.indexOf("march"), 1, "March");
console.log(month);

console.log("\n");
// 4. Delete 'June' from Array.

console.log(`4. Array after deleting "June" from it:`);
month.splice(month.indexOf("June"), 1);
console.log(month);

console.log("\n");