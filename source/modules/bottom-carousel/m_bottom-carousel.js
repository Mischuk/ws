function bottomCarousel() {
  $('.bottom-carousel').slick({
    dots: false,
    arrows: true,
    infinite: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  $('.article-carousel').slick({
    dots: false,
    arrows: true,
    infinite: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
}
bottomCarousel();