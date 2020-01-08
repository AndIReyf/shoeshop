$(function () {

  $('.header__burger').click(function () {
    $('.header__burger, .header__menu').toggleClass('active');
    $('html, body').toggleClass('lock');
  });

  $('.about-slider__wrap').slick({
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="../images/arrow-l.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../images/arrow-r.png" alt=""></button>',
    responsive: [{
      breakpoint: 1150,
      settings: {
        arrows: false,
        dots: true
      }
    }]
  });

  $('.blog__slider').slick({
    infinite: true,
    fade: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  new WOW().init({
  });

});