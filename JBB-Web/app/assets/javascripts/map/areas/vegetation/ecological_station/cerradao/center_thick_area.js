var centerThickArea;

var centerThickAreaCoordinates = [
    {lat: -15.924322705943124, lng: -47.83163424588565},
    {lat: -15.924291755221955, lng: -47.83200975482032},
    {lat: -15.92400287571712, lng: -47.83250328127906},
    {lat: -15.923517969899809, lng: -47.832857332869025},
    {lat: -15.923693361500801, lng: -47.83307190959022},
    {lat: -15.923517969899809, lng: -47.833340130491706},
    {lat: -15.92315686906251, lng: -47.833651266737434},
    {lat: -15.922806084770258, lng: -47.833651266737434},
    {lat: -15.922579106372313, lng: -47.83391948763892},
    {lat: -15.922795767575918, lng: -47.83441301409766},
    {lat: -15.92301242854578, lng: -47.83472415034339},
    {lat: -15.923208454936164, lng: -47.83521767680213},
    {lat: -15.923352895311892, lng: -47.83579703394935},
    {lat: -15.923456066945247, lng: -47.83629056040809},
    {lat: -15.923352894682182, lng: -47.836773358322375},
    {lat: -15.92306401382683, lng: -47.83733125779747},
    {lat: -15.923590189359665, lng: -47.83748146150231},
    {lat: -15.924116363513882, lng: -47.83739563081383},
    {lat: -15.924590950784161, lng: -47.837524376846545},
    {lat: -15.92464253628943, lng: -47.83797498796105},
    {lat: -15.924908487947487, lng: -47.837700769430285},
    {lat: -15.92565131677025, lng: -47.837829515463},
    {lat: -15.92610526636472, lng: -47.83759348106969},
    {lat: -15.925940193903665, lng: -47.837164327627306},
    {lat: -15.926476678905908, lng: -47.836971208578234},
    {lat: -15.927075064332737, lng: -47.8363703937589},
    {lat: -15.927611546302654, lng: -47.83583395195592},
    {lat: -15.927921054479365, lng: -47.83534042549718}
];

var centerThickAreaColor = '#9F7E4D';

function addCenterThickArea(){
    centerThickArea = createVegetation(centerThickAreaCoordinates,
                                       centerThickAreaColor);

    centerThickArea.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(centerThickArea, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, cerradaoContentString);
    });
}
