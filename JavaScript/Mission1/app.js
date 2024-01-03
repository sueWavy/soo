// do something!

import { saveState, loadState } from "./state.js";

const $nav = document.querySelector("nav");
let isNavOpen = false;

window.addEventListener("DOMContentLoaded", () => {
  const state = loadState();

  if (null === state) {
    isNavOpen = false;
  } else {
    isNavOpen = state.isNavOpen;
  }
  $nav.classList.toggle("active", isNavOpen);
  document.body.style.visibility = "visible";
});

window.addEventListener("beforeunload", () => {
  saveState({ isNavOpen });
});

document.querySelector(".toggle").addEventListener("click", () => {
  isNavOpen = !isNavOpen;
  document.body.classList.remove("preload");
  $nav.classList.toggle("active", isNavOpen);
});
