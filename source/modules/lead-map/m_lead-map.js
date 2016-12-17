if ( $('.m_lead-map').length ) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [55.751574, 37.522856],
      zoom: 13,
      controls: ['zoomControl']
    }, {
      searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: '',
      balloonContent: ''
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'images/marker.png',
      iconImageSize: [42, 56],
      iconImageOffset: [-22, -56]
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
  });
}
