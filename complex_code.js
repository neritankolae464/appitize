/*
   Filename: complex_code.js

   This code implements a complex and sophisticated algorithm
   for generating a fractal pattern known as the Mandelbrot Set.
   It uses a combination of mathematical formulas, pixel manipulation,
   and iterative calculations to generate stunning visual patterns.

   Please note that this code requires a modern browser with
   HTML5 canvas support to display the resulting fractal image.

   Author: [Your Name]
   Date: [Current Date]
*/

// Mandelbrot Set parameters
const WIDTH = 800;  // Width of the canvas
const HEIGHT = 800; // Height of the canvas
const MAX_ITERATIONS = 1000; // Maximum number of iterations per pixel
const MIN_X = -2.5; // Minimum x-value in the complex plane
const MAX_X = 1;    // Maximum x-value in the complex plane
const MIN_Y = -1;   // Minimum y-value in the complex plane
const MAX_Y = 1;    // Maximum y-value in the complex plane

// Canvas setup
const canvas = document.createElement("canvas");
canvas.width = WIDTH;
canvas.height = HEIGHT;
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

// Main rendering function
function renderMandelbrot() {
  for (let x = 0; x < WIDTH; x++) {
    for (let y = 0; y < HEIGHT; y++) {
      const a = mapToRange(x, 0, WIDTH, MIN_X, MAX_X);
      const b = mapToRange(y, 0, HEIGHT, MIN_Y, MAX_Y);

      let ca = a;
      let cb = b;
      let n = 0;

      while (n < MAX_ITERATIONS) {
        const aa = a * a;
        const bb = b * b;
        const twoab = 2.0 * a * b;

        a = aa - bb + ca;
        b = twoab + cb;

        if (aa + bb > 4) {
          break; // Escaped the Mandelbrot Set
        }

        n++;
      }

      const bright = mapToRange(n, 0, MAX_ITERATIONS, 0, 255);
      const color = `rgb(${bright}, ${bright}, ${bright})`;
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 1, 1);
    }
  }
}

// Utility function to map a value from one range to another
function mapToRange(value, start1, stop1, start2, stop2) {
  return (value - start1) * (stop2 - start2) / (stop1 - start1) + start2;
}

// Start rendering
renderMandelbrot();