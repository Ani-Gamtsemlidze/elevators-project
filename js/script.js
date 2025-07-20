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

$(".mob_service_dropdown ").click(function (e) {
  e.preventDefault();
  $(this).next().slideToggle();
  $(this).toggleClass("active");
});

const questionHeaders = document.querySelectorAll(".question-header");

questionHeaders.forEach((header) => {
  header.addEventListener("click", function () {
    const questionItem = header.closest(".questions-content-item");
    const answerText = questionItem.querySelector(".answer-text");
    const icon = header.querySelector(".questions-icon");
    const isActive = icon.classList.contains("active");

    questionHeaders.forEach((otherHeader) => {
      if (otherHeader !== header) {
        const otherItem = otherHeader.closest(".questions-content-item");
        const otherAnswer = otherItem.querySelector(".answer-text");
        const otherIcon = otherHeader.querySelector(".questions-icon");
        otherIcon.classList.remove("active");
        otherAnswer.style.display = "none";
      }
    });

    icon.classList.toggle("active");
    questionItem.classList.toggle("active");

    if (!isActive) {
      answerText.style.display = "block";
    } else {
      answerText.style.display = "none";
    }
  });
});
