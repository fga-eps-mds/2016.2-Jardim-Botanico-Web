$(window).load(function() {
loadScript();
});

var map;

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

    //add jbb space markers at map
    addJapaneseGardenMarker();
    addTeaHouseMarker();
}

function loadScript() {
console.log("map loading ...");
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
'&libraries=drawing'+
'&callback=initialize';
document.body.appendChild(script);
}
