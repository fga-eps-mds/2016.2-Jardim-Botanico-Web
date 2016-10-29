var typicalCerradoDryForestPolygon;
function addTypicalCerradoDryForestPolygon(){
  var typicalCerradoDryForestPolygonCoords = [
  ];

  // Construct the polygon.
  typicalCerradoDryForestPolygon = new google.maps.Polygon({
    paths: typicalCerradoDryForestPolygonCoords,
    strokeColor: '#D3D6A1',
    strokeOpacity: 0.1,
    strokeWeight: 3,
    fillColor: '#D3D6A1',
    fillOpacity: 0.35
  });
  
  typicalCerradoDryForestPolygon.setMap(map);
}