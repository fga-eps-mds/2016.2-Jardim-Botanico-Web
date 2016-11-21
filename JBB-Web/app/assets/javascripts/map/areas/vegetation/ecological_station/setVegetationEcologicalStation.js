function removeVegetationEcologicalStation(){
    removeVegetationEcologicalStationCerradoSensuStrictu();

    removeVegetationEcologicalStationCampFormations();

    removeVegetationEcologicalStationPaths();

    centerForestGalleryArea.setMap(null);

    centerGroundAreaRight.setMap(null);
    centerGroundMurundunsAreaCenter.setMap(null);
    centerGroundMurundunsAreaLeft.setMap(null);
    centerGroundMurundunsAreaRight.setMap(null);
    centerGroundMurundunsArea.setMap(null);

    centerThickArea.setMap(null);
    smallRockCerrado.setMap(null);
    southAnthropicArea.setMap(null);
    southGalleryBush.setMap(null);
    southRupestresAreaTop.setMap(null);
}

function addVegetationEcologicalStation(){
    addVegetationEcologicalStationCerradoSensuStrictu();

    addVegetationEcologicalStationCampFormations();

    addVegetationEcologicalStationPaths();

    addCenterForestGalleryArea();
    addCenterGroundAreaRight();
    addCenterGroundMurundunsAreaCenter();
    addCenterGroundMurundunsAreaLeft();
    addCenterGroundMurundunsAreaRight();
    addCenterGroundMurundunsArea();
    addCenterThickArea(); //CERRADÃO

    addSmallRockCerrado();
    addSouthAnthropicArea();
    addSouthGalleryBush();
    addSouthRupestresAreaTop();
}
