$(document).on("scroll",function(){
  $('#home-logo').animate({'background-size': '24%'}, 100);
  $('#home-logo').animate({'background-size': '7%'}, 400);
  $('#home-logo').fadeOut(100);
  setTimeout(navLogo, 500);
  // $('#nav-logo').removeClass('invisible');
  // $('header').css('background-color', 'rgba(0,0,0,0.7)' );
});

var navLogo = function() {
  $('#nav-logo').removeClass('invisible');
  $('header').css('background-color', 'rgba(0,0,0,0.7)' );
}

