// map(); method creates a new array populated with the results of calling a provided function on every 
// element in the calling function.

// It is basically used in traversal. (Best alternative for forEach(); method)

// It returns a new array containing the results of calling a function on every element in this array.


// Syntax: <array_name>.map((call_back_function) => return_type);


const arr1 = [1, 4, 9, 16, 25];

// const mapArray = arr1.map((element) => element > 9);
// console.log(mapArray);

console.log(arr1.map((element) => element > 9));
// Output: [false, false, false, true, true]  => It is returning the result (either true or false).

// If we want to display all the array elements. Then,

console.log("\n\nThe element in the array are: ");

console.log(arr1.map((element, index, array) => `${element} is in index ${index} of array ${array}`));


console.log("\nThe elements > 9 in this given array are: ");
arr1.map((element) => {
    if (element > 9) {
        console.log(element);
    }
});
