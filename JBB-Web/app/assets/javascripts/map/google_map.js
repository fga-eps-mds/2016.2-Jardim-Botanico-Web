$(window).load(function() {
loadScript();
});

var map;
var markers_on = false;
var infowindow;

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
}

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

function loadScript() {
    console.log("map loading ...");
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCWLcEV1-tSCf5oUTnjsny_ubD4oZmTmOc' +
    '&libraries=drawing'+
    '&callback=initialize';
    document.body.appendChild(script);
}
