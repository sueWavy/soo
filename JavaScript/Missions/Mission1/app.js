// do something!

import { saveToggle, loadToggle } from "./toggle.js";

const $nav = document.querySelector("nav");
let isOpen = false;

const toggle = loadToggle();

if (null === toggle) {
  isOpen = false;
} else {
  isOpen = toggle.isOpen;
}

$nav.classList.toggle("active", isOpen);
document.body.style.visibility = "visible";

window.addEventListener("beforeunload", () => {
  saveToggle({ isOpen });
});

document.querySelector(".toggle").addEventListener("click", () => {
  isOpen = !isOpen;
  document.body.classList.remove("preload");
  $nav.classList.toggle("active", isOpen);
});
