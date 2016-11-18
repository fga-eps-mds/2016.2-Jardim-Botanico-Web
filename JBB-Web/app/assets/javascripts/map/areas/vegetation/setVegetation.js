var vegetation_on = false ;

function setVegetation() {
  if(vegetation_on) {
    removeVegetationVisitantsArea();
    removeVegetationEcologicalStation();
    vegetation_on = false;
    infowindow.close();
  }
  else {
    addVegetationVisitantsArea();
    addVegetationEcologicalStation();
    vegetation_on = true;
  }
}
