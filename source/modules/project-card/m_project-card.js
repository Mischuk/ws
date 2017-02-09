$('.plans-gallery').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});
$('.slider-gallery').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  },
  callbacks: {
    buildControls: function() {
      this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
    }
  }
});

$('.print a').on('click', function(){
  window.print()
});

function projCarousel() {
  var $carousel = $('.projects-slider');
  $carousel
    .slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true,
      infinite: false,
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
        },
        {
          breakpoint: 568,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    })
    .magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      },
      delegate: '.slider-gallery-projects',
      callbacks: {
        beforeClose: function() {
          $carousel.slick('slickGoTo', parseInt(this.index));
        },
        buildControls: function() {
          this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
        }
      }
    });
}
projCarousel();
