
// includes() method determines whether a string contains the given characters within it or not. 
// This method returns true if the string contains the characters, otherwise, it returns false.


// Syntax: <array_name>.includes("array_element");

//Eg: friends.includes("Suresh");

// 👆 It returns 'true' because "Suresh" is an element of array 'friends'. 
// If we were trying to search for that element which doesn't exist in the array, the we will encounter 'false' as Output.

let friends = ["Ramesh", "Suresh", "Kamlesh"];

console.log("\n");

console.log(friends.includes("Kamlesh"));      // Output: true
console.log(friends.includes("Kamleen"));     // Output: false

console.log(friends.includes("Ramesh", -1));  // Output: false
// Because it started searching "Ramesh" from index 1 but Ramesh is in index 0 in the given array.

console.log("\n");