// Selectors
const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

// Set Dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set Draw style
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 1;

// Drawing State and Variables:
let isDrawing = false; // A flag to control the direction of the line width.
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

// Drawing function
function draw(e) {
  if (!isDrawing) {
    return; // Stops function when not moused down.
  }

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // used to create a color cycle

  // Drawing path
  ctx.beginPath();
  ctx.moveTo(lastX, lastY); // Line starting point
  ctx.lineTo(e.offsetX, e.offsetY); // Line ending point
  ctx.stroke(); // Line stroke

  [lastX, lastY] = [e.offsetX, e.offsetY]; // Destructuring
  hue++;
  if (hue >= 360) hue = 0; // Enables all hsl colors

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction; // Flips the direction

  direction === true ? ctx.lineWidth++ : ctx.lineWidth--;
}

