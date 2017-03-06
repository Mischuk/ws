function sidebarFilters() {
  var sliderFormat = document.getElementById('sidebar-slider-format');
  var input0 = document.getElementById('sidebar-input-start');
  var input1 = document.getElementById('sidebar-input-finish');
  var inputs = [input0, input1];
  var min = +($('#sidebar-input-start').attr('data-price-min'));
  var max = +($('#sidebar-input-finish').attr('data-price-max'));
  noUiSlider.create(sliderFormat, {
    start: [ min, max ],
    step: 10000,
    connect: true,
    range: {
      'min': [ min ],
      'max': [ max ]
    },
    pips: {
      mode: 'values',
      values: [min, max],
      density: 100,
      format: wNumb({
        decimals: 0,
        thousand: ' ',
        postfix: ' руб.',
      })
    },
    format: wNumb({
      decimals: 0,
      thousand: ' ',
      postfix: '',
    })
  });

  sliderFormat.noUiSlider.on('update', function( values, handle ) {
    inputs[handle].value = values[handle];
  });



  function setSliderHandle(i, value) {
    var r = [null,null];
    r[i] = value;
    sliderFormat.noUiSlider.set(r);
  }

  // Listen to keydown events on the input field.
  inputs.forEach(function(input, handle) {

    input.addEventListener('change', function(){
      setSliderHandle(handle, this.value);
    });

    input.addEventListener('keydown', function( e ) {

      var values = sliderFormat.noUiSlider.get();
      var value = Number(values[handle]);

      // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
      var steps = sliderFormat.noUiSlider.steps();

      // [down, up]
      var step = steps[handle];

      var position;

      // 13 is enter,
      // 38 is key up,
      // 40 is key down.
      switch ( e.which ) {

        case 13:
          setSliderHandle(handle, this.value);
          break;

        case 38:

          // Get step to go increase slider value (up)
          position = step[1];

          // false = no step is set
          if ( position === false ) {
            position = 1;
          }

          // null = edge of slider
          if ( position !== null ) {
            setSliderHandle(handle, value + position);
          }

          break;

        case 40:

          position = step[0];

          if ( position === false ) {
            position = 1;
          }

          if ( position !== null ) {
            setSliderHandle(handle, value - position);
          }

          break;
      }
    });
  });

  $('.price-inputs input').keypress(function (e) {
    if (e.which == 13) {
      return false;
    }
  });

  $(".price-inputs input").on("click", function () {
    $(this).select();
  });
};

if ( $('.m_find-project-form').length ) {
  sidebarFilters();
}