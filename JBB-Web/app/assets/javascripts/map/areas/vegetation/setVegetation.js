var vegetation_on = false ;

function setVegetation() {
  if(vegetation_on) {
    removeVegetationVisitantsArea();
    removeVegetationEcologicalStation();

    addJbbVisitantsArea();
    addJbbEcologicalStation();

    vegetation_on = false;
    infowindow.close();
  }
  else {
    addVegetationVisitantsArea();
    addVegetationEcologicalStation();

    jbbEcologicalStation.setMap(null);
    jbbVisitantsArea.setMap(null);

    vegetation_on = true;
  }
}
