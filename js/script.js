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


$(".mob_service_dropdown ").click(function(e){
  e.preventDefault()
  $(this).next().slideToggle()
  $(this).toggleClass("active")
})

var userAgent = window.navigator.userAgent;

if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
   // iPad or iPhone


   $(".main-container").addClass("saf")
   $(".heading-service").addClass("saf")
}

if(navigator.userAgent.indexOf("Safari") != -1)
    {
     
   $(".main-container").addClass("saf")
   $(".heading-service").addClass("saf")
    }