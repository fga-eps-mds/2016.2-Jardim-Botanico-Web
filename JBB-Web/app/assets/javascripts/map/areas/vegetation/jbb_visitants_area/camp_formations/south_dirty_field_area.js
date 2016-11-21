var southDirtyFieldArea;

var southDirtyFieldAreaCoordinates = [
  {lat: -15.914769975599201, lng: -47.90517266839743},
  {lat: -15.915210193059675, lng: -47.90595762315206},
  {lat: -15.91506574682899, lng: -47.90651552262716},
  {lat: -15.914632407513896, lng: -47.90694467606954},
  {lat: -15.913805277067263, lng: -47.906953655183315},
  {lat: -15.913373654679885, lng: -47.9074596602004},
  {lat: -15.913242964010319, lng: -47.90653523057699},
  {lat: -15.91322920712904, lng: -47.90651552262716},
  {lat: -15.912878405501901, lng: -47.90576450410299},
  {lat: -15.912716761356323, lng: -47.90471669351973},
  {lat: -15.912899040751252, lng: -47.904090732336044},
  {lat: -15.91366254931265, lng: -47.90374740958214},
  {lat: -15.91419906710687, lng: -47.90318951010704},
  {lat: -15.914653042583128, lng: -47.90291056036949},
  {lat: -15.914714948250436, lng: -47.90342554450035},
  {lat: -15.91454986642859, lng: -47.90424093604088},
  {lat: -15.914591136896762, lng: -47.90492758154869},
  {lat: -15.914756218684703, lng: -47.90537819266319},
  {lat: -15.914775134717411, lng: -47.90537115186453},
  {lat: -15.91521879130871, lng: -47.905939780175686},
];

var southDirtyFieldAreaColor = '#6AC5CB';

function addSouthDirtyFieldArea(){
  southDirtyFieldArea = createVegetation(southDirtyFieldAreaCoordinates,
                                        southDirtyFieldAreaColor);

  southDirtyFieldArea.setMap(map);

  //add a listener to open a infowindow every time the river is clicked
  google.maps.event.addListener(southDirtyFieldArea, 'click', function(clicked_location) {
      addInfowindow(clicked_location.latLng, campFormationsContentString);
  });
}
