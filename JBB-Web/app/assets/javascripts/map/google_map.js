$(window).load(function() {
  loadScript();
});

var map;
var markers;
var trails;
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
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  infowindow = new google.maps.InfoWindow();
  addJbbTotalAreaPolygon();

  //initializing markers
  markers = new Markers(map);
  trails = new Trails(map);
}


//Shows or remove JBB spaces at the map
function setJbbSpaces() {
  if(markers.markers_on) {
      markers.setNull();
  }
  else {
    markers.setMap();
    markers.setListener();
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
