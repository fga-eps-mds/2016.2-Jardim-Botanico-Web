var labiataTrail;

var labiataTrailContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Trilha Labiata</h1>'+
    '<div id="bodyContent">'+
    '<p>A <b>Trilha labiata</b>, ............. ' +
    '  '+
    '. '+
    '<p>Leia mais em: <a href="/trails/labiata_trail">'+
    'Trilha Labiata</a> '+
    '</div>'+
    '</div>';

var labiataTrailCoordinates = [
    {lat: -15.863501560263353, lng: -47.82815867336467},
    {lat: -15.863431898664311, lng: -47.828165378887206},
    {lat: -15.863381587494494, lng: -47.828166719991714},
    {lat: -15.863357076920021, lng: -47.82815465005115},
    {lat: -15.863337726464394, lng: -47.82814258011058},
    {lat: -15.86324742431357, lng: -47.82816806109622},
    {lat: -15.863186792846744, lng: -47.828170743305236},
    {lat: -15.863053919568463, lng: -47.82810637028888},
    {lat: -15.862990707978161, lng: -47.82807284267619},
    {lat: -15.862928786401108, lng: -47.82800981076434},
    {lat: -15.862892665472357, lng: -47.82797360094264},
    {lat: -15.862879765139096, lng: -47.827950802166015},
    {lat: -15.862841064134377, lng: -47.82792263897136},
    {lat: -15.862783012613347, lng: -47.82787435920909},
    {lat: -15.862713350766056, lng: -47.827855583745986},
    {lat: -15.862619178230542, lng: -47.82788489945233},
    {lat: -15.862479854398687, lng: -47.82792245037854},
];

var labiataTrailColor = '#15317e';

function addLabiataTrail(){
    //create the river
    labiataTrail = createTrail(labiataTrailCoordinates, labiataTrailColor);

    //set the river on map
    labiataTrail.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(labiataTrail, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, labiataTrailContentString);
    });
}
