function mobileMenu() {
  var $bgLayout = $('.bg-layout');
  var $mobileMenuButton = $('.mobile-menu');
  var $bottomHeader = $('.bottom-header');
  $mobileMenuButton.on('click', function(){
    $bottomHeader.toggleClass('is-opened');
    $bgLayout.toggleClass('is-active');
  });

  $bgLayout.on('click', function(){
    $bottomHeader.removeClass('is-opened');
    $bgLayout.removeClass('is-active');
  });
}
mobileMenu();

function mobileMenuAccordion() {
  $('.dropdown-menu').on('click', function(){
    if ( $(this).hasClass('is-active') ) {
      $(this).removeClass('is-active');
      return false;
    } else {
      $('.dropdown-menu').removeClass('is-active');
      $(this).addClass('is-active');
      return false;
    }
  });
}
mobileMenuAccordion();