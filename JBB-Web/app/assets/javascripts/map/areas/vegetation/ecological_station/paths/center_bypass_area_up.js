var centerBypassAreaUp;

var centerBypassAreaUpCoordinates = [
    {lat: -15.891996581156903, lng: -47.84084204580722},
    {lat: -15.892553794252487, lng: -47.84006956993835},
    {lat: -15.893565028892569, lng: -47.83936146675842},
    {lat: -15.89365789712514, lng: -47.83857826172607},
    {lat: -15.893410248409682, lng: -47.83813837944763},
    {lat: -15.893049093486653, lng: -47.83785942971008},
    {lat: -15.893038774765037, lng: -47.83784870087402},
    {lat: -15.892822081488996, lng: -47.83733371674316},
    {lat: -15.893668215815003, lng: -47.83738736092346},
    {lat: -15.894101600350787, lng: -47.8374731909571},
    {lat: -15.89434924821536, lng: -47.837526835137396},
    {lat: -15.894328610904957, lng: -47.83695820682624},
    {lat: -15.894576258490137, lng: -47.836529053383856},
    {lat: -15.89482390580988, lng: -47.83616427295783},
    {lat: -15.895154101709586, lng: -47.83593896740058},
    {lat: -15.895432704078457, lng: -47.83600334041694},
    {lat: -15.895577164414153, lng: -47.83571366184333},
    {lat: -15.89609309333774, lng: -47.83512357586005},
    {lat: -15.896121756183117, lng: -47.835125848141615},
    {lat: -15.896121756183117, lng: -47.835104390469496},
    {lat: -15.895275632174654, lng: -47.834868356076186},
    {lat: -15.894553328376551, lng: -47.83549062856764},
    {lat: -15.894264406131269, lng: -47.836348935452406},
    {lat: -15.893686560396151, lng: -47.836885377255385},
    {lat: -15.893356362088179, lng: -47.836370393124525},
    {lat: -15.892427676442146, lng: -47.83707849630446},
    {lat: -15.891274265627933, lng: -47.837578020898945},
    {lat: -15.890714755883224, lng: -47.842078135872725},
    {lat: -15.89149898627418, lng: -47.84049026813591},
    {lat: -15.890778961986245, lng: -47.84208659079013}
];

var centerBypassAreaUpColor = '#A5D772';

function addCenterBypassAreaUp(){
    centerBypassAreaUp = createVegetation(centerBypassAreaUpCoordinates,
                                          centerBypassAreaUpColor);

    centerBypassAreaUp.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(centerBypassAreaUp, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, pathsContentString);
    });
}
