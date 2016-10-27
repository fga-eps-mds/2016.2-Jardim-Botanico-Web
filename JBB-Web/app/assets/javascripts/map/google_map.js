$(window).load(function() {
    loadScript();
});

var map;
var markers;
var infowindow = new google.maps.InfoWindow();
var rivers_on = false;

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
    addJbbVisitantsAreaPolygon();
    addJbbEcologicalStationPolygon();


    //initializing markers
    markers = new Markers(map);
}

function setJbbRivers() {
    if(rivers_on) {
        taperaRiver.setMap(null);
        redentorCristRiver.setMap(null);
        redentorCristRiverArm.setMap(null);
        cochoRiver.setMap(null);
        taperaRiverArm.setMap(null);
        deerHeadRiver.setMap(null);
        caesb1River.setMap(null);
        caesb2River.setMap(null);
        caesb3River.setMap(null);
        caesb4River.setMap(null);

        infowindow.close();
        rivers_on = false;
    }
    else {
        addTaperaRiver();
        addRedentorCristRiver();
        addRedentorCristRiverArm();
        addCochoRiver();
        addTaperaRiverArm();
        addDeerHeadRiver();
        addCaesb1River();
        addCaesb2River();
        addCaesb3River();
        addCaesb4River();

        rivers_on = true;
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
