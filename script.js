// Slider

let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

nextBtn.onclick = function () {
  showSlider("next");
};
prevBtn.onclick = function () {
  showSlider("prev");
};

let timeRunning = 3000;
let timeAutoNext = 5000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
  nextBtn.click();
}, timeAutoNext);

function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

  if (type === "next") {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add("next");
  } else {
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    carouselDom.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextBtn.click();
  }, timeAutoNext);
}

// Services Section

const services = document.querySelectorAll(".services .item");

services.forEach((service) => {
  const icon = service.querySelector(".title i");
  const details = service.querySelector(".details");

  service.addEventListener("click", () => {
    if (icon.classList.contains("active")) {
      icon.classList.remove("active");
      details.style.maxHeight = null;
    } else {
      icon.classList.add("active");
      details.style.maxHeight = details.scrollHeight + "px";
    }
  });
});

// Navbar Responsive

const toggleBtn = document.querySelector(".nav-toggle");
const navBar = document.getElementById("navbar");
console.log(navBar);

toggleBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
