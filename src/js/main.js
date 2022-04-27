var button = document.querySelector("#meet");
var div = document.querySelector("#team");

function toggleBackground() {
  div.classList.toggle("active");
}

button.addEventListener("click", toggleBackground);

var active = 1;
var previousButton = document.querySelector("#previous");
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

function previous() {
  var from = active;
  if (active <= 0) {
    active = slides.length - 1;
  } else {
    active--;
  }
  toggleSlide(from, active);
}

function next() {
  var from = active;
  if (active >= slides.length - 1) {
    active = 0;
  } else {
    active++;
  }
  toggleSlide(from, active);
}

setup();
previousButton.addEventListener("click", previous);
nextButton.addEventListener("click", next);
