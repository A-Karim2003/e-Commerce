"use strict";

const section1 = document.querySelector(".section-1");

function setBackgrounds(i) {
  section1.style.backgroundImage = `url('./images/slideshow/section-1-bg-${i}.jpg')`;
}
setBackgrounds(2);

let imgNum = 1;
const oneMinute = 60 * 1000; // 60000 ms

setInterval(() => {
  imgNum = (imgNum % 5) + 1;
  setBackgrounds(imgNum);
}, oneMinute);

// ----------------------------------------

const cube = document.querySelector(".cube");
let angle = 0;

function spinCube() {
  angle += 1;
  cube.style.transform = `rotateY(${angle}deg)`;
  requestAnimationFrame(spinCube);
}
spinCube();
