class Markers {


  constructor(map) {
    this.map = map;
    this.infowindow;
    this.markers_on = false;

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

    this.centerOfExcellenceMarker.addListener('click', function() {
      this.infowindow = new google.maps.InfoWindow();
      this.infowindow.setContent(centerOfExcellenceInfowindowContentString);
      this.infowindow.setPosition(centerOfExcellenceLatLng);
      this.infowindow.open(map, this.centerOfExcellenceMarker);
    });

    this.contemplationGardenMarker.addListener('click', function() {
      this.infowindow = new google.maps.InfoWindow();
      this.infowindow.setContent(contemplationGardenInfowindowContentString);
      this.infowindow.setPosition(contemplationGardenLatLng);
      this.infowindow.open(map, this.contemplationGardenMarker);
    });

    this.evolutionaryGardenMarker.addListener('click', function() {
      this.infowindow = new google.maps.InfoWindow();
      this.infowindow.setContent(evolutionaryGardenInfowindowContentString);
      this.infowindow.setPosition(evolutionaryGardenLatLng);
      this.infowindow.open(map, this.evolutionaryGardenMarker);
    });

    this.greenHouseMarker.addListener('click', function() {
      this.infowindow = new google.maps.InfoWindow();
      this.infowindow.setContent(greenHouseInfowindowContentString);
      this.infowindow.setPosition(greenHouseLatLng);
      this.infowindow.open(map, this.greenHouseMarker);
    });

    this.hammockPlaceMarker.addListener('click', function() {
      this.infowindow = new google.maps.InfoWindow();
      this.infowindow.setContent(hammockPlaceInfowindowContentString);
      this.infowindow.setPosition(hammockPlaceLatLng);
      this.infowindow.open(map, this.hammockPlaceMarker);
    });

    this.healingGardenMarker.addListener('click', function() {
      this.infowindow = new google.maps.InfoWindow();
      this.infowindow.setContent(healingGardenInfowindowContentString);
      this.infowindow.setPosition(healingGardenLatLng);
      this.infowindow.open(map, this.healingGardenMarker);
    });

    this.infantParkMarker.addListener('click', function() {
      this.infowindow = new google.maps.InfoWindow();
      this.infowindow.setContent(infantParkInfowindowContentString);
      this.infowindow.setPosition(infantParkLatLng);
      this.infowindow.open(map, this.infantParkMarker);
    });

    this.japaneseGardenMarker.addListener('click', function() {
      this.infowindow = new google.maps.InfoWindow();
      this.infowindow.setContent(japaneseGardenInfowindowContentString);
      this.infowindow.setPosition(japaneseGardenLatLng);
      this.infowindow.open(map, this.japaneseGardenMarker);
    });

    this.naturalLibraryMarker.addListener('click', function() {
      this.infowindow = new google.maps.InfoWindow();
      this.infowindow.setContent(naturalLibraryInfowindowContentString);
      this.infowindow.setPosition(naturalLibraryLatLng);
      this.infowindow.open(map, this.naturalLibraryMarker);
    });

    this.orchidGardenMarker.addListener('click', function() {
      this.infowindow = new google.maps.InfoWindow();
      this.infowindow.setContent(orchidGardenInfowindowContentString);
      this.infowindow.setPosition(orchidGardenLatLng);
      this.infowindow.open(map, this.orchidGardenMarker);
    });

    this.parkingMarker.addListener('click', function() {
      this.infowindow = new google.maps.InfoWindow();
      this.infowindow.setContent(parkingInfowindowContentString);
      this.infowindow.setPosition(parkingLatLng);
      this.infowindow.open(map, this.parkingMarker);
    });

    this.permacultureMarker.addListener('click', function() {
      this.infowindow = new google.maps.InfoWindow();
      this.infowindow.setContent(permacultureInfowindowContentString);
      this.infowindow.setPosition(permacultureLatLng);
      this.infowindow.open(map, this.permacultureMarker);
    });

    this.smellsGardenMarker.addListener('click', function() {
      this.infowindow = new google.maps.InfoWindow();
      this.infowindow.setContent(smellsGardenInfowindowContentString);
      this.infowindow.setPosition(smellsGardenLatLng);
      this.infowindow.open(map, this.smellsGardenMarker);
    });

    this.sunWatchMarker.addListener('click', function() {
      this.infowindow = new google.maps.InfoWindow();
      this.infowindow.setContent(sunWatchInfowindowContentString);
      this.infowindow.setPosition(sunWatchLatLng);
      this.infowindow.open(map, this.sunWatchMarker);
    });

    this.teaHouseMarker.addListener('click', function() {
      this.infowindow = new google.maps.InfoWindow();
      this.infowindow.setContent(teaHouseInfowindowContentString);
      this.infowindow.setPosition(teaHouseLatLng);
      this.infowindow.open(map, this.teaHouseMarker);
    });

    this.visitantCenterMarker.addListener('click', function() {
      this.infowindow = new google.maps.InfoWindow();
      this.infowindow.setContent(visitantsCenterInfowindowContentString);
      this.infowindow.setPosition(visitantCenterLatLng);
      this.infowindow.open(map, this.visitantCenterMarker);
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
    this.hammockPlaceMarker.setMap(this.map);
    this.greenHouseMarker.setMap(this.map);
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

    //Set Marker's Name
    this.amphitheaterMarker.setTitle("Anfiteatro");
    this.cactusBoskMarker.setTitle("Cactário");
    this.centerOfExcellenceMarker.setTitle("Mirante");
    this.contemplationGardenMarker.setTitle("Jardim de Contemplação");
    this.evolutionaryGardenMarker.setTitle("Jardim Evolutivo");
    this.hammockPlaceMarker.setTitle("Redário");
    this.greenHouseMarker.setTitle("Estufas");
    this.healingGardenMarker.setTitle("Jardim Medicinal");
    this.infantParkMarker.setTitle("Parque Infantil");
    this.japaneseGardenMarker.setTitle("Jardim Japonês");
    this.naturalLibraryMarker.setTitle("Biblioteca da Natureza");
    this.orchidGardenMarker.setTitle("Orquidário");
    this.parkingMarker.setTitle("Estacionamento");
    this.permacultureMarker.setTitle("Permacultura");
    this.smellsGardenMarker.setTitle("Jardim de Cheiros");
    this.sunWatchMarker.setTitle("Relógio de Sol");
    this.teaHouseMarker.setTitle("Casa de Chá");
    this.visitantCenterMarker.setTitle("Centro de Visitantes");

    //Set markers as on
    this.markers_on = true;
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

    //Set markers as off
    this.markers_on = false;
  };
};
