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

window.addEventListener('load', loadModal);
if(closebtn) {
closebtn.addEventListener('click', closeModal);
}
function loadModal() {
  document.getElementById("themodal").style.display = 'block';
}

function closeModal() {
  document.getElementById("themodal").style.display = 'none';
}
