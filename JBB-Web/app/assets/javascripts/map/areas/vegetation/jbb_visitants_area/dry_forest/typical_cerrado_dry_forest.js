var typicalCerradoDryForest;

  var typicalCerradoDryForestCoordinates = [
  ];

var typicalCerradoDryForestColor = '#D3D6A1';

function addTypicalCerradoDryForest(){
  typicalCerradoDryForest = createVegetation(typicalCerradoDryForestCoordinates,
                                      typicalCerradoDryForestColor);

  typicalCerradoDryForest.setMap(map);

  //add a listener to open a infowindow every time the river is clicked
  google.maps.event.addListener(typicalCerradoDryForest, 'click', function(clicked_location) {
      addInfowindow(clicked_location.latLng, dryForestContentString);
  });
}
