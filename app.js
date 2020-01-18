const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
canvas.height = 700;
canvas.width = 700;

// 기본 값

ctx.strokeStyle = "#2c2c2c";

ctx.lineWidth = 2.5;

// 컬러 바꾸기
const colors = document.getElementById("jsColors");
function pickColor(event) {
  let colorSelected = event.toElement.style.backgroundColor;
  ctx.strokeStyle = colorSelected;
}

colors.addEventListener("click", pickColor);

// 선 굵기 바꾸기
const lineWidthRange = document.getElementById("jsRange");

console.log(lineWidthRange);
//lineWidthRange.addEventListener()

let painting = false;

function stopPainting() {
  painting = false;
}
function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
