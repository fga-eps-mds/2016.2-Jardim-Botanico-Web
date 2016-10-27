var southRupestresAreaTop;

  var southRupestresAreaTopCoordinates = [
  {lat: -15.91617546028432, lng: -47.88852199941175},
  {lat: -15.914937352313892, lng: -47.88852199941175},
  {lat: -15.913699236714677, lng: -47.88852199941175},
  {lat: -15.913121446824452, lng: -47.88899406819837},
  {lat: -15.912956363693551, lng: -47.89032444386976},
  {lat: -15.91275000958923, lng: -47.89096817403333},
  {lat: -15.912296029813906, lng: -47.89174065022962},
  {lat: -15.91266746788818, lng: -47.89298519521253},
  {lat: -15.913864319235314, lng: -47.893628925376106},
  {lat: -15.914483377479929, lng: -47.89319977193372},
  {lat: -15.914772270674735, lng: -47.89495930104749},
  {lat: -15.915762758475182, lng: -47.89598926930921},
  {lat: -15.916629431295293, lng: -47.893671840720344},
  {lat: -15.915927839300561, lng: -47.89122566609876},
  {lat: -15.915432596417542, lng: -47.889637798361946},
  {lat: -15.916588161245773, lng: -47.88946613698499},
  {lat: -15.916051649830587, lng: -47.88826450734632},
];

var southRupestresAreaTopColor = '#407489';

function addSouthRupestresAreaTop(){
  southRupestresAreaTop = createVegetation(southRupestresAreaTopCoordinates,
                                      southRupestresAreaTopColor);

  southRupestresAreaTop.setMap(map);
}
