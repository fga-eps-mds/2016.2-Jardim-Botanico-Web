var typicalCerradoDryForest;

  var typicalCerradoDryForestCoordinates = [
  ];

var typicalCerradoAreaColor = '#D3D6A1';

function addTypicalCerradoDryForest(){
  typicalCerradoDryForest = createVegetation(typicalCerradoDryForestCoordinates,
                                      typicalCerradoDryForestColor);  
  
  typicalCerradoDryForest.setMap(map);
}