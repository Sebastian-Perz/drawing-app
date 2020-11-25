const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeSwitch = document.getElementById("size");
const colorSwitch = document.getElementById("color");
const clearButton = document.getElementById("clear");
const context = canvas.getContext("2d");

let size = 30;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", () => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});
canvas.addEventListener("mouseup", () => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  context.beginPath();
  context.arc(x, y, size, 0, 2 * Math.PI);
  context.fillStyle = color;
  context.fill();
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.strokeStyle = color;
  context.lineWidth = size * 2;
  context.stroke();
}

increaseBtn.addEventListener("click", () => {
  size = size + 5;
  if (size > 50) {
    size = 50;
  }
  updateSizeOnScreen();
});
decreaseBtn.addEventListener("click", () => {
  size = size - 5;
  if (size < 5) {
    size = 5;
  }
  updateSizeOnScreen();
});

colorSwitch.addEventListener("change", (e) => {
  color = e.target.value;
});

clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

function updateSizeOnScreen() {
  sizeSwitch.innerText = size;
}
