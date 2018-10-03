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

/* Nav bar animation */

$(document).ready(function() {

    var UD_MENU_ELEMENTS = $('body div a img');

    var UD_AKTUELL = 0;
    var UD_OBJEKT_TOP;

    var UD_OBJEKT = $(UD_MENU_ELEMENTS[0]);
    UD_OBJEKT.addClass('ud_menu_aktive');

    $(window).scroll(function() {
      for(var i = 0; i < UD_MENU_ELEMENTS.length; i++) {
          var UD_LINK = $(UD_MENU_ELEMENTS[i]).attr('href');

          if($(UD_LINK).length) {
            UD_OBJEKT_TOP = $(UD_LINK).offset().top;
          }

          var UD_SCROLL_TOP = $(window).scrollTop();
          var UD_DIF = Math.abs(UD_SCROLL_TOP - UD_OBJEKT_TOP);

          if(i === 0) {
            UD_AKTUELL = UD_DIF;
            UD_OBJEKT = $(UD_MENU_ELEMENTS[i]);
            $('body div a img').removeClass('ud_menu_aktive');
            UD_OBJEKT.addClass('ud_menu_aktive');
          } else {
            if(UD_DIF < UD_AKTUELL || UD_DIF === UD_AKTUELL) {
              UD_AKTUELL = UD_DIF;
              UD_OBJEKT = $(UD_MENU_ELEMENTS[i]);
              $('div a img').removeClass('ud_menu_aktive');
              UD_OBJEKT.addClass('ud_menu_aktive');
            }
          }
      }

    });
});

/* Fade out nav-bar on scrolling down */

$(function() {
  var header = $('nav-bar');
  var faded;
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > 50) {
      header.fadeOut();
      faded = true;
      console.log(faded);
    } else {
      header.fadeIn();
      faded = false;
      console.log(faded);
    }
  });
});

/* Splash screen */

for(var i = 0; i < 5000; i++) {
  if(i >= 5000) {
    $('body').addClass('stop-scroll');
  }
  else if(i == 5000) {
    document.getElementById('splash-screen').style.opacity = 0;
  }
}
