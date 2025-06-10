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

const controls = document.querySelector(".controls");
const cube = document.querySelector(".cube");
let angle = 0;

let animationId;
function spinCube() {
  angle += 0.5;
  cube.style.transform = `rotateY(${angle}deg)`;
  animationId = requestAnimationFrame(spinCube);
}

spinCube();

//* if user hovers over controls, animation stops

controls.addEventListener("mouseenter", (e) => {
  cancelAnimationFrame(animationId);
});
controls.addEventListener("mouseleave", () => {
  spinCube();
});

//? add feature for controls

let x = 0,
  y = 0,
  z = 0;

controls.addEventListener("click", (e) => {
  const button = e.target.closest("i");
  if (!button) return;

  if (button.classList.contains("top-x-control")) x += 25;
  if (button.classList.contains("bottom-x-control")) x -= 25;
  if (button.classList.contains("left-y-control")) y -= 25;
  if (button.classList.contains("right-y-control")) y += 25;
  if (button.classList.contains("top-z-control")) z -= 25;
  if (button.classList.contains("bottom-z-control")) z += 25;

  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

// Section 3
const section3 = document.querySelector(".section-3");
const section3content = document.querySelector(".section-3-content");

// 2. Define the callback function
const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      section3content.classList.add("change");
      // ensures the element is only observed once
      observer.unobserve(entry.target);
    }
  });
};

// 3. Create the observer with options
const observerOptions = {
  root: null, // viewport
  threshold: 0.5, // 50% of element needs to be visible
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// 4. Start observing
observer.observe(section3);

/*----------------Watches----------------------*/

const watchControl = document.querySelectorAll(".watch-control");
const watchBands = document.querySelector(".watch-bands");
const watchCases = document.querySelector(".watch-cases");

let xOffset = 0,
  yOffset = 0;

watchControl.forEach((watch) => {
  watch.addEventListener("click", (e) => {
    e.preventDefault();

    const button = e.target.closest(".watch-control");
    if (!button) return;

    if (button.classList.contains("watch-top-control")) {
      if (yOffset < 140) yOffset += 35;
      watchCases.style.transform = `translateY(${yOffset}rem)`;
    }

    if (button.classList.contains("watch-bottom-control")) {
      if (yOffset > -140) yOffset -= 35;
      watchCases.style.transform = `translateY(${yOffset}rem)`;
    }

    if (button.classList.contains("watch-left-control")) {
      if (xOffset < 140) xOffset += 35;
      watchBands.style.transform = `translateX(${xOffset}rem)`;
    }

    if (button.classList.contains("watch-right-control")) {
      if (xOffset > -140) xOffset -= 35;
      watchBands.style.transform = `translateX(${xOffset}rem)`;
    }
    console.log(xOffset, yOffset);
  });
});
