// Static
// min - static method
// console.log(Date.now());

// let res = Math.min(10, 5, 100, 500, 2, 5);

// console.log(res);

// =================================

class Calculator {
    static PI = 3.14;

    static min(a, b) {
        return a > b ? b : a;
    }

    static sum(a, b) {
        return a + b;
    }

    static mult(a, b) {
        return a * b;
    }
}

console.log(Calculator.PI);

// console.log(Calculator.min(100, 50));
console.log(Calculator.sum(5, 10));
console.log(Calculator.mult(5, 10));
