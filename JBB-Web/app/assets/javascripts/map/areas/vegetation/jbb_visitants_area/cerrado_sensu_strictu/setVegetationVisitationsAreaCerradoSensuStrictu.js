function removeVegetationVisitationsAreaCerradoSensuStrictu(){
    //cerrado sensu strictu
    centerDrainCerrado.setMap(null);
    denseCerrado.setMap(null);
    dirtyFieldTypicalCerrado.setMap(null);
    smallDenseCerrado.setMap(null);
    smallTypicalCerradoArea.setMap(null);
    southSmallDrainCerrado.setMap(null);
    southTypicalCerradoArea.setMap(null);
}

function addVegetationVisitationsAreaCerradoSensuStrictu(){
    //cerrado sensu strictu
    addCenterDrainCerrado();
    addDenseCerrado();
    addDirtyFieldTypicalCerrado();
    addSmallDenseCerrado();
    addSmallTypicalCerradoArea();
    addSouthSmallDrainCerrado();
    addSouthTypicalCerradoArea();
}