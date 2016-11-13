var smallPinus;

  var smallPinusCoordinates = [
  {lat: -15.864889627107752, lng: -47.83863544464111},
  {lat: -15.864755464930333, lng: -47.83904314041138},
  {lat: -15.864621302663625, lng: -47.8394079208374},
  {lat: -15.864549061406107, lng: -47.839590311050415},
  {lat: -15.864992828721943, lng: -47.83977270126343},
  {lat: -15.865178591494354, lng: -47.83924698829651},
  {lat: -15.865312753390205, lng: -47.838871479034424},
  {lat: -15.86506506982045, lng: -47.83864617347717},
  {lat: -15.864910267434821, lng: -47.83863544464111},
  ];

var smallPinusColor = '#BAE3A9';

function addSmallPinus(){
  smallPinus = createVegetation(smallPinusCoordinates,
                                    smallPinusColor);

  smallPinus.setMap(map);
}
