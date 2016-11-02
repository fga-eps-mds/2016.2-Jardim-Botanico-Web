var pinusUrbanAreaPolygon;
function addPinusUrbanAreaPolygon(){
  var pinusUrbanAreaPolygonCoords = [
  {lat: -15.867211650648583, lng: -47.839858531951904},
  {lat: -15.867108450170285, lng: -47.840309143066406},
  {lat: -15.867727652247583, lng: -47.84048080444336},
  {lat: -15.868522292126556, lng: -47.84079194068909},
  {lat: -15.869089890122059, lng: -47.840373516082764},
  {lat: -15.868646131825551, lng: -47.84020185470581},
  {lat: -15.867387091340444, lng: -47.83987998962402},
  ];

  // Construct the polygon.
  pinusUrbanAreaPolygon = new google.maps.Polygon({
    paths: pinusUrbanAreaPolygonCoords,
    strokeColor: '#BAE3A9',
    strokeOpacity: 0.1,
    strokeWeight: 3,
    fillColor: '#BAE3A9',
    fillOpacity: 0.35
  });
  
  pinusUrbanAreaPolygon.setMap(map);
}