const menuBar = document.querySelector(".menu-bar");

const close = document.querySelector(".mobile-close-click");

const arrow = document.querySelector(".arrow-image");

const mainClick = document.querySelector(".main");

menuBar.addEventListener("click", function () {
  document.querySelector(".mobile-menu").style.display = "block";
  //   alert("ok");
});

close.addEventListener("click", function () {
  document.querySelector(".mobile-menu").style.display = "none";
});

arrow.addEventListener("click", function () {
  document.querySelector("#mobile-list").style.display = "block";
});
