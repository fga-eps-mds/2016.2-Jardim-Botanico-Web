var smallTypicalCerradoAreaPolygon;
function addSmallTypicalCerradoAreaPolygon(){
  var smallTypicalCerradoAreaPolygonCoords = [
{lat: -15.876189889973968, lng: -47.84364581108093},
{lat: -15.876932898752948, lng: -47.8445041179657},
{lat: -15.877283763057088, lng: -47.84479379653931},
{lat: -15.877799738864763, lng: -47.845094203948975},
{lat: -15.87840858861787, lng: -47.844836711883545},
{lat: -15.878171240627905, lng: -47.843302488327026},
{lat: -15.876809064146757, lng: -47.84295916557312},
{lat: -15.876592353402755, lng: -47.84292697906494},
{lat: -15.876427240298462, lng: -47.843313217163086},
{lat: -15.876365322849475, lng: -47.84347414970398},
  ];

  // Construct the polygon.
  smallTypicalCerradoAreaPolygon = new google.maps.Polygon({
    paths: smallTypicalCerradoAreaPolygonCoords,
    strokeColor: '#D3D6A1',
    strokeOpacity: 0.1,
    strokeWeight: 3,
    fillColor: '#D3D6A1',
    fillOpacity: 0.35
  });
  
  smallTypicalCerradoAreaPolygon.setMap(map);
}