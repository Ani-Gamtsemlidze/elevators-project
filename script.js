const menuBar = document.querySelector(".menu-bar");

const close = document.querySelector(".mobile-close-click");

const arrow = document.querySelector(".arrow-image");

const mobileMenu = document.querySelector(".mobile-menu");

const mainClick = document.querySelector(".service-links");

menuBar.addEventListener("click", function () {
  document.querySelector(".mobile-menu").style.display = "block";
  //   alert("ok");
});

close.addEventListener("click", function () {
  document.querySelector(".mobile-menu").style.display = "none";
});
arrow.addEventListener("click", function () {
  const mobileList = document.querySelector("#mobile-list");
  mobileList.classList.toggle("active");
  //   document.querySelector(".arrow-image").style.transform = "rotate(0deg)";

  if (mobileList.classList.contains("active")) {
    document.querySelector(".arrow-image").style.transform = "rotate(0deg)";
    document.querySelector(".arrow-image").style.bottom = "12%";
  } else {
    document.querySelector(".arrow-image").style.bottom = "62%";
    document.querySelector(".arrow-image").style.transform = "rotate(180deg)";
  }
});

mainClick.addEventListener("click", function () {
  mobileMenu.style.display = "none";
});
