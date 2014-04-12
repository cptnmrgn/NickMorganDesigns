$( document ).ready(function(){
//LOGO RESIZE FUNCTION

var logoLarge = true;
var scrolledTop = window.scrollY === 0;

var animateSmall = function() {
  logoLarge = false;
  $('#nav-logo').animate({'top': '0%', 'left': '10px', 'width': '80px'}, 500);
};

var animateLarge = function() {
  logoLarge = true;
  $('#nav-logo').animate({'top': '3%', 'left': '1%', 'width': '23%'}, 500);
};

$(window).on('scroll', function() {
      scrolledTop = window.scrollY <= 0;
    if (scrolledTop && !logoLarge) {
      animateLarge();
    } else if (logoLarge && !scrolledTop) {
      animateSmall();
    };

  });




//PROJECTS HOVER DESCRIPTIONS

$(".samples").mouseenter(function() {
  var info = $(this).children('.info').first();
  info.animate({top: '0%'}, {duration:400, queue:false});
  info.fadeIn(300);
  console.log("You gettin this?");
  });

$(".samples").mouseleave(function() {
  var info = $(this).children('.info').first();
  info.fadeOut(300);
  info.animate({top: '93%'}, {duration:400, queue:false});
  });

$('.nav-links a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
    return false;
});

});
