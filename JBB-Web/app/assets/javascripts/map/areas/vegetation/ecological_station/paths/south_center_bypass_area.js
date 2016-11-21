var southCenterBypassArea;

var southCenterBypassAreaCoordinates = [
  {lat: -15.923175211267734, lng: -47.89915546774864},
  {lat: -15.924227560372081, lng: -47.8987692296505},
  {lat: -15.924433902687065, lng: -47.89653763175011},
  {lat: -15.923752972243001, lng: -47.89540037512779},
  {lat: -15.923587897848247, lng: -47.894348949193954},
  {lat: -15.92245300771125, lng: -47.89368376135826},
  {lat: -15.922122856649043, lng: -47.89299711585045},
  {lat: -15.922143491106322, lng: -47.89192423224449},
  {lat: -15.92195778091442, lng: -47.8907011449337},
  {lat: -15.921730801557777, lng: -47.89089426398277},
  {lat: -15.921895877478958, lng: -47.89177402853966},
  {lat: -15.921586360015445, lng: -47.89267525076866},
  {lat: -15.921194303876952, lng: -47.892589420080185},
  {lat: -15.920430823937421, lng: -47.89220318198204},
  {lat: -15.920141938879233, lng: -47.892074435949326},
  {lat: -15.919522898069786, lng: -47.89168819785118},
  {lat: -15.919832418712963, lng: -47.89237484335899},
  {lat: -15.920265746812184, lng: -47.892868369817734},
  {lat: -15.921297476619175, lng: -47.893276065588},
  {lat: -15.921792705044117, lng: -47.89400562644005},
  {lat: -15.922143491106322, lng: -47.89454206824303},
  {lat: -15.92263871744525, lng: -47.895314544439316}
];

var southCenterBypassAreaColor = '#BAEE5F';

function addSouthCenterBypassArea(){
  southCenterBypassArea = createVegetation(southCenterBypassAreaCoordinates,
                                              southCenterBypassArea);

  southCenterBypassArea.setMap(map);

  //add a listener to open a infowindow every time the river is clicked
  google.maps.event.addListener(southBypassArea, 'click', function(clicked_location) {
      addInfowindow(clicked_location.latLng, pathsContentString);
  });
}
