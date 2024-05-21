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

