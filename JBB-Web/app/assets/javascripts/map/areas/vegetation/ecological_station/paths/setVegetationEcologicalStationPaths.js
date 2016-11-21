function removeVegetationEcologicalStationPaths(){
    //remove paths
    centerBypassAreaCenter.setMap(null);
    centerBypassAreaLeft.setMap(null);
    centerBypassAreaRight.setMap(null);
    centerBypassAreaUp.setMap(null);
    southBypassArea.setMap(null);
    southCenterBypassArea.setMap(null);
    southLeftBypassArea.setMap(null);
    southPath.setMap(null);
}

function addVegetationEcologicalStationPaths(){
    //add paths
    addCenterBypassAreaCenter();
    addCenterBypassAreaLeft();
    addCenterBypassAreaRight();
    addCenterBypassAreaUp();
    addSouthBypassArea();
    addSouthCenterBypassArea();
    addSouthLeftBypassArea();
    addSouthPath();
}
