# Rust Wasm Lib

### Without Node

For run directly on browser, without Node:

- compile on root folder with: 
```bash
wasm-pack build --target web
```

- call wasm lib directly from index.html, in this case index.html in root directory:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>hello-wasm example</title>
  </head>
  <body>
    <script type="module">
      import init, { greet } from "./pkg/rust_wasm_lib.js";
      init().then(() => {
        greet("WebAssembly");
      });
    </script>
  </body>
</html>

```
- Create a local server:
```bash
python3 -m http.server
```

### With Node or Bundler

For run with a for Node or bundler like Webpack:

- Compile on root folder with: 
for node
```bash
wasm-pack build --target nodejs
```
or bundle
```bash
wasm-pack build
````

- Create Node:
```bash
mkdir www
cd www
npm init -y
npm install ../pkg
touch index.js
```

- Call wasm function from index.js:
```javascript
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
```

- Run Node script:
```bash
node index.js
```