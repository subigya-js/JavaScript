// Q1.

let arr1 = [25, 36, 49, 64, 81];

console.log("\nThe given array is: ");
arr1.map((element) => console.log(element));

console.log("\nThe square root of each elements of the array is:");
arr1.map((element) => console.log(Math.sqrt(element)));


// Q2.

let arr2 = [2, 3, 4, 6, 8];

console.log("\nAnother array is:");
arr2.map((element) => console.log(element));

console.log("\nThe elements from given array after multiplying each elements by 2 which results the value greater than 10 are:");

// arr2.map((element) => {
//     if (element * 2 > 10) {
//         console.log(element);
//     }
// });

// We can also perform same above action using .filter(); method.

const mult = arr2.map((element) => element * 2).filter((element) => {
    return element > 10;
});

console.log(mult);

console.log("\n");