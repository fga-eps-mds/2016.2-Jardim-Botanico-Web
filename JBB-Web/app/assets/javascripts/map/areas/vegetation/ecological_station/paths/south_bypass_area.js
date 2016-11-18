var southBypassArea;
var southBypassAreaCoordinates = [
  {lat: -15.930706606597253, lng: -47.901322767284},
  {lat: -15.929778093519312, lng: -47.902717515971744},
  {lat: -15.928808308608147, lng: -47.9033397884632},
  {lat: -15.927900420615767, lng: -47.903232500102604},
  {lat: -15.926600482933635, lng: -47.90387623026618},
  {lat: -15.926002096092454, lng: -47.904477046395186},
  {lat: -15.925218000290931, lng: -47.90531389560783},
  {lat: -15.92470214612016, lng: -47.90535681095207},
  {lat: -15.924475169865207, lng: -47.905292437935714},
  {lat: -15.923814873846641, lng: -47.905163691903},
  {lat: -15.923072038230673, lng: -47.90544264164055},
];

var southBypassAreaColor = '#BAEE5F';

function addSouthBypassArea(){
  southBypassArea = createVegetation(southBypassAreaCoordinates,
                                              southBypassArea);

  southBypassArea.setMap(map);

  //add a listener to open a infowindow every time the river is clicked
  google.maps.event.addListener(southBypassArea, 'click', function(clicked_location) {
      addInfowindow(clicked_location.latLng, pathsContentString);
  });
}
