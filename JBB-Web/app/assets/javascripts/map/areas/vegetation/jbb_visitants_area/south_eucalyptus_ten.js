var southEucalyptusTen;

var southEucalyptusTenCoordinates = [
  {lat: -15.875384960704311, lng: -47.842830419540405},
  {lat: -15.875250805513362, lng: -47.8426855802536},
  {lat: -15.875261125146602, lng: -47.842599749565125},
  {lat: -15.87536948126375, lng: -47.84248173236847},
  {lat: -15.87557587370663, lng: -47.84246027469635},
  {lat: -15.875658430624572, lng: -47.84246027469635},
  {lat: -15.875761626724444, lng: -47.8423798084259},
  {lat: -15.875833863962887, lng: -47.842363715171814},
  {lat: -15.876504637082963, lng: -47.84292697906494},
  {lat: -15.87643240008502, lng: -47.843077182769775},
  {lat: -15.876339523906775, lng: -47.84317910671234},
  {lat: -15.875400440143663, lng: -47.84272849559784},
];

var southEucalyptusTenColor = '#A1BF77';

function addSouthEucalyptusTen(){
  southEucalyptusTen = createVegetation(southEucalyptusTenCoordinates,
                                        southEucalyptusTenColor);

  southEucalyptusTen.setMap(map);
}
