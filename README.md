<meta charset="utf-8"/>

Implementing Conway's Game of Life. The backend build in Rust and using
 WebAssembly to render it on a webpage.

 For a demo click [here](http://clmno.com/wasm-conways-GoL/):



# Development
 Developed using 🦀🕸️ `wasm-pack-template`. It comes battries included `wasm-bindgen` , `console_error_panic_hook` , `wee_alloc` (which is an insanly cool way to allocate memory, like memalloc but for reimplemented for wasm)

# Build
### 🛠️ Build with `wasm-pack build`

```
wasm-pack build
```

### 🔬 Test in Headless Browsers with `wasm-pack test`

```
wasm-pack test --headless --firefox
```

### Running it using npm

```
npm run start
```

inside `./www`
