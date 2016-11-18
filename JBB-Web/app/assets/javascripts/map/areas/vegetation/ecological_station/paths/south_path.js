var southPath;

var southPathCoordinates = [
  {lat: -15.86801661256605, lng: -47.84895658493042},
  {lat: -15.86801661256605, lng: -47.84940719604492},
  {lat: -15.868429412302405, lng: -47.85017967224121},
  {lat: -15.868573892010389, lng: -47.85017967224121},
  {lat: -15.869007330512973, lng: -47.85020112991333},
  {lat: -15.869048610321746, lng: -47.84987926483154},
  {lat: -15.868739011549847, lng: -47.849299907684326},
  {lat: -15.868511972148212, lng: -47.849063873291016},
  {lat: -15.868326212447569, lng: -47.84878492355347},
  {lat: -15.868161092569927, lng: -47.848849296569824},
];

var southPathColor = '#C3DD9E';

function addSouthPath(){
  southPath = createVegetation(southPathCoordinates,
                                      southPathColor);

  southPath.setMap(map);

  //add a listener to open a infowindow every time the river is clicked
  google.maps.event.addListener(southPath, 'click', function(clicked_location) {
      addInfowindow(clicked_location.latLng, pathsContentString);
  });
}
