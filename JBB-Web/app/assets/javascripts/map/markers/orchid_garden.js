var orchidGardenMarker;

function addOrchidGardenMaker() {
	//set position
	var orchidGardenLatLng = {lat: -15.872070, lng: -47.836940};

	//set marker at map
	orchidGardenMarker = new google.maps.Marker({
		position: orchidGardenLatLng,
		map: map,
		title: "Orquidário"
	});

	//add click listener
	orchidGardenMarker.addListener('click', addOrchidGardenInfowindow);

	//sets on map
	orchidGardenMarker.setMap(map);
}

function addOrchidGardenInfowindow (){
    //set visitants info to use at infowindow
    var orchidGardenContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Orquidário</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Orquidário</b>, abriga uma coleção de orquídeas composta por ' +
    'espécies nativas da flora brasileira, ' +
    'com ênfase para as do bioma Cerrado.' +
    '<p>Leia mais em: <a href="/jbb_spaces/orchid_gardem">'+
    'Orquidário</a> '+
    '</div>'+
    '</div>';

    infowindow.close();

    //set infowindow
    infowindow.setContent(orchidGardenContentString);
    
    infowindow.open(map, orchidGardenMarker);
}
