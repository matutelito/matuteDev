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
    if (currentPositionScroll > lastScrollTop && currentPositionScroll > 0 && !isNavigate){
      $('nav').addClass('hidden-nav');
    } 
    else {
      $('nav').removeClass('hidden-nav');
      $('nav').addClass('background-navBar');
    }
    if(currentPositionScroll < 1) $('nav').removeClass('background-navBar');
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
  isNavigate = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
  // location.href = initialLocation;
  history.pushState(null, "", "/");
});


$(".how").on("click", function (e) {
  e.preventDefault();
  location.href = `#how`;
  perfectScroll("scrollToHow", screen.width > 768 ? -100 : 10);
  // perfectScroll("howDo-contents", screen.width > 768 ? 150 : 10);
});

$(".theExperience").on("click", function (e) {
  e.preventDefault();
  location.href = `#what`;
  perfectScroll(`scrollToTheExperience`, screen.width > 768 ? 0 : -10);
});

$(".clients").on("click", function (e) {
  e.preventDefault();
  location.href = `#clients`;
  perfectScroll(`scrollToClients`, -40);
});

$(".team").on("click", function (e) {
  e.preventDefault();
  location.href = `#team`;
  perfectScroll(`scrolltoTeam`, 100);
});

$(".devsJuniors").on("click", function (e) {
  e.preventDefault();
  location.href = `#devsJuniors`;
  perfectScroll(`scrolltoDevsJunior`, -170);
});

$(".devsSeniors").on("click", function (e) {
  e.preventDefault();
  location.href = `#devsSeniors`;
  perfectScroll("scrolltoDevsSenior", 50);
});

$(".contact").on("click", function (e) {
  e.preventDefault();
  location.href = `#contact`;
  perfectScroll("contact", 0);
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
