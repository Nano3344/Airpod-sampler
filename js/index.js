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

/* var modal = document.getElementById("themodal");
var closebtn = document.getElementById("closebtn");
var okbtn = document.getElementById("okbutton");

window.addEventListener('load', loadModal);
closebtn.addEventListener('click', closeModal);
okbtn.addEventListener('click', closeModal);

function loadModal() {
  document.getElementById("themodal").style.display = 'block';
}

function closeModal() {
  document.getElementById("themodal").style.display = 'none';
}*/

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
