$(function() {
    $('a[href="#"]').click(function(e){ e.preventDefault(); });

    // IE10 хак для Surface/desktop Windows 8 бага
    (function () {
      'use strict';
      if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(
          document.createTextNode(
            '@-ms-viewport{width:auto!important}'
          )
        )
        document.querySelector('head').appendChild(msViewportStyle)
      }
    })();

    // Автоматическое увеличение высоты textarea
    autosize($('textarea'));

    // Кастомный селект
    $('select').select2({
      minimumResultsForSearch: Infinity
    });

    // Маски для инпутов
    function inputMask() {
      $(".mask-date").mask("99.99.9999",{placeholder:"__.__.____"});
      $(".mask-year").mask("9999",{placeholder:""});
      $(".mask-tel").mask("+7 (999) 999-99-99",{placeholder:"X"});
    };
    inputMask();

    // Модальные окна
    $('.popup').magnificPopup({
      type: 'inline',
      fixedContentPos: false,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
    });
    $('.m_item .video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
      });
    // Добавление названия прикрепленного файла в input[type=file]
    $('.inp-file').on('change', function(){
      if ( !$(this).val() == '' ) {
        var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
        $(this).parent().hide();
        $(this).parent().next().show();
        $(this).parent().next().find('.filename').text(filename);
      }
    });
    // Очистка input[type=file] и прикрепленного файла
    $('.remove-attached').on('click', function(){
      $(this).parent().hide();
      $(this).parent().prev().show();
      $(this).parent().prev().find('input').val('');
    });

    // Блок Читать далее(Подробнее)
    function excerpt() {
      var $excerptBtn = $('.excerpt-button');
      $excerptBtn.on('click', function(){
        $(this).text(function(i, text){
          return text === "Подробнее" ? "Скрыть" : "Подробнее";
        });
        $(this).prev().toggle();
      });
    }
    excerpt();

    function figures() {
      $('figure').each(function(){
        if ( $(this).next().is('figure') ){
          $(this).addClass('half');
          $(this).next().addClass('half');
        }
      });
    }
    figures();

    $('.comments-gallery').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });

    $('.result .left').imagefill({
      throttle:1000/60
    });

    function fullHelpHook() {
      var w = $(window).width();
      var $bg = $('.full-inner .bg');
      $bg.width(w);
      $bg.css('margin-left', -(w/2));
    }
    fullHelpHook();
    $(window).resize(fullHelpHook);


    $('.popup-window form, .m_contacts form').on('submit', function(){
      var magnificPopup = $.magnificPopup.instance;
      magnificPopup.close();
      setTimeout(function(){
        $('#success-trigger').trigger('click');
      },300);
      return false;
    });

    $('.view-complex').on('click', function(){
      $('html, body').animate({
        scrollTop: $('#view-complex').offset().top
      }, 1000);
    });

    $('.scrolltop').on('click', function(){
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    })

    $(window).scroll(function(){
      if ($(this).scrollTop() > 350) {
          $('.scrolltop').addClass('fixed');
      } else {
          $('.scrolltop').removeClass('fixed');
      }
    });
    //=include modules.js
});