$(document).ready(
);


// // mobile navbar 

$(".btn-menu-mobile").on("click", function () {
  $("#navBarMobile").toggle(250);
});

$("a").on("click", function () {
  $("#navBarMobile").css("display", "none");
});


// navbar - scroll
const heigthNav = document.getElementById("navBar").clientHeight;
let lastScrollTop = 0;
let isNavigate = false;  

window.addEventListener('scroll', (e) => {
  if(screen.width > 768){
    const currentPositionScroll = window.scrollY;
    if(currentPositionScroll > 600){
      $('#logo').addClass('navigate-home');
      $('#backToTop').addClass('show-nav');
    }
    else{
      $('#logo').removeClass('navigate-home');
      $('#backToTop').removeClass('show-nav');
    }
    if (currentPositionScroll > lastScrollTop && currentPositionScroll > 600 && !isNavigate){
      $('nav').addClass('hidden-nav');
    } 
    else {
      $('nav').removeClass('hidden-nav');
    }
    lastScrollTop = currentPositionScroll <= 0 ? 0 : currentPositionScroll;
  }
});

// effects - mouseevent
window.addEventListener('mousemove', (e) => {
  if(screen.width > 768){
    const currentPositionScroll = window.scrollY;
    if(currentPositionScroll > 500){
      heigthNav + 80 > e.clientY && $('nav').removeClass('hidden-nav');
    };
  }
});

// navigation - scroll
$(".scrollToTop").on("click", function (e) {
  e.preventDefault();
  location.href = initialLocation;
  window.scrollTo({ top: 0, behavior: "smooth" });
});


$(".how").on("click", function (e) {
  e.preventDefault();
  location.href = `#how`;
  perfectScroll("scrolltoHow", screen.width > 768 ? 150 : 10);
});

$(".what").on("click", function (e) {
  e.preventDefault();
  location.href = `#what`;
  perfectScroll(`weDoLayer`, screen.width > 768 ? 100 : -10);
});

$(".clients").on("click", function (e) {
  e.preventDefault();
  location.href = `#clients`;
  perfectScroll(`clients`, -40);
});

$(".team").on("click", function (e) {
  e.preventDefault();
  location.href = `#team`;
  perfectScroll(`scrolltoTeam`, 100);
});

$(".devsJuniors").on("click", function (e) {
  e.preventDefault();
  location.href = `#devsJuniors`;
  perfectScroll(`scrollToJuniors`, -80);
});

$(".devsSeniors").on("click", function (e) {
  e.preventDefault();
  location.href = `#devsSeniors`;
  perfectScroll("devsSeniorsLayer", -30);
});

$(".contact").on("click", function (e) {
  e.preventDefault();
  location.href = `#contact`;
  perfectScroll("contact", 10);
});

const perfectScroll = (section, marginToAdd) => { 
  const distanceCalculated = heigthNav + 30 + marginToAdd;
  const scrollToSection = document.getElementById(section).offsetTop;
  const scrollTo = scrollToSection - distanceCalculated;
  isNavigate = true;
  window.scrollTo({ top: scrollTo, behavior: "smooth" });
};

// is scrolling ?
const  noScroll = (callback, refresh = 100) => {
  if (!callback || typeof callback !== 'function') return;
  let isScrolling;
  window.addEventListener('scroll', function (event) {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(callback, refresh);
  }, false);
}

noScroll(function () {
  isNavigate = false;
});

// scroll effect 
// AOS.init({
//   once: true,
//   delay: 0,
//   offset: 0,
//   duration: 750,
//   easing: 'ease-out-cubic'
// });



