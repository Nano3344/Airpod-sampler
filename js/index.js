/* Smooth scroll function */

$(function() {
  $('a[href^="#"]').stop().click(function() {
     if(location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
       var UD_HASH = this.hash;
       var UD_ZIEL = $(this.hash);
       if(UD_ZIEL.length) {
         var UD_ABSTAND_TOP = UD_ZIEL.offset().top;

         $('html, body').animate({scrollTop: UD_ABSTAND_TOP},600,function(){
            window.location.hash = UD_HASH;
         });
         return false;
       }

     }
  });
});

// Fade-in on scroll

const fader = document.querySelectorAll('.fade-in');

const options = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px"
};

const fadeOnScroll = new IntersectionObserver(function(
  entries, fadeOnScroll) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      fadeOnScroll.unobserve(entry.target);
    }
  });
  }, options);

  fader.forEach(fader => {
    fadeOnScroll.observe(fader);
  })

// Navbar Animation

var burgerNav = document.querySelector(".burger-nav");
var fullNav = document.querySelector(".full-nav");
var closeBtn = document.querySelector(".closeNav");
var navBackground = document.querySelector(".nav-background");
burgerNav.addEventListener('click', loadNav);
closeBtn.addEventListener('click', closeNav);

function loadNav() {
  fullNav.style.display = 'block';
  navBackground.style.display = 'block';
}

function closeNav() {
  fullNav.style.display = 'none';
  navBackground.style.display = 'none';
}

// Payment-Form

var buyButton = document.querySelector(".buy-now");
var paymentForm = document.querySelector(".paymentForm");
var payButton = document.querySelector(".pay-button");
var cancelButton = document.querySelector(".cancel-button");
buyButton.addEventListener('click', loadForm);
cancelButton.addEventListener('click', closeForm);

function loadForm() {
  document.getElementById("payment-wrapper-2").style.display = "block";
  navBackground.style.display = "block";
}
function closeForm() {
  document.getElementById("payment-wrapper-2").style.display = "none";
  navBackground.style.display = "none";
}
