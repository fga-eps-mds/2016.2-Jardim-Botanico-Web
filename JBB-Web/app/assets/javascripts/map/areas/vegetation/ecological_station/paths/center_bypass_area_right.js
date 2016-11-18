var centerBypassAreaRight;

var centerBypassAreaRightCoordinates = [
    {lat: -15.94257056348812, lng: -47.85877212882042},
    {lat: -15.941881670294617, lng: -47.85873524877388},
    {lat: -15.941324593988643, lng: -47.85852067205269},
    {lat: -15.94125238028015, lng: -47.858456299036334},
    {lat: -15.94096352518621, lng: -47.85779111120064},
    {lat: -15.94070561850083, lng: -47.85702936384041},
    {lat: -15.940540558048164, lng: -47.856417820185015},
    {lat: -15.940540558048164, lng: -47.85575263234932},
    {lat: -15.940406446330371, lng: -47.855216190546344},
    {lat: -15.939591457809689, lng: -47.85486213862896},
    {lat: -15.93947797813282, lng: -47.85544149577618},
    {lat: -15.93972557007235, lng: -47.855763360857964},
    {lat: -15.939818416970876, lng: -47.855977937579155},
    {lat: -15.939632723130831, lng: -47.856492921710014},
    {lat: -15.939498610806112, lng: -47.85717956721783},
    {lat: -15.939622406801346, lng: -47.857952043414116},
    {lat: -15.94006600849023, lng: -47.85860650241375},
    {lat: -15.940076324796893, lng: -47.859250232577324},
    {lat: -15.94020012043561, lng: -47.85963647067547},
    {lat: -15.94035486487657, lng: -47.86015145480633},
    {lat: -15.94050960919818, lng: -47.86036603152752}
];

var centerBypassAreaRightColor = '#A5D772';

function addCenterBypassAreaRight(){
    centerBypassAreaRight = createVegetation(centerBypassAreaRightCoordinates,
                                            centerBypassAreaRightColor);

    centerBypassAreaRight.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(centerBypassAreaRight, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, pathsContentString);
    });
}
