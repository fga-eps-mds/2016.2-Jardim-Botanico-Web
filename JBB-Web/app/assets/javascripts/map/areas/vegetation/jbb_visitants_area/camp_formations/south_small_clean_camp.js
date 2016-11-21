var southSmallCleanCamp;

var southSmallCleanCampCoordinates = [
  {lat: -15.881535364286032, lng: -47.83451557159424},
  {lat: -15.881741750411058, lng: -47.833828926086426},
  {lat: -15.8818036662073, lng: -47.83348560333252},
  {lat: -15.881617918761425, lng: -47.833120822906494},
  {lat: -15.881287700656813, lng: -47.832069396972656},
  {lat: -15.8814528097768, lng: -47.83140420913696},
  {lat: -15.88106067539581, lng: -47.83121109008789},
  {lat: -15.88097812069199, lng: -47.83078193664551},
  {lat: -15.880730456377503, lng: -47.83050298690796},
  {lat: -15.880689178962134, lng: -47.83030986785889},
  {lat: -15.880503430488314, lng: -47.83024549484253},
  {lat: -15.880235126834814, lng: -47.83015966415405},
  {lat: -15.880297043094272, lng: -47.830867767333984},
  {lat: -15.88042087555608, lng: -47.83121109008789},
  {lat: -15.880358959334687, lng: -47.83142566680908},
  {lat: -15.88058598538672, lng: -47.83198356628418},
  {lat: -15.880874927264639, lng: -47.832133769989014},
  {lat: -15.8811432300658, lng: -47.83243417739868},
  {lat: -15.88118450738809, lng: -47.83292770385742},
  {lat: -15.88118450738809, lng: -47.83344268798828},
  {lat: -15.881246423355664, lng: -47.833871841430664},
  {lat: -15.881390893872673, lng: -47.83419370651245},
];

var southSmallCleanCampColor = '#7ED9D1';

function addSouthSmallCleanCamp(){
  southSmallCleanCamp = createVegetation(southSmallCleanCampCoordinates,
                                        southSmallCleanCampColor);

  southSmallCleanCamp.setMap(map);

  //add a listener to open a infowindow every time the river is clicked
  google.maps.event.addListener(southSmallCleanCamp, 'click', function(clicked_location) {
      addInfowindow(clicked_location.latLng, campFormationsContentString);
  });
}
