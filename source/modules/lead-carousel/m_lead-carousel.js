function carouselFill() {
  $('.lead-carousel .image').imagefill({
    throttle:1000/60
  });

  setTimeout(function(){
    $('.lead-carousel .slide').css('opacity', '1');

  }, 300);
}
function leadCarousel() {
  var $leadCarousel = $('.lead-carousel');
  $leadCarousel.on('init', function(){
    carouselFill();
  });
  $leadCarousel.slick({
    dots: true,
    arrows: true,
    infinite: false,
    adaptiveHeight: true
    // fade: true
  });

  $('.popover').webuiPopover({
     // placement:'top',
     placement:'auto-top',
     width: 370
  });

  $(window).on('resize', function(){
    WebuiPopovers.hideAll();
  })
};
leadCarousel();