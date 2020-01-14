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

var modal = document.getElementById("themodal");
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
}

// Navbar Animation

var burgerNav = document.querySelector(".burger-nav");
var fullNav = document.querySelector(".full-nav");
var closeBtn = document.querySelector(".closeNav");
burgerNav.addEventListener('click', loadNav);
closeBtn.addEventListener('click', closeNav);

function loadNav() {
  document.getElementById("full-nav").style.display = 'block';
}

function closeNav() {
  document.getElementById("full-nav").style.display = 'none';
}
