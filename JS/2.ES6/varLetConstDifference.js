// Var has it's scope inside function but
// Let and Const has it's scope only inside a block
// As the } of any block ends, the scope of let and const will also end.

// Similarly, as the } of any function ends, the scope of var will also end.

// Here in this example, "if ()" statement is considered as a block.


//Var

// function bioData() {
//     var firstName = "Gaurav";
//     console.log(`1. ${firstName}`);

//     if (true) {
//         var lastName = "Subedi";
//         console.log(`2. Inner ` + firstName);
//         console.log(`3. Inner ` + lastName);
//     }

//     console.log(`4. Outer ` + firstName);
//     console.log(`5. Outer ` + lastName);
// }

//👆 All 5 console will give output.



//Let

// function bioData() {
//     let firstName = "Gaurav";
//     console.log(`1. ${firstName}`);

//     if (true) {
//         let lastName = "Subedi";
//         console.log(`2. Inner ` + firstName);
//         console.log(`3. Inner ` + lastName);
//     }

//     console.log(`4. Outer ` + firstName);
//     console.log(`5. Outer ` + lastName);
// }

//👆 First 4 console will give output. 5th console will throw and error because,
// the scope of "lastName" ended with the } of 'if' statement/block.



//Const

// function bioData() {
//     const firstName = "Gaurav";
//     console.log(`1. ${firstName}`);

//     if (true) {
//         const lastName = "Subedi";
//         console.log(`2. Inner ` + firstName);
//         console.log(`3. Inner ` + lastName);
//     }

//     console.log(`4. Outer ` + firstName);
//     console.log(`5. Outer ` + lastName);
// }

//👆 First 4 console will give output. 5th console will throw and error because,
// the scope of "lastName" ended with the } of 'if' statement/block.

// bioData();