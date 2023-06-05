const menuBar = document.querySelector(".menu-bar");

const close = document.querySelector(".mobile-close-click");

const main = document.getElementsByClassName("main");

menuBar.addEventListener("click", function () {
  document.querySelector(".mobile-menu").classList.add("active");
  document.querySelector(".mobile-menu").style.display = "block";
});

for (let i = 0; i < main.length; i++) {
  main[i].addEventListener("click", function () {
    document.querySelector(".mobile-menu").style.display = "none";
  });
}

close.addEventListener("click", function () {
  document.querySelector(".mobile-menu").classList.remove("active");
});

document
  .getElementsByClassName("mob_service_dropdown")[0]
  .addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("active");
    document.getElementById("mobile-list").classList.toggle("active");
  });

// if (navigator.userAgent.indexOf("Safari") != -1) {
//   document.querySelector(".heading-service").style.backgroundAttachment =
//     "unset";
//   document.querySelector(".main-container").style.backgroundAttachment =
//     "unset";
// }
