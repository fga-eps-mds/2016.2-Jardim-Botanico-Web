$(window).load(function() {
    loadScript();
});

var map;
var markers;
var infowindow = new google.maps.InfoWindow();
var vegetation_on = false;

function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(-15.872652, -47.836588),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.NORMAL,
    panControl: true,
    scaleControl: false,
    streetViewControl: true,
    overviewMapControl: true
  };

  // initializing map
  map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
  infowindow = new google.maps.InfoWindow();
  addJbbTotalAreaPolygon();
  //initializing markers
  markers = new Markers(map);
}

function setVegetation() {
  if(vegetation_on) {
    visitantsCenterAdministrativeAreaPolygon.setMap(null);
    dryForestPolygon.setMap(null);
    nurseryPolygon.setMap(null);
    cleanCampPolygon.setMap(null);
    urbanAreaPolygon.setMap(null);
    administrateAreaEvolutionGardemPolygon.setMap(null);
    anthropicAreaPolygon.setMap(null);
    anthropicAreaAdministratePolygon.setMap(null);
    anthropicAreaEvolutionGardemPolygon.setMap(null);
    denseCerradoPolygon.setMap(null);
    smallDenseCerradoPolygon.setMap(null);
    pinusEvolutionGardemPolygon.setMap(null);
    pinusAdministrateAreaPolygon.setMap(null);
    pinusUrbanAreaPolygon.setMap(null);
    smallPinusPolygon.setMap(null);
    eucalyptusTypicalCerradoPolygon.setMap(null);
    dirtyFieldTypicalCerradoPolygon.setMap(null);
    typicalCerradoDryForestPolygon.setMap(null);
    typicalCerradoCleanCampPolygon.setMap(null);
    eucalyptusTypicalCerradoPolygon.setMap(null);
    southAnthropicAreaPolygon.setMap(null);
    southBypassAreaPolygon.setMap(null);
    southDirtyFieldAreaPolygon.setMap(null);
    southDirtyFieldPolygon.setMap(null);
    southLeftBypassAreaPolygon.setMap(null);
    southCenterBypassAreaPolygon.setMap(null);
    southRupestresAreaTopPolygon.setMap(null);
    southCleanCampPolygon.setMap(null);
    southPathPolygon.setMap(null);
    southEucalyptusOne.setMap(null);
    southEucalyptusTwo.setMap(null);
    southEucalyptusThree.setMap(null);
    southEucalyptusFour.setMap(null);
    southEucalyptusFive.setMap(null);
    southEucalyptusFive.setMap(null);
    southGalleryBushPolygon.setMap(null);
    southTypicalCerradoArea.setMap(null);
    drainCerradoSouthPolygon.setMap(null);
    smallDrainCerradoPolygon.setMap(null);
    smallRockCerradoPolygon.setMap(null);
    centerThickAreaPolygon.setMap(null);
    centerTypicalCerradoAreaPolygon.setMap(null);
    centerBypassAreaRightPolygon.setMap(null);
    centerBypassAreaLeftPolygon.setMap(null);
    centerCerradoSparseAreaRightPolygon.setMap(null);
    centerCerradoSparseAreaLeftPolygon.setMap(null);
    centerCerradoSparseAreaRightUpPolygon.setMap(null);
    centerBypassAreaUpPolygon.setMap(null);
    centerGroundAreaRightPolygon.setMap(null);
    centerForestGaleriaAreaPolygon.setMap(null);
    centerGroundMurundunsAreaPolygon.setMap(null);
    centerGalleryBushPolygon.setMap(null);
    centerVivariumAreaPolygon.setMap(null);
    drainCerradoSouth.setMap(null);
    drainSmallCerrado.setMap(null);
    smallTypicalCerradoArea.setMap(null);
    smallRockCerrado.setMap(null);
    centerBypassAreaCenterPolygon.setMap(null);
    centerGroundMurundunsAreaCenterPolygon.setMap(null);
    centerCerradoSparseAreaPolygon.setMap(null);
    vegetation_on = false;
    infowindow.close();
  }
  else {
    addVisitantsCenterAdministrativeAreaPolygon();
    addDryForestPolygon();
    addNurseryPolygon();
    addCleanCampPolygon();
    addUrbanAreaPolygon();
    addAdministrateAreaEvolutionGardemPolygon();
    addAnthropicAreaPolygon();
    addAnthropicAreaEvolutionGardemPolygon();
    addAnthropicAreaAdministratePolygon();
    addDenseCerradoPolygon();
    addSmallDenseCerradoPolygon();
    addPinusEvolutionGardemPolygon();
    addPinusAdministrateAreaPolygon();
    addPinusUrbanAreaPolygon();
    addSmallPinusPolygon();
    addEucalyptusTypicalCerradoPolygon();
    addDirtyFieldTypicalCerradoPolygon();
    addTypicalCerradoDryForestPolygon();
    addTypicalCerradoCleanCampPolygon();
    addSouthAnthropicAreaPolygon();
    addSouthBypassAreaPolygon();
    addSouthDirtyFieldPolygon();
    addSouthDirtyFieldAreaPolygon();
    addSouthLeftBypassAreaPolygon();
    addSouthCenterBypassAreaPolygon();
    addSouthRupestresAreaTopPolygon();
    addSouthEucalyptusOnePolygon();
    addSouthEucalyptusTwoPolygon();
    addSouthEucalyptusThreePolygon();
    addSouthEucalyptusFourPolygon();
    addSouthEucalyptusFivePolygon();
    addSouthEucalyptusSixPolygon();
    addSouthCleanCampPolygon();
    addSouthTypicalCerradoAreaPolygon();
    addSouthGalleryBushPolygon();
    addSouthPathPolygon();
    addDrainCerradoSouthPolygon();
    addSmallDrainCerradoPolygon();
    addSmallTypicalCerradoAreaPolygon();
    addSmallRockCerradoPolygon();
    addCenterThickAreaPolygon();
    addCenterBypassAreaRightPolygon();
    addCenterBypassAreaLeftPolygon();
    addCenterCerradoSparseAreaRightPolygon();
    addcenterCerradoSparseAreaLeftPolygon();
    addCenterCerradoSparseAreaRightUpPolygon();
    addCenterBypassAreaUpPolygon();
    addCenterGroundAreaRightPolygon();
    addCenterForestGaleriaAreaPolygon();
    addCenterGroundMurundunsAreaPolygon();
    addCenterGalleryBushPolygon();
    addCenterTypicalCerradoAreaPolygon();
    addCenterBypassAreaCenterPolygon();
    addCenterGroundMurundunsAreaCenterPolygon();
    addCenterCerradoSparseAreaPolygon();
    vegetation_on = true;
  }
}


function setJbbSpaces() {
  if(markers.markers_on) {
    markers.setNull();
    infowindow.setMap(null);
  }
  else {
    markers.setMap();
    markers.setListener();
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