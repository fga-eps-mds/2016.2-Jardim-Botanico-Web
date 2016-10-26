var administrateAreaEvolutionGardemPolygon;
function addAdministrateAreaEvolutionGardemPolygon(){
  var administrateAreaEvolutionGardemPolygonCoords = [
  {lat: -15.875235326062507, lng: -47.83722460269928},
  {lat: -15.87527144477932, lng: -47.837337255477905},
  {lat: -15.875457198077815, lng: -47.83717095851898},
  {lat: -15.875544914853673, lng: -47.837085127830505},
  {lat: -15.875679069848792, lng: -47.83701002597809},
  {lat: -15.875699709070872, lng: -47.83666670322418},
  {lat: -15.87556555408952, lng: -47.836629152297974},
  {lat: -15.875421079394293, lng: -47.836827635765076},
  {lat: -15.875343682193536, lng: -47.83680617809296},
  {lat: -15.875199207339216, lng: -47.83677399158478},
  ];

  // Construct the polygon.
  administrateAreaEvolutionGardemPolygon = new google.maps.Polygon({
    paths: administrateAreaEvolutionGardemPolygonCoords,
    strokeColor: '#DBDA7D',
    strokeOpacity: 0.1,
    strokeWeight: 3,
    fillColor: '#DBDA7D',
    fillOpacity: 0.50
  });
  
  administrateAreaEvolutionGardemPolygon.setMap(map);
}