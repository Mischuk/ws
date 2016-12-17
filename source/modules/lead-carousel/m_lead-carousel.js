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
    dots: false,
    arrows: false,
    infinite: false
    // fade: true
  })
};
leadCarousel();