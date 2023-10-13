const wasm = require('rust-wasm-lib');

console.log(wasm.multiply(5, 7)); // print 35

// compare rust and javascript functions
function fibonacciJS(n) {
    if (n <= 1) return n;
    return fibonacciJS(n - 1) + fibonacciJS(n - 2);
}

const num = 40;

console.time("Fibonacci Rust/WASM");
console.log(wasm.fibonacci(num));
console.timeEnd("Fibonacci Rust/WASM");

console.time("Fibonacci JavaScript");
console.log(fibonacciJS(num));
console.timeEnd("Fibonacci JavaScript");