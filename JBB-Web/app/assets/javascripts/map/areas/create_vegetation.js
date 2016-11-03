function createVegetation(vegetationCoordinates, vegetationColor){
  var vegetation = new google.maps.Polygon({
    paths: vegetationCoordinates,
    strokeColor: vegetationColor,
    strokeOpacity: 0.1,
    strokeWeight: 3,
    fillColor: vegetationColor,
    fillOpacity: 0.50
  });

  return (vegetation);
}
