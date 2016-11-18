function removeVegetationVisitantsAreaCampFormations(){
    //remove camp formations
    cleanCamp.setMap(null);
    southDirtyFieldArea.setMap(null);
    southDirtyField.setMap(null);
    typicalCerradoCleanCamp.setMap(null);
}

function addVegetationVisitantsAreaCampFormations(){
    //add camp formations
    addCleanCamp();
    addSouthDirtyFieldArea();
    addSouthDirtyField();
    addTypicalCerradoCleanCamp();
}
