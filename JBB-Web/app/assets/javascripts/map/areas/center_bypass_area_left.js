var centerBypassAreaLeftPolygon;
function addCenterBypassAreaLeftPolygon(){
  var centerBypassAreaLeftPolygonCoords = [
  {lat: -15.939661378899222, lng: -47.861046642719884},
  {lat: -15.93947568491381, lng: -47.86091789603233},
  {lat: -15.939083663713495, lng: -47.86055311560631},
  {lat: -15.938753540003283, lng: -47.86027416586876},
  {lat: -15.938402782965994, lng: -47.85993084311485},
  {lat: -15.93799012684288, lng: -47.86008104681969},
  {lat: -15.937639368470915, lng: -47.86091789603233},
  {lat: -15.937123546221741, lng: -47.860853523015976},
  {lat: -15.936752153381214, lng: -47.86008104681969},
  {lat: -15.936298227864803, lng: -47.85941585898399},
  {lat: -15.935741136054821, lng: -47.859651893377304},
  {lat: -15.935596704592367, lng: -47.860660403966904},
  {lat: -15.936009365637885, lng: -47.8613255918026},
  {lat: -15.93607126472151, lng: -47.86143288016319},
  {lat: -15.93640139284506, lng: -47.86205515265465},
  {lat: -15.936256961857845, lng: -47.862613052129745},
  {lat: -15.93633949386328, lng: -47.86327823996544},
  {lat: -15.936463291807762, lng: -47.863643020391464}
  ];

    // Construct the polygon.
  centerBypassAreaLeftPolygon = new google.maps.Polygon({
    paths: centerBypassAreaLeftPolygonCoords,
    strokeColor: '#A5D772',
    strokeOpacity: 0.1,
    strokeWeight: 3,
    fillColor: '#A5D772',
    fillOpacity: 0.50
  });

  centerBypassAreaLeftPolygon.setMap(map);
} 