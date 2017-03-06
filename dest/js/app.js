$(function() {    $('a[href="#"]').click(function(e){ e.preventDefault(); });    // IE10 хак для Surface/desktop Windows 8 бага    (function () {      'use strict';      if (navigator.userAgent.match(/IEMobile\/10\.0/)) {        var msViewportStyle = document.createElement('style')        msViewportStyle.appendChild(          document.createTextNode(            '@-ms-viewport{width:auto!important}'          )        )        document.querySelector('head').appendChild(msViewportStyle)      }    })();    // Автоматическое увеличение высоты textarea    autosize($('textarea'));    // Кастомный селект    $('select').select2({      minimumResultsForSearch: Infinity    });    // Маски для инпутов    function inputMask() {      $(".mask-date").mask("99.99.9999",{placeholder:"__.__.____"});      $(".mask-year").mask("9999",{placeholder:""});      $(".mask-tel").mask("+7 (999) 999-99-99",{placeholder:"X"});    };    inputMask();    // Модальные окна    $('.popup').magnificPopup({      type: 'inline',      fixedContentPos: false,      fixedBgPos: true,      overflowY: 'auto',      closeBtnInside: true,      preloader: false,      midClick: true,      removalDelay: 300,      mainClass: 'my-mfp-zoom-in'    });    $('.m_item .video').magnificPopup({        disableOn: 700,        type: 'iframe',        mainClass: 'mfp-fade',        removalDelay: 160,        preloader: false,        fixedContentPos: false      });    // Добавление названия прикрепленного файла в input[type=file]    $('.inp-file').on('change', function(){      if ( !$(this).val() == '' ) {        var filename = $(this).val().replace(/C:\\fakepath\\/i, '');        $(this).parent().hide();        $(this).parent().next().show();        $(this).parent().next().find('.filename').text(filename);      }    });    // Очистка input[type=file] и прикрепленного файла    $('.remove-attached').on('click', function(){      $(this).parent().hide();      $(this).parent().prev().show();      $(this).parent().prev().find('input').val('');    });    // Блок Читать далее(Подробнее)    function excerpt() {      var $excerptBtn = $('.excerpt-button');      $excerptBtn.on('click', function(){        $(this).text(function(i, text){          return text === "Подробнее" ? "Скрыть" : "Подробнее";        });        $(this).prev().toggle();      });    }    excerpt();    function figures() {      $('figure').each(function(){        if ( $(this).next().is('figure') ){          $(this).addClass('half');          $(this).next().addClass('half');        }      });    }    figures();    $('.comments-gallery').magnificPopup({      type: 'image',      gallery:{        enabled:true      }    });    $('.result .left').imagefill({      throttle:1000/60    });    function fullHelpHook() {      var w = $(window).width();      var $bg = $('.full-inner .bg');      $bg.width(w);      $bg.css('margin-left', -(w/2));    }    fullHelpHook();    $(window).resize(fullHelpHook);    $('.popup-window form, .m_contacts form').on('submit', function(){      var magnificPopup = $.magnificPopup.instance;      magnificPopup.close();      setTimeout(function(){        $('#success-trigger').trigger('click');      },300);      return false;    });    function bottomCarousel() {      $('.bottom-carousel').slick({        dots: false,        arrows: true,        infinite: false,        mobileFirst: true,        responsive: [          {            breakpoint: 1200,            settings: {              slidesToShow: 4            }          },          {            breakpoint: 768,            settings: {              slidesToShow: 3            }          }, {            breakpoint: 480,            settings: {              slidesToShow: 2            }          }        ]      });      $('.article-carousel').slick({        dots: false,        arrows: true,        infinite: false,        mobileFirst: true,        responsive: [          {            breakpoint: 768,            settings: {              slidesToShow: 3            }          }, {            breakpoint: 480,            settings: {              slidesToShow: 2            }          }        ]      });    }    bottomCarousel();
    function sidebarFilters() {      var sliderFormat = document.getElementById('sidebar-slider-format');      var input0 = document.getElementById('sidebar-input-start');      var input1 = document.getElementById('sidebar-input-finish');      var inputs = [input0, input1];      var min = +($('#sidebar-input-start').attr('data-price-min'));      var max = +($('#sidebar-input-finish').attr('data-price-max'));      noUiSlider.create(sliderFormat, {        start: [ min, max ],        step: 10000,        connect: true,        range: {          'min': [ min ],          'max': [ max ]        },        pips: {          mode: 'values',          values: [min, max],          density: 100,          format: wNumb({            decimals: 0,            thousand: ' ',            postfix: ' руб.',          })        },        format: wNumb({          decimals: 0,          thousand: ' ',          postfix: '',        })      });      sliderFormat.noUiSlider.on('update', function( values, handle ) {        inputs[handle].value = values[handle];      });      function setSliderHandle(i, value) {        var r = [null,null];        r[i] = value;        sliderFormat.noUiSlider.set(r);      }      // Listen to keydown events on the input field.      inputs.forEach(function(input, handle) {        input.addEventListener('change', function(){          setSliderHandle(handle, this.value);        });        input.addEventListener('keydown', function( e ) {          var values = sliderFormat.noUiSlider.get();          var value = Number(values[handle]);          // [[handle0_down, handle0_up], [handle1_down, handle1_up]]          var steps = sliderFormat.noUiSlider.steps();          // [down, up]          var step = steps[handle];          var position;          // 13 is enter,          // 38 is key up,          // 40 is key down.          switch ( e.which ) {            case 13:              setSliderHandle(handle, this.value);              break;            case 38:              // Get step to go increase slider value (up)              position = step[1];              // false = no step is set              if ( position === false ) {                position = 1;              }              // null = edge of slider              if ( position !== null ) {                setSliderHandle(handle, value + position);              }              break;            case 40:              position = step[0];              if ( position === false ) {                position = 1;              }              if ( position !== null ) {                setSliderHandle(handle, value - position);              }              break;          }        });      });      $('.price-inputs input').keypress(function (e) {        if (e.which == 13) {          return false;        }      });      $(".price-inputs input").on("click", function () {        $(this).select();      });    };    if ( $('.m_find-project-form').length ) {      sidebarFilters();    }
    function mobileMenu() {      var $bgLayout = $('.bg-layout');      var $mobileMenuButton = $('.mobile-menu');      var $bottomHeader = $('.bottom-header');      $mobileMenuButton.on('click', function(){        $bottomHeader.toggleClass('is-opened');        $bgLayout.toggleClass('is-active');      });      $bgLayout.on('click', function(){        $bottomHeader.removeClass('is-opened');        $bgLayout.removeClass('is-active');      });    }    mobileMenu();    function mobileMenuAccordion() {      $('.dropdown-menu').on('click', function(){        if ( $(this).hasClass('is-active') ) {          $(this).removeClass('is-active');          return false;        } else {          $('.dropdown-menu').removeClass('is-active');          $(this).addClass('is-active');          return false;        }      });    }    mobileMenuAccordion();
    console.log('Layout generated');
    function carouselFill() {      $('.lead-carousel .image').imagefill({        throttle:1000/60      });      setTimeout(function(){        $('.lead-carousel .slide').css('opacity', '1');      }, 300);    }    function leadCarousel() {      var $leadCarousel = $('.lead-carousel');      $leadCarousel.on('init', function(){        carouselFill();      });      $leadCarousel.slick({        dots: false,        arrows: true,        infinite: false,        adaptiveHeight: true        // fade: true      });      $('.popover').webuiPopover({         // placement:'top',         placement:'auto-top',         width: 370      });      $(window).on('resize', function(){        WebuiPopovers.hideAll();      })    };    leadCarousel();
    if ( $('.m_lead-map').length ) {      ymaps.ready(function () {        var myMap = new ymaps.Map('map', {          center: [55.751574, 37.522856],          zoom: 13,          controls: ['zoomControl']        }, {          searchControlProvider: 'yandex#search'        }),        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {          hintContent: '',          balloonContent: ''        }, {          iconLayout: 'default#image',          iconImageHref: 'images/marker.png',          iconImageSize: [42, 56],          iconImageOffset: [-22, -56]        });        myMap.geoObjects.add(myPlacemark);        myMap.behaviors.disable('scrollZoom');      });    }    $('.plans-gallery').magnificPopup({      type: 'image',      gallery:{        enabled:true      }    });    $('.slider-gallery').magnificPopup({      type: 'image',      gallery:{        enabled:true      },      callbacks: {        buildControls: function() {          this.contentContainer.append(this.arrowLeft.add(this.arrowRight));        }      }    });    $('.print a').on('click', function(){      window.print()    });    function projCarousel() {      var $carousel = $('.projects-slider');      $carousel        .slick({          slidesToShow: 5,          slidesToScroll: 1,          dots: false,          arrows: true,          centerMode: false,          focusOnSelect: true,          infinite: false,          responsive: [            {              breakpoint: 1200,              settings: {                slidesToShow: 4              }            },            {              breakpoint: 768,              settings: {                slidesToShow: 3              }            },            {              breakpoint: 568,              settings: {                slidesToShow: 2              }            }          ]        })        .magnificPopup({          type: 'image',          gallery:{            enabled:true          },          delegate: '.slider-gallery-projects',          callbacks: {            beforeClose: function() {              $carousel.slick('slickGoTo', parseInt(this.index));            },            buildControls: function() {              this.contentContainer.append(this.arrowLeft.add(this.arrowRight));            }          }        });    }    projCarousel();    function projectCardTabs() {      var $nav = $('.project-card-tabs-nav a');      var $content = $('.project-card-tabs-content section');      $nav.on('click', function(){        var $this = $(this);        $nav.removeClass('current');        $this.addClass('current');        $content.removeClass('current');        $content.eq($this.index()).addClass('current');      });    }    projectCardTabs();
    function projectsCarousel() {      var $projCarousel = $('.projects-carousel');      $projCarousel.on('init', function(){        $('.m_projects-carousel').css('opacity', '1');      });      $projCarousel.slick({        infinite: false,        slidesToShow: 2,        slidesToScroll: 1,        mobileFirst: true,        responsive: [          {            breakpoint: 992,            settings: {              slidesToShow: 6            }          },          {            breakpoint: 768,            settings: {              slidesToShow: 5            }          },          {            breakpoint: 640,            settings: {              slidesToShow: 4            }          },          {            breakpoint: 480,            settings: {              slidesToShow: 3            }          }        ]      });    }    projectsCarousel();
    function slider() {      $('.slider-for').slick({        slidesToShow: 1,        slidesToScroll: 1,        arrows: true,        fade: true,        asNavFor: '.slider-nav'      });      $('.slider-nav').slick({        slidesToShow: 5,        slidesToScroll: 1,        asNavFor: '.slider-for',        dots: false,        arrows: true,        centerMode: false,        focusOnSelect: true,        infinite: false,        mobileFirst: true,        responsive: [          {            breakpoint: 1200,            settings: {              slidesToShow: 5            }          },          {            breakpoint: 768,            settings: {              slidesToShow: 4            }          }        ]      });    }    slider();});