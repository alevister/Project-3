var button = document.querySelector("#meet");
var div = document.querySelector("#team");

function toggleBackground() {
  div.classList.toggle("active");
}

button.addEventListener("click", toggleBackground);

var active = 1;
var backButton = document.querySelector("#back");
var nextButton = document.querySelector("#next");
var slides = document.querySelectorAll(".slideshow > div");

function setup() {
  slides.forEach((s, i) => {
    s.dataset["index"] = i + 1;
  });
}

function toggleSlide(from, to) {
  slides[from].classList.remove("active");
  slides[to].classList.add("active");
}

function back() {
  var from = active;
  if (active <= 1) {
    active = slides.length - 1;
  } else {
    active--;
  }
  toggleSlide(from, active);
}

function next() {
  var from = active;
  if (active >= slides.length - 1) {
    active = 1;
  } else {
    active++;
  }
  toggleSlide(from, active);
}

setup();
backButton.addEventListener("click", back);
nextButton.addEventListener("click", next);

var accordian = document.querySelector(".accordian");

function toggleAccordian() {
  accordian.classList.toggle("active");
}

accordian.addEventListener("click", toggleAccordian);
