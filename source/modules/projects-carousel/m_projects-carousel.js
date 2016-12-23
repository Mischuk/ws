function projectsCarousel() {
  var $projCarousel = $('.projects-carousel');
  $projCarousel.on('init', function(){
    $('.m_projects-carousel').css('opacity', '1');
  });
  $projCarousel.slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
}
projectsCarousel();