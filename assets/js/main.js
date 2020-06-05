$(document).ready(function(){
  $('.header-slider-pic').slick({
    dots: false,
    arrows: true,
  });


  $('.project-details-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
  });

});


var fileInput = document.querySelector('.custom-file-input');
var fileNamePlace = document.querySelector('#file-name')
// console.log();
fileInput.addEventListener('change', ()=>{
  var fileName = fileInput.files[0].name;
  fileNamePlace.textContent = fileName;
})