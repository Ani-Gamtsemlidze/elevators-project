const menuBar = document.querySelector(".menu-bar");

const close = document.querySelector(".mobile-close-click");

menuBar.addEventListener("click", function () {
  document.querySelector(".mobile-menu").classList.add("active");
});

close.addEventListener("click", function () {
  document.querySelector(".mobile-menu").classList.remove("active");
});

// document.getElementsByClassName("mob_service_dropdown")[0].addEventListener("click",function(e){

//     e.preventDefault()
//    this.classList.toggle("active")
//     document.getElementById("mobile-list").classList.toggle("active")
// })
