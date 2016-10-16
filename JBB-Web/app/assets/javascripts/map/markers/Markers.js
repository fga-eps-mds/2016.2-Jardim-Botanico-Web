class Markers {

  constructor(map) {
    this.map = map;
    this.infowindow;

    //Initializing Markers
    this.amphitheaterMarker = new google.maps.Marker();
    this.cactusBoskMarker = new google.maps.Marker();
    this.centerOfExcellenceMarker = new google.maps.Marker();
    this.contemplationGardenMarker = new google.maps.Marker();
    this.evolutionaryGardenMarker = new google.maps.Marker();
    this.greenHouseMarker = new google.maps.Marker();
    this.hammockPlaceMarker = new google.maps.Marker();
    this.healingGardenMarker = new google.maps.Marker();
    this.infantParkMarker = new google.maps.Marker();
    this.japaneseGardenMarker = new google.maps.Marker();
    this.naturalLibraryMarker = new google.maps.Marker();
    this.orchidGardenMarker = new google.maps.Marker();
    this.parkingMarker = new google.maps.Marker();
    this.permacultureMarker = new google.maps.Marker();
    this.smellsGardenMarker = new google.maps.Marker();
    this.sunWatchMarker = new google.maps.Marker();
    this.teaHouseMarker = new google.maps.Marker();
    this.visitantCenterMarker = new google.maps.Marker();

  }


  setListener(){
    //add a listener to verify if the marker is clicked
    this.amphitheaterMarker.addListener('click', function() {
      this.infowindow = new google.maps.InfoWindow();
      this.infowindow.setContent(amphitheaterInfowindowContentString);
      this.infowindow.setPosition(amphitheaterLatLng);
      this.infowindow.open(map, this.amphitheaterMarker);
    });

    this.cactusBoskMarker.addListener('click', function() {
      this.infowindow = new google.maps.InfoWindow();
      this.infowindow.setContent(cactusBoskInfowindowContentString);
      this.infowindow.setPosition(cactusBoskLatLng);
      this.infowindow.open(map, this.cactusBoskMarker);
    });

    //add a listener to verify if the marker is clicked
    this.centerOfExcellenceMarker.addListener('click', function() {
      this.infowindow = new google.maps.InfoWindow();
      this.infowindow.setContent(centerOfExcellenceInfowindowContentString);
      this.infowindow.setPosition(centerOfExcellenceLatLng);
      this.infowindow.open(map, this.centerOfExcellenceMarker);
    });

    //add a listener to verify if the marker is clicked
    this.contemplationGardenMarker.addListener('click', function() {
      this.infowindow = new google.maps.InfoWindow();
      this.infowindow.setContent(contemplationGardenInfowindowContentString);
      this.infowindow.setPosition(contemplationGardenLatLng);
      this.infowindow.open(map, this.contemplationGardenMarker);
    });

  }


  setMap() {
    //Set Marker's Positions
    this.amphitheaterMarker.setPosition(amphitheaterLatLng);
    this.cactusBoskMarker.setPosition(cactusBoskLatLng);
    this.centerOfExcellenceMarker.setPosition(centerOfExcellenceLatLng);
    this.contemplationGardenMarker.setPosition(contemplationGardenLatLng);
    this.evolutionaryGardenMarker.setPosition(evolutionaryGardenLatLng);
    this.greenHouseMarker.setPosition(greenHouseLatLng);
    this.hammockPlaceMarker.setPosition(hammockPlaceLatLng);
    this.healingGardenMarker.setPosition(healingGardenLatLng);
    this.infantParkMarker.setPosition(infantParkLatLng);
    this.japaneseGardenMarker.setPosition(japaneseGardenLatLng);
    this.naturalLibraryMarker.setPosition(naturalLibraryLatLng);
    this.orchidGardenMarker.setPosition(orchidGardenLatLng);
    this.parkingMarker.setPosition(parkingLatLng);
    this.permacultureMarker.setPosition(permacultureLatLng);
    this.smellsGardenMarker.setPosition(smellsGardenLatLng);
    this.sunWatchMarker.setPosition(sunWatchLatLng);
    this.teaHouseMarker.setPosition(teaHouseLatLng);
    this.visitantCenterMarker.setPosition(visitantCenterLatLng);


    //Set Markers at the map
    this.amphitheaterMarker.setMap(this.map);
    this.cactusBoskMarker.setMap(this.map);
    this.centerOfExcellenceMarker.setMap(this.map);
    this.contemplationGardenMarker.setMap(this.map);
    this.evolutionaryGardenMarker.setMap(this.map);
    this.greenHouseMarker.setMap(this.map);
    this.hammockPlaceMarker.setMap(this.map);
    this.healingGardenMarker.setMap(this.map);
    this.infantParkMarker.setMap(this.map);
    this.japaneseGardenMarker.setMap(this.map);
    this.naturalLibraryMarker.setMap(this.map);
    this.orchidGardenMarker.setMap(this.map);
    this.parkingMarker.setMap(this.map);
    this.permacultureMarker.setMap(this.map);
    this.smellsGardenMarker.setMap(this.map);
    this.sunWatchMarker.setMap(this.map);
    this.teaHouseMarker.setMap(this.map);
    this.visitantCenterMarker.setMap(this.map);
  };


  setNull() {
    this.amphitheaterMarker.setMap(null);
    this.cactusBoskMarker.setMap(null);
    this.centerOfExcellenceMarker.setMap(null);
    this.contemplationGardenMarker.setMap(null);
    this.evolutionaryGardenMarker.setMap(null);
    this.greenHouseMarker.setMap(null);
    this.hammockPlaceMarker.setMap(null);
    this.healingGardenMarker.setMap(null);
    this.infantParkMarker.setMap(null);
    this.japaneseGardenMarker.setMap(null);
    this.naturalLibraryMarker.setMap(null);
    this.orchidGardenMarker.setMap(null);
    this.parkingMarker.setMap(null);
    this.permacultureMarker.setMap(null);
    this.smellsGardenMarker.setMap(null);
    this.sunWatchMarker.setMap(null);
    this.teaHouseMarker.setMap(null);
    this.visitantCenterMarker.setMap(null);
  };



};
