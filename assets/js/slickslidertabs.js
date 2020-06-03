$(document).ready(function () {
  "use strict";

  $('.project-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
    asNavFor: '.pro-det-slider',
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.pro-det-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.project-slider',
    dots: false,
    fade: true,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    infinite: true,
  });



});