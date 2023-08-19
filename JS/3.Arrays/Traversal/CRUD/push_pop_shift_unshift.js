const friends = ["Ramesh", "Suresh", "Kamlesh"];

//push();

// Syntax: <array_name>.push(" ", " ", .....);

// --> this method adds element at the very end of an array. It returns the new length of an Array. 

// Eg:

friends.push("Kamleen");
console.log(friends);
// Output: [ 'Ramesh', 'Suresh', 'Kamlesh', 'Kamleen' ]



//unshift();

// Syntax: <array_name>.unshift(" ", " ", ....);

// -> this method is same as push(); method. The only difference is, it adds element/s at the beginning of an Array.
// It also returns the new length of an Array.


friends.unshift("Divyanshu", "Akshyat");
console.log(friends);
// Output: [ 'Divyanshu', 'Akshyat', 'Ramesh', 'Suresh', 'Kamlesh', 'Kamleen' ]



// pop();

// Syntax: <array_name>.pop();

// -> this method is used to remove/pop the element/s from an Array. This method pops the last element of an Array.
// It returns the popped/removed element from an Array.

const poppedElement = friends.pop();
console.log(poppedElement);
// Output: Kamleen

console.log(friends);
// Output: [ 'Divyanshu', 'Akshyat', 'Ramesh', 'Suresh', 'Kamlesh' ]



// shift();

// Syntax: <array_name>.shift();

// -> this method is same like pop(); method. The only difference is that it removes the first element of an Array.
// It also returns the popped/removed element form an Array.

const shiftedElement = friends.shift();
console.log(shiftedElement);
// Output: Divyanshu

console.log(friends);
// Output: [ 'Akshyat', 'Ramesh', 'Suresh', 'Kamlesh' ]