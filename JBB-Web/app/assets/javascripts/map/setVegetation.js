var vegetation_on = false ;

function removeVegetationEcologicalStation(){
    //cerrado sensu strictu
    centerCerradoSparseAreaLeft.setMap(null);
    centerCerradoSparseAreaRightUp.setMap(null);
    centerCerradoSparseAreaRight.setMap(null);
    centerCerradoSparseArea.setMap(null);
    centerTypicalCerradoAreaUp.setMap(null);
    centerTypicalCerradoArea.setMap(null);
    drainCerradoSouth.setMap(null);
    smallDrainCerrado.setMap(null);

    centerBypassAreaCenter.setMap(null);
    centerBypassAreaLeft.setMap(null);
    centerBypassAreaRight.setMap(null);
    centerBypassAreaUp.setMap(null);
    centerForestGalleryArea.setMap(null);
    centerGroundAreaRight.setMap(null);
    centerGroundMurundunsAreaCenter.setMap(null);
    centerGroundMurundunsAreaLeft.setMap(null);
    centerGroundMurundunsAreaRight.setMap(null);
    centerGroundMurundunsArea.setMap(null);
    centerThickArea.setMap(null);
    dirtyFieldTypicalCerrado.setMap(null);
    smallRockCerrado.setMap(null);
    southAnthropicArea.setMap(null);
    southBypassArea.setMap(null);
    southCenterBypassArea.setMap(null);
    southCleanCamp.setMap(null);
    southGalleryBush.setMap(null);
    southLeftBypassArea.setMap(null);
    southPath.setMap(null);
    southRupestresAreaTop.setMap(null);
}

function addVegetationEcologicalStation(){
    //cerrado sensu strictu
    addCenterCerradoSparseAreaLeft();
    addCenterCerradoSparseAreaRightUp();
    addCenterCerradoSparseAreaRight();
    addCenterCerradoSparseArea();
    addCenterTypicalCerradoAreaUp();
    addCenterTypicalCerradoArea();
    addDrainCerradoSouth();
    addSmallDrainCerrado();

    addCenterBypassAreaCenter();
    addCenterBypassAreaLeft();
    addCenterBypassAreaRight();
    addCenterBypassAreaUp();
    addCenterForestGalleryArea();
    addCenterGroundAreaRight();
    addCenterGroundMurundunsAreaCenter();
    addCenterGroundMurundunsAreaLeft();
    addCenterGroundMurundunsAreaRight();
    addCenterGroundMurundunsArea();
    addCenterThickArea(); //CERRADÃO
    addDirtyFieldTypicalCerrado();
    addSmallRockCerrado();
    addSouthAnthropicArea();
    addSouthBypassArea();
    addSouthCenterBypassArea();
    addSouthCleanCamp();
    addSouthGalleryBush();
    addSouthLeftBypassArea();
    addSouthPath();
    addSouthRupestresAreaTop();
}

function removeVegetationVisitantsArea(){
    administrateAreaEvolutionGardem.setMap(null);
    anthropicAreaEvolutionGardem.setMap(null);
    anthropicArea.setMap(null);
    anthropicAreaAdministrate.setMap(null);
    centerGalleryBush.setMap(null);
    cleanCamp.setMap(null);
    denseCerrado.setMap(null);
    dryForest.setMap(null);
    eucalyptusTypicalCerrado.setMap(null);
    nursery.setMap(null);
    pinusAdministrateArea.setMap(null);
    pinusEvolutionGardem.setMap(null);
    pinusUrbanArea.setMap(null);
    smallDenseCerrado.setMap(null);
    smallTypicalCerradoArea.setMap(null);
    smallPinus.setMap(null);
    typicalCerradoDryForest.setMap(null);
    typicalCerradoCleanCamp.setMap(null);
    southDirtyFieldArea.setMap(null);
    southDirtyField.setMap(null);
    southEucalyptusOne.setMap(null);
    southEucalyptusTwo.setMap(null);
    southEucalyptusThree.setMap(null);
    southEucalyptusFour.setMap(null);
    southEucalyptusFive.setMap(null);
    southEucalyptusSix.setMap(null);
    southEucalyptusSeven.setMap(null);
    southEucalyptusEight.setMap(null);
    southEucalyptusNine.setMap(null);
    southEucalyptusTen.setMap(null);
    southEucalyptusEleven.setMap(null);
    southTypicalCerradoArea.setMap(null);
    visitantsCenterAdministrativeArea.setMap(null);
    urbanArea.setMap(null);
}

function addVegetationVisitantsArea(){
    addAdministrateAreaEvolutionGardem();
    addAnthropicAreaEvolutionGardem();
    addAnthropicArea();
    addAnthropicAreaAdministrate();
    addCenterGalleryBush();
    addCleanCamp();
    addDenseCerrado();
    addDryForest();
    addEucalyptusTypicalCerrado();
    addNursery();
    addPinusAdministrateArea();
    addPinusEvolutionGardem();
    addPinusUrbanArea();
    addSmallDenseCerrado();
    addSmallTypicalCerradoArea();
    addSmallPinus();
    addSouthDirtyFieldArea();
    addSouthDirtyField();
    addSouthEucalyptusOne();
    addSouthEucalyptusTwo();
    addSouthEucalyptusThree();
    addSouthEucalyptusFour();
    addSouthEucalyptusFive();
    addSouthEucalyptusSix();
    addSouthEucalyptusSeven();
    addSouthEucalyptusEight();
    addSouthEucalyptusNine();
    addSouthEucalyptusTen();
    addSouthEucalyptusEleven();
    addSouthTypicalCerradoArea();
    addTypicalCerradoDryForest();
    addTypicalCerradoCleanCamp();
    addVisitantsCenterAdministrativeArea();
    addUrbanArea();
}

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
