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

    //=include modules.js
});