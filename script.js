
$(function () {
  AOS.init({
    duration: 1200,
  });

  // Hamburger Menu
  $('#bars').on('click', () => {
    console.log('clicked');
    
    $('.headerNav2').toggleClass('hidden');
    $('#bars').toggleClass('highlight');
  })
  
  // Dark/light toggle
  let toggle = document.querySelector('#toggle');
  toggle.addEventListener('click', modeSwitch);

  toggle = document.querySelector('#toggle2');
  toggle.addEventListener('click', modeSwitch);

  let isLight = true;

  function modeSwitch() {
    isLight = !isLight;
    isLight ? toggle.innerText = '🌞' : toggle.innerText = '🌚';
    const rootElement = document.body;
    rootElement.classList.toggle('lightMode');
  }
})

// Form reset
// document.getElementById("myForm").reset(); 


