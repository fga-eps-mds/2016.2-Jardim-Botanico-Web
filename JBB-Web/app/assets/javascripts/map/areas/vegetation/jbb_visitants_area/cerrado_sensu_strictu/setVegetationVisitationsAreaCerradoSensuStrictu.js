function removeVegetationVisitationsAreaCerradoSensuStrictu(){
    //cerrado sensu strictu
    denseCerrado.setMap(null);
    dirtyFieldTypicalCerrado.setMap(null);
    smallDenseCerrado.setMap(null);
    smallTypicalCerradoArea.setMap(null);
    southSmallDrainCerrado.setMap(null);
    southTypicalCerradoArea.setMap(null);
}

function addVegetationVisitationsAreaCerradoSensuStrictu(){
    //cerrado sensu strictu
    addDenseCerrado();
    addDirtyFieldTypicalCerrado();
    addSmallDenseCerrado();
    addSmallTypicalCerradoArea();
    addSouthSmallDrainCerrado();
    addSouthTypicalCerradoArea();
}