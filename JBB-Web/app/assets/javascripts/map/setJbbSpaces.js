var markers_on  = false;

//Shows or remove JBB spaces at the map
function setJbbSpaces() {
  if(markers_on) {
    amphitheaterMarker.setMap(null);
    cactusBoskMarker.setMap(null);
    centerOfExcellenceMarker.setMap(null);
    contemplationGardenMarker.setMap(null);
    evolutionaryGardenMarker.setMap(null);
    greenHouseMarker.setMap(null);
    hammockPlaceMarker.setMap(null);
    healingGardenMarker.setMap(null);
    infantParkMarker.setMap(null);
    japaneseGardenMarker.setMap(null);
    naturalLibraryMarker.setMap(null);
    orchidGardenMarker.setMap(null);
    parkingMarker.setMap(null);
    permacultureMarker.setMap(null);
    smellsGardenMarker.setMap(null);
    sunWatchMarker.setMap(null);
    teaHouseMarker.setMap(null);
    visitantCenterMarker.setMap(null);
    markers_on = false;
    infowindow.close();
  }
  else {
    addAmphitheaterMarker();
    addCactusBoskMarker();
    addCenterOfExcellenceMarker();
    addContemplationGardenMarker();
    addEvolutionaryGardenMarker();
    addGreenHouseMarker();
    addHammockPlaceMarker();
    addHealingGardenMarker();
    addInfantParkMarker();
    addJapaneseGardenMarker();
    addNaturalLibraryMarker();
    addOrchidGardenMaker(infowindow);
    addParkingMarker();
    addPermacultureMarker();
    addSmellsGardenMarker();
    addSunWatchMarker();
    addTeaHouseMarker();
    addVisitantCenterMaker();
    markers_on = true;
  }
}
