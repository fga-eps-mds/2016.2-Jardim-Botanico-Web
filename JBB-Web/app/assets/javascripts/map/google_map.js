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
      administrateArea.setMap(null);
      vegetation_on = false;
      infowindow.close();
  }
  else {
      addVisitantsCenterAdministrativeAreaPolygon();
      addDryForestPolygon();
      addAdministrateAreaPolygon();
     
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