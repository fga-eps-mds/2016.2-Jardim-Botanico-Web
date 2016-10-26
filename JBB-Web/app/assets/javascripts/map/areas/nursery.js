var nurseryPolygon;
function addNurseryPolygon(){
  var nurseryPolygonCoords = [
{lat: -15.870385039563137, lng: -47.8452605009079},
{lat: -15.870684315939394, lng: -47.845614552497864},
{lat: -15.87083911389064, lng: -47.84575402736664},
{lat: -15.871236428087961, lng: -47.84588277339935},
{lat: -15.871417025191429, lng: -47.84627974033356},
{lat: -15.871293187195059, lng: -47.84644603729248},
{lat: -15.87160794195339, lng: -47.84669280052185},
{lat: -15.87172145994232, lng: -47.84674644470215},
{lat: -15.871773059007067, lng: -47.84690737724304},
{lat: -15.872330328064361, lng: -47.84697711467743},
{lat: -15.872335487955839, lng: -47.84670352935791},
{lat: -15.87200009473496, lng: -47.84563601016998},
{lat: -15.872098132811114, lng: -47.84544289112091},
{lat: -15.871391225615124, lng: -47.845088839530945},
{lat: -15.87040567932749, lng: -47.84521758556366},
  ];

  // Construct the polygon.
  nurseryPolygon = new google.maps.Polygon({
    paths:nurseryPolygonCoords,
    strokeColor: '#87E082',
    strokeOpacity: 0.1,
    strokeWeight: 3,
    fillColor: '#87E082',
    fillOpacity: 0.35
  });
  
  nurseryPolygon.setMap(map);
}