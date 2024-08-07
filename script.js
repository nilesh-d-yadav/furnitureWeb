let header = document.querySelector(".header-main");
let navbar = document.querySelector(".navbar");

document.querySelector("#menu").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");

  if (window.scrollY > 120) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

let accordions = document.querySelectorAll(".accordion-container .accordion");

accordions.forEach((acco) => {
  acco.onclick = () => {
    accordions.forEach((subAcco) => {
      subAcco.classList.remove("active");
    });
    acco.classList.add("active");
  };
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 7500,
    diableOnInteraction: false,
  },
  grabCursor: true,
  loop: true,
});

let val = 0;
let val1 = 0;
let count = document.querySelector("#bag");
let count2 = document.querySelector("#heart");

let addBtn = document.querySelectorAll("#increment");
addBtn.forEach((item) => {
  item.addEventListener("click", () => {
    item.innerHTML = "Bought";
    val = val + 1;
    count.innerHTML = val;
    item.classList.add("Disabled");
  });
});

let wishlista = document.querySelectorAll(".product-btn");
wishlista.forEach((item) => {
  item.addEventListener("click", () => {
    val1 = val + 1;
    count2.innerHTML = val1;
  });
});

// addBtn.addEventListener((item) => {
//   val = val + 1;
//   count.innerText = val;
// });
