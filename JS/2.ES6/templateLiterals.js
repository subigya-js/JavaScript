// ` ` <- This is template literals

let n = 7, i;

console.log(`\nThe table of ${n} is given by: \n`);

for (i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}

console.log("\n\n");