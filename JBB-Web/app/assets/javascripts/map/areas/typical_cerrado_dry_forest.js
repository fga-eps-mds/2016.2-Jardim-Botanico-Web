var typicalCerradoDryForest;

  var typicalCerradoDryForestCoordinates = [
  ];

var typicalCerradoDryForestColor = '#D3D6A1';

function addTypicalCerradoDryForest(){
  typicalCerradoDryForest = createVegetation(typicalCerradoDryForestCoordinates,
                                      typicalCerradoDryForestColor);  
  
  typicalCerradoDryForest.setMap(map);
}