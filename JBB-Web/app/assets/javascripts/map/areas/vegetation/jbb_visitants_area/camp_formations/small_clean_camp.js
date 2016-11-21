var smallCleanCamp;

var smallCleanCampCoordinates = [
  {lat: -15.888046744584262, lng: -47.84113526344299},
  {lat: -15.888428546401405, lng: -47.841328382492065},
  {lat: -15.888449184316837, lng: -47.841596603393555},
  {lat: -15.889955746428047, lng: -47.842369079589844},
  {lat: -15.889542990806751, lng: -47.840352058410645},
  {lat: -15.888201529192001, lng: -47.84093141555786},
];

var smallCleanCampColor = '#7ED9D1';

function addSmallCleanCamp(){
  smallCleanCamp = createVegetation(smallCleanCampCoordinates,
                                        smallCleanCampColor);

  smallCleanCamp.setMap(map);

  //add a listener to open a infowindow every time the river is clicked
  google.maps.event.addListener(smallCleanCamp, 'click', function(clicked_location) {
      addInfowindow(clicked_location.latLng, campFormationsContentString);
  });
}

