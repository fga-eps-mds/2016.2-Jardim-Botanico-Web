var markers_on  = false;

//Shows or remove JBB spaces at the map
function setJbbSpaces() {
  if(markers_on) {
    amphitheater.setMap(null);
    cactusBosk.setMap(null);
    centerOfExcellence.setMap(null);
    contemplationGarden.setMap(null);
    evolutionaryGarden.setMap(null);
    greenHouse.setMap(null);
    hammockPlace.setMap(null);
    healingGarden.setMap(null);
    infantPark.setMap(null);
    japaneseGarden.setMap(null);
    naturalLibrary.setMap(null);
    orchidGarden.setMap(null);
    parking.setMap(null);
    permaculture.setMap(null);
    smellsGarden.setMap(null);
    sunWatch.setMap(null);
    teaHouse.setMap(null);
    visitantCenter.setMap(null);
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
    addOrchidGardenMarker(infowindow);
    addParkingMarker();
    addPermacultureMarker();
    addSmellsGardenMarker();
    addSunWatchMarker();
    addTeaHouseMarker();
    addVisitantCenterMarker();

    markers_on = true;
  }
}
