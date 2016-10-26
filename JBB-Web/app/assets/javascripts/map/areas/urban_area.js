var urbanArea;

var urbanAreaCoordinates = [
  {lat: -15.861607788227095, lng: -47.82845377922058},
  {lat: -15.861318818722955, lng: -47.82856106758118},
  {lat: -15.86108145060621, lng: -47.82880783081055},
  {lat: -15.860967926625523, lng: -47.829140424728394},
  {lat: -15.861040169166078, lng: -47.82971978187561},
  {lat: -15.861339459415559, lng: -47.82945156097412},
  {lat: -15.861731632173543, lng: -47.82905459403992},
  {lat: -15.861855476043925, lng: -47.828625440597534},
];

var urbanAreaColor = '#DADA84';

function addUrbanArea(){
  urbanArea = createVegetation(urbanAreaCoordinates,
                                      urbanAreaColor);

  urbanArea.setMap(map);
}
