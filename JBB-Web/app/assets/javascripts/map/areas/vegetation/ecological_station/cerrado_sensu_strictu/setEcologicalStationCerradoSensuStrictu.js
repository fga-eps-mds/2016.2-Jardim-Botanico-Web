function removeVegetationEcologicalStationCerradoSensuStrictu(){
    //cerrado sensu strictu
    centerCerradoSparseAreaLeft.setMap(null);
    centerCerradoSparseAreaRightUp.setMap(null);
    centerCerradoSparseAreaRight.setMap(null);
    centerCerradoSparseArea.setMap(null);
    centerTypicalCerradoAreaUp.setMap(null);
    centerTypicalCerradoArea.setMap(null);
    drainCerradoSouth.setMap(null);
    smallDrainCerrado.setMap(null);
    typicalCerradoWest.setMap(null);
    typicalCerradoWestRight.setMap(null);
}

function addVegetationEcologicalStationCerradoSensuStrictu(){
    //cerrado sensu strictu
    addCenterCerradoSparseAreaLeft();
    addCenterCerradoSparseAreaRightUp();
    addCenterCerradoSparseAreaRight();
    addCenterCerradoSparseArea();
    addCenterTypicalCerradoAreaUp();
    addCenterTypicalCerradoArea();
    addDrainCerradoSouth();
    addSmallDrainCerrado();
    addTypicalCerradoWest();
    addTypicalCerradoWestRight();
}
