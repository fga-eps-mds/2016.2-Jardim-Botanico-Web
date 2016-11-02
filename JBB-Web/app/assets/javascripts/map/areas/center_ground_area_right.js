var centerGroundAreaRightPolygon;
function addCenterGroundAreaRightPolygon(){
  var centerGroundAreaRightPolygonCoords = [
  {lat: -15.905235134311953, lng: -47.83575411891718},
  {lat: -15.905307361287521, lng: -47.8353893385065},
  {lat: -15.903646141527831, lng: -47.8344344720972},
  {lat: -15.901809497496874, lng: -47.83452030278568},
  {lat: -15.902180954946198, lng: -47.835046015752596},
  {lat: -15.90231279886138, lng: -47.83744327738532}
  ];

    // Construct the polygon.
  centerGroundAreaRightPolygon = new google.maps.Polygon({
    paths: centerGroundAreaRightPolygonCoords,
    strokeColor: '#42CCD0',
    strokeOpacity: 0.1,
    strokeWeight: 3,
    fillColor: '#42CCD0',
    fillOpacity: 0.50
  });

  centerGroundAreaRightPolygon.setMap(map);
} 