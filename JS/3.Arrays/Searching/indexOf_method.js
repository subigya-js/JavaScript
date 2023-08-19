
// indexOf(); returns the first (least) index of an element within the array equal to an
// element within the array equal to an element, or -1 if none is found/array is empty. It 
// search the element from the 0th index number.


// Syntax: <array_name>.indexOf("element_name", starting_index);

// Eg: friends.indexOf("Kamlesh", 1);

// 👆 It means, Search "Kamlesh" from array 'friends' from index 1.

// If it is found then it will return "Kamlesh" and it's position in array if not then it will
// return -1. It also returns -1 if the given element doesn't exist in the array.



// Eventhough any negative number is given as a index parameter, then also it will start searching from front(beginning).


let friends = ["Ramesh", "Suresh", "Kamlesh"];

console.log("\n");

console.log(` ${friends.indexOf("Kamlesh")}`);   // Output: 2 
// "Kamlesh" lies on index 2 and it started searching from index 0 (default).

console.log(` ${friends.indexOf("Kamlesh", 1)}`); // Output: 2
// "Kamlesh" lies on index 2 and it started searching from index 1 (manual).

console.log(friends.indexOf("Ramesh", 1));  // Output: -1
// "Ramesh" lies on index 0 but it started searching from index 1. So we are getting -1.

console.log(friends.indexOf("Kamleen"));   // Output: -1
// "Kamleen" doen't lie on our Array. So we are getting -1.

console.log(friends.indexOf("Kamleen", 1)); // Output: -1
// "Kamleen" doen't lie on our Array. So we are getting -1 eventhough we are searching 
// from any array index

console.log("\n");