$(window).load(function() {
  loadScript();
});

var map;
var infowindow;
var rivers_on = false;
var markers_on  = false;
var vegetation_on = false;
var trails;

function initialize() {
  var mapOptions = {
        // center: new google.maps.LatLng(37.783, -122.403),
        center: new google.maps.LatLng(-15.872652, -47.836588),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.NORMAL,
        panControl: true,
        scaleControl: false,
        streetViewControl: true,
        overviewMapControl: true
      };

    // initializing map
    map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
    infowindow = new google.maps.InfoWindow();
    addJbbVisitantsArea();
    addJbbEcologicalStation();
}

  function setJbbRivers() {
    if(rivers_on) {
      taperaRiver.setMap(null);
      redentorCristRiver.setMap(null);
      redentorCristRiverArm.setMap(null);
      cochoRiver.setMap(null);
      taperaRiverArm.setMap(null);
      taperaRiverArm2.setMap(null);
      deerHeadRiver.setMap(null);
      caesb1River.setMap(null);
      caesb2River.setMap(null);
      caesb3River.setMap(null);
      caesb4River.setMap(null);
      deerHeadRiverArm.setMap(null);
      deerHeadRiverArm2.setMap(null);
      deerHeadRiverArm3.setMap(null);

      infowindow.close();
      rivers_on = false;
    }
    else {
      addTaperaRiver();
      addRedentorCristRiver();
      addRedentorCristRiverArm();
      addCochoRiver();
      addTaperaRiverArm();
      addTaperaRiverArm2();
      addDeerHeadRiver();
      addCaesb1River();
      addCaesb2River();
      addCaesb3River();
      addCaesb4River();
      addDeerHeadRiverArm();
      addDeerHeadRiverArm2();
      addDeerHeadRiverArm3();

      rivers_on = true;
    }
  }

  function setVegetation() {
    if(vegetation_on) {
      administrateAreaEvolutionGardem.setMap(null);
      anthropicAreaEvolutionGardem.setMap(null);
      anthropicArea.setMap(null);
      anthropicAreaAdministrate.setMap(null);
      centerBypassAreaCenter.setMap(null);
      centerBypassAreaLeft.setMap(null);
      centerBypassAreaRight.setMap(null);
      centerBypassAreaUp.setMap(null);
      centerCerradoSparseAreaLeft.setMap(null);
      centerCerradoSparseAreaRightUp.setMap(null);
      centerCerradoSparseAreaRight.setMap(null);
      centerCerradoSparseArea.setMap(null);
      centerForestGaleriaArea.setMap(null);
      centerGalleryBush.setMap(null);
      centerGroundAreaRight.setMap(null);
      centerGroundMurundunsAreaCenter.setMap(null);
      centerGroundMurundunsAreaLeft.setMap(null);
      centerGroundMurundunsAreaRight.setMap(null);
      centerGroundMurundunsArea.setMap(null);
      centerThickArea.setMap(null);
      centerTypicalCerradoAreaUp.setMap(null);
      centerTypicalCerradoArea.setMap(null);
      cleanCamp.setMap(null);
      denseCerrado.setMap(null);
      dirtyFieldTypicalCerrado.setMap(null);
      drainCerradoSouth.setMap(null);
      dryForest.setMap(null);
      eucalyptusTypicalCerrado.setMap(null);
      nursery.setMap(null);

      pinusAdministrateArea.setMap(null);
      pinusEvolutionGardem.setMap(null);
      visitantsCenterAdministrativeAreaPolygon.setMap(null);
      urbanAreaPolygon.setMap(null);
      smallDenseCerrado.setMap(null);
      pinusUrbanArea.setMap(null);
      smallPinus.setMap(null);
      typicalCerradoDryForestPolygon.setMap(null);
      typicalCerradoCleanCampPolygon.setMap(null);
      southAnthropicArea.setMap(null);
      southBypassArea.setMap(null);
      southDirtyFieldArea.setMap(null);
      southDirtyField.setMap(null);
      southLeftBypassAreaPolygon.setMap(null);
      southCenterBypassArea.setMap(null);
      southRupestresAreaTopPolygon.setMap(null);
      southCleanCamp.setMap(null);
      southPathPolygon.setMap(null);
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
      southGalleryBushPolygon.setMap(null);
      southTypicalCerradoAreaPolygon.setMap(null);
      smallDrainCerrado.setMap(null);
      smallRockCerrado.setMap(null);
      smallTypicalCerradoArea.setMap(null);
      vegetation_on = false;
      infowindow.close();
    }
    else {
      addAdministrateAreaEvolutionGardem();
      addAnthropicAreaEvolutionGardem();
      addAnthropicArea();
      addAnthropicAreaAdministrate();
      addCenterBypassAreaCenter();
      addCenterBypassAreaLeft();
      addCenterBypassAreaRight();
      addCenterBypassAreaUp();
      addCenterCerradoSparseAreaLeft();
      addCenterCerradoSparseAreaRightUp();
      addCenterCerradoSparseAreaRight();
      addCenterCerradoSparseArea();
      addCenterForestGaleriaArea();
      addCenterGalleryBush();
      addCenterGroundAreaRight();
      addCenterGroundMurundunsAreaCenter();
      addCenterGroundMurundunsAreaLeft();
      addCenterGroundMurundunsAreaRight();
      addCenterGroundMurundunsArea();
      addCenterThickArea();
      addCenterTypicalCerradoAreaUp();
      addCenterTypicalCerradoArea();
      addCleanCamp();
      addDenseCerrado();
      addDirtyFieldTypicalCerrado();
      addDrainCerradoSouth();
      addDryForest();
      addEucalyptusTypicalCerrado();
      addNursery();
      addUrbanAreaPolygon();
      addVisitantsCenterAdministrativeAreaPolygon();
      addSmallDenseCerrado();
      addPinusEvolutionGardem();
      addPinusAdministrateArea();
      addPinusUrbanArea();
      addSmallPinus();
      addTypicalCerradoDryForestPolygon();
      addTypicalCerradoCleanCampPolygon();
      addSouthAnthropicArea();
      addSouthBypassArea();
      addSouthDirtyField();
      addSouthDirtyFieldArea();
      addSouthLeftBypassAreaPolygon();
      addSouthCenterBypassArea();
      addSouthRupestresAreaTopPolygon();
      addSouthEucalyptusOnePolygon();
      addSouthEucalyptusTwoPolygon();
      addSouthEucalyptusThreePolygon();
      addSouthEucalyptusFourPolygon();
      addSouthEucalyptusFivePolygon();
      addSouthEucalyptusSixPolygon();
      addSouthEucalyptusSevenPolygon();
      addSouthEucalyptusEight();
      addSouthEucalyptusNinePolygon();
      addSouthEucalyptusTenPolygon();
      addSouthEucalyptusElevenPolygon();
      addSouthCleanCamp();
      addSouthTypicalCerradoAreaPolygon();
      addSouthGalleryBushPolygon();
      addSouthPathPolygon();
      addSmallDrainCerrado();
      addSmallTypicalCerradoArea();
      addSmallRockCerrado();
      vegetation_on = true;
    }
}

//Shows or remove JBB spaces at the map
function setJbbSpaces() {
  if(markers_on) {
    amphitheaterMarker.setMap(null);
    cactusBoskMarker.setMap(null);
    centerOfExcellenceMarker.setMap(null);
    contemplationGardenMarker.setMap(null);
    evolutionaryGardenMarker.setMap(null);
    greenHouseMarker.setMap(null);
    hammockPlaceMarker.setMap(null);
    healingGardenMarker.setMap(null);
    infantParkMarker.setMap(null);
    japaneseGardenMarker.setMap(null);
    naturalLibraryMarker.setMap(null);
    orchidGardenMarker.setMap(null);
    parkingMarker.setMap(null);
    permacultureMarker.setMap(null);
    smellsGardenMarker.setMap(null);
    sunWatchMarker.setMap(null);
    teaHouseMarker.setMap(null);
    visitantCenterMarker.setMap(null);
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
    addOrchidGardenMaker(infowindow);
    addParkingMarker();
    addPermacultureMarker();
    addSmellsGardenMarker();
    addSunWatchMarker();
    addTeaHouseMarker();
    addVisitantCenterMaker();
    markers_on = true;
  }
}

//Shows or remove trails at map
function setTrails() {
  if(trails.trails_on) {
    trails.setNull();
  }
  else {
    trails.setMap();
    trails.setListener();
  }
}

function loadScript() {
  console.log("map loading ...");
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCWLcEV1-tSCf5oUTnjsny_ubD4oZmTmOc' +
  '&libraries=drawing'+
  '&callback=initialize';
  document.body.appendChild(script);
}
