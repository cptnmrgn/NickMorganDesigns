var previousTop = null;
$(document).on("scroll",function(){
  var isOnTop = window.scrollY === 0;
  if (isOnTop) {
    //alert('top');
    // debugger;
    $('header').css('background-color', 'rgba(0,0,0,0)' );
    $('#home-logo').css('background-size', '7%');
    $('#home-logo').fadeIn(100);
    $('#nav-logo').addClass('invisible');
    $('#home-logo').animate({'background-size': '23%'}, 400);
  } else {
    
    $('#home-logo').animate({'background-size': '24%'}, 100);
    $('#home-logo').animate({'background-size': '7%'}, 400);
    $('#home-logo').fadeOut(100);
    setTimeout(navLogo, 500);
  }
  // $('#nav-logo').removeClass('invisible');
  // $('header').css('background-color', 'rgba(0,0,0,0.7)' );
});

var navLogo = function() {
  $('#nav-logo').removeClass('invisible');
  $('header').css('background-color', 'rgba(0,0,0,0.7)' );
}

//PROJECTS HOVER DESCRIPTIONS

$(".samples").mouseenter(function() {
  var info = $(this).children('.info').first();
  info.animate({top: '4%'}, {duration:400, queue:false});
  info.fadeIn(300);
  console.log("You gettin this?");
  });

$(".samples").mouseleave(function() {
  var info = $(this).children('.info').first();
  info.fadeOut(300);
  info.animate({top: '75%'}, {duration:400, queue:false});
  });

$('.nav-links a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
    return false;
});
