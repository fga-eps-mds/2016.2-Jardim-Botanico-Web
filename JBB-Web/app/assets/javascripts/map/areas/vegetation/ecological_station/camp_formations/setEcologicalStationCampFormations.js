function removeVegetationEcologicalStationCampFormations(){
    //remove camp formations
    dirtyFieldTypicalCerrado.setMap(null);
    southCleanCamp.setMap(null);
    westCleanCamp.setMap(null);
    westCleanCampBelow.setMap(null);
    westCleanCampRight.setMap(null);
}

function addVegetationEcologicalStationCampFormations(){
    //add camp formations
    addDirtyFieldTypicalCerrado();
    addSouthCleanCamp();
    addWestCleanCamp();
    addWestCleanCampBelow();
    addWestCleanCampRight();
}
