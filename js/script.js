// Preload
$(window).load(function() {
   $("#loading").fadeOut(5000);
})
// Humburger Menu
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

$(document).ready(function(){

    // counterUp
    $('.counters').counterUp({
        delay: 100,
        time: 1000
    });

    // Scrolltop
    $('body').materialScrollTop();

});