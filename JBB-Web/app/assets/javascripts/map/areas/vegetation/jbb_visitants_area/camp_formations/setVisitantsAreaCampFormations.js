function removeVegetationVisitantsAreaCampFormations(){
    //remove camp formations
    cleanCamp.setMap(null);
    smallCleanCamp.setMap(null);
    southDirtyFieldArea.setMap(null);
    southDirtyField.setMap(null);
    southSmallCleanCamp.setMap(null);
    typicalCerradoCleanCamp.setMap(null);

}

function addVegetationVisitantsAreaCampFormations(){
    //add camp formations
    addCleanCamp();
    addSmallCleanCamp();
    addSouthDirtyFieldArea();
    addSouthDirtyField();
    addSouthSmallCleanCamp();
    addTypicalCerradoCleanCamp();
}
