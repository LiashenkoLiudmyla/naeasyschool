$('.slider').bxSlider({
    mode: 'fade',
    controls:false,
    //auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  infiniteLoop: true,
  //pager: true,
  touchEnabled: true, 
});

$(".bx-prev").click ((e) => {
    e.preventDefault();
    slider.goToPrevSlide();
});
$(".bx-next").click ((e) => {
    e.preventDefault();
    slider.goToNextSlide();
});


