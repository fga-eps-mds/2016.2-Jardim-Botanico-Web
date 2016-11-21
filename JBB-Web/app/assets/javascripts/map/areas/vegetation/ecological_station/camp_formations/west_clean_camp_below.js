var westCleanCampBelow;

var westCleanCampBelowCoordinates = [
  {lat: -15.891333885314452, lng: -47.85430893301964},
  {lat: -15.891086233739038, lng: -47.85484537482262},
  {lat: -15.890384552620418, lng: -47.855145782232285},
  {lat: -15.889662231266557, lng: -47.85553202033043},
  {lat: -15.889868609060755, lng: -47.857098430395126},
  {lat: -15.890673480436122, lng: -47.85727009177208},
  {lat: -15.89189110024494, lng: -47.85696968436241},
  {lat: -15.89253086363289, lng: -47.85624012351036},
  {lat: -15.892510226135993, lng: -47.85525307059288},
  {lat: -15.891849825117815, lng: -47.85452350974083}
];

var westCleanCampBelowColor = '#8BB2C1';

function addWestCleanCampBelow(){
  westCleanCampBelow = createVegetation(westCleanCampBelowCoordinates,
                                        westCleanCampBelowColor);

  westCleanCampBelow.setMap(map);

  //add a listener to open a infowindow every time the river is clicked
  google.maps.event.addListener(westCleanCampBelow, 'click', function(clicked_location) {
      addInfowindow(clicked_location.latLng, campFormationsContentString);
  });
} 