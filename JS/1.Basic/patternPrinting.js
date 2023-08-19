var n = 5, i, j, k;

console.log("\n\n");

for (i = 1; i <= n; i++) {
    for (j = 1; j <= (n - i + 1); j++) {
        console.log("  ");
    }

    for (k = 1; k <= i; k++) {
        console.log("* ");
    }
}

console.log("\n\n");