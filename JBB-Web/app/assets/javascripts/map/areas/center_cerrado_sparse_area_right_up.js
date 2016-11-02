var centerCerradoSparseAreaRightUpPolygon;
function addCenterCerradoSparseAreaRightUpPolygon(){
  var centerCerradoSparseAreaRightUpPolygonCoords = [
  {lat: -15.890033711222465, lng: -47.84201376285637},
  {lat: -15.890219450903947, lng: -47.84197084751213},
  {lat: -15.890714755883224, lng: -47.842078135872725},
  {lat: -15.89149898627418, lng: -47.84049026813591},
  {lat: -15.891274265627933, lng: -47.837578020898945},
  {lat: -15.890181615083051, lng: -47.838605623728654},
  {lat: -15.88934807785589, lng: -47.83908352284925}
  ];

    // Construct the polygon.
  centerCerradoSparseAreaRightUpPolygon = new google.maps.Polygon({
    paths: centerCerradoSparseAreaRightUpPolygonCoords,
    strokeColor: '#399E87',
    strokeOpacity: 0.1,
    strokeWeight: 3,
    fillColor: '#399E87',
    fillOpacity: 0.50
  });

  centerCerradoSparseAreaRightUpPolygon.setMap(map);
} 