const hamburger = $('.header-nav');

$('.hamburger-button').on('click', function () {
  hamburger.toggleClass('header-nav-active');
  $('.hamburger-button').toggleClass('hamburger-button-open');
});


$(window).on('resize scroll', function () {
  hamburger.removeClass('header-nav-active');
  $('.hamburger-button').removeClass('hamburger-button-open');
});
