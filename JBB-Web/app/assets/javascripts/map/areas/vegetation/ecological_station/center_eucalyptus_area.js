var centerEucalyptusArea;

  var centerEucalyptusAreaCoordinates = [
    {lat: -15.882608569826356, lng: -47.833614349365234},
    {lat: -15.88220611841897, lng: -47.8360390663147},
    {lat: -15.88312453199252, lng: -47.83730506896973},
    {lat: -15.88396038789601, lng: -47.83727288246155},
    {lat: -15.884125494824596, lng: -47.837111949920654},
    {lat: -15.884362835797226, lng: -47.836607694625854},
    {lat: -15.883754004044903, lng: -47.835878133773804},
    {lat: -15.883795280832048, lng: -47.834826707839966},
    {lat: -15.882701443113833, lng: -47.83464431762695},
  ];

var centerEucalyptusAreaColor = '#A1BF77';

function addCenterEucalyptusArea(){
  centerEucalyptusArea = createVegetation(centerEucalyptusAreaCoordinates,
                                        centerEucalyptusAreaColor);

  centerEucalyptusArea.setMap(map);
}
