var factorial = function (n) {
    var i, fact = 1;

    for (i = n; i >= 1; i--) {
        fact = fact * i;
    }

    return fact;
}

var n = 7;
var fact = factorial(n);

console.log(`${n}! = ${fact}`);