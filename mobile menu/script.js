"use strict";

const menu = document.querySelector("#menu-bar");
const nav = document.querySelector("#nav");
const menuBg = document.querySelector("#menu-bg");

// 1) toggle
// menu.addEventListener("click", function () {
//   menu.classList.toggle("active");
//   nav.classList.toggle("active");
//   menuBg.classList.toggle("active-bg");
// });

// 2) add(), remove()
menu.addEventListener("click", function () {
  if (!menu.classList.contains("active")) {
    menu.classList.add("active");
    nav.classList.add("active");
    menuBg.classList.add("active-bg");
  } else {
    menu.classList.remove("active");
    nav.classList.remove("active");
    menuBg.classList.remove("active-bg");
  }
});

