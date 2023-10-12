# Rust Wasm Lib

### Without Bundler

For run directly on browser, without a bundler like Webpack for node:
- compile on root folder with: 
```bash
wasm-pack build --target web
````
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

### With Bundler (Node)

For run with a bundler like Webpack for node:
- compile on root folder with: 
```bash
wasm-pack build
````

