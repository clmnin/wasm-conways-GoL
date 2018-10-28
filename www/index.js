import { Universe } from "wasm-game-of-life";

const pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new();

// The JavaScript runs in a requestAnimationFrame loop.
// On each iteration, it draws the current universe to 
// the <pre>, and then calls Universe::tick
const renderLoop = () => {
    pre.textContent = universe.render();
    universe.tick();
  
    requestAnimationFrame(renderLoop);
};

// To start the rendering process, make the initial call
requestAnimationFrame(renderLoop);