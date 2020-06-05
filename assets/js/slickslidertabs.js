$(document).ready(function () {
  "use strict";
  $('#project-slider-1').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    asNavFor: '#pro-det-slider-1',
    autoplay: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
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


  $('#pro-det-slider-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '#project-slider-1',
    dots: false,
    fade: true,
    centerMode: true,
    autoplay: true,
    infinite: true,
  });


  $('#project-slider-2').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    asNavFor: '#pro-det-slider-2',
    autoplay: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
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


  $('#pro-det-slider-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '#project-slider-2',
    dots: false,
    fade: true,
    centerMode: true,
    autoplay: true,
    infinite: true,
  });
});