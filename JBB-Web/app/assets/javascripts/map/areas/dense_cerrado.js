var denseCerradoPolygon;
function addDenseCerradoPolygon(){
  var denseCerradoPolygonCoords = [ 
  ];

    // Construct the polygon.
    denseCerradoPolygon = new google.maps.Polygon({
      paths: denseCerradoPolygonCoords,
      strokeColor: '#87B591',
      strokeOpacity: 0.1,
      strokeWeight: 3,
      fillColor: '#87B591',
      fillOpacity: 0.35
    });

    denseCerradoPolygon.setMap(map);
}