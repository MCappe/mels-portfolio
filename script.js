// Namespacing
const portfolioSite = {};

// Initializer function

portfolioSite.init = () => {
  portfolioSite.eventListener();
}

portfolioSite.eventListener = () => {
  
}

$(function () {
  AOS.init({
    duration: 1200,
  });
})


$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $(".menu-toggle").toggleClass("menu-open");
    $(".menu").toggleClass("active");
  });
  $(".link").click(function () {
    $(".menu-toggle").toggleClass("menu-open");
    $(".menu").toggleClass("active");
  });
});

document.getElementById("myForm").reset(); 
