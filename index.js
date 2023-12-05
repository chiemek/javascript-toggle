"use strict";
let show = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

console.log(show.textContent);

// for open
for (let i = 0; i < show.length; i++) {
  show[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

// close function
const closeM = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for close
close.addEventListener("click", closeM);

// for overlay close
overlay.addEventListener("click", closeM);

// for keyboard press
document.addEventListener("keydown", function (k) {
  if (k.key === "Escape" && !modal.classList.contains("hidden")) {
    closeM();
  }
});
