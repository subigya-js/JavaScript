let friends = ["Ramesh ", "Suresh ", "Kamlesh"];

console.log("\n");

friends.forEach((element, index, array) =>
    console.log(`${element} lies on Index: ${index} in an Array: ${array}.`));

console.log("\n");


// In for each loop/method, we use call back function.
// Call back function is the function which is used as an arguement in another function.

// We can use both the normal and arrow function as a call back function in this but
// if we are using 'this' keyword, then arrow function cannot take 'this' keyword.