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
  }
});

$('.print a').on('click', function(){
  window.print()
});