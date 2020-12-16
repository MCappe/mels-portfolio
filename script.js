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
  
  // Dark/light toggle
  const toggle = document.querySelector("#toggle");
  toggle.addEventListener("click", modeSwitch);

  let isLight = true;

  function modeSwitch() {
    isLight = !isLight;
    isLight ? toggle.innerText = "🌞" : toggle.innerText = "🌚";
    const rootElement = document.body;
    rootElement.classList.toggle("lightMode");
  }
})

// Hamburger menu
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

// Form reset
document.getElementById("myForm").reset(); 


