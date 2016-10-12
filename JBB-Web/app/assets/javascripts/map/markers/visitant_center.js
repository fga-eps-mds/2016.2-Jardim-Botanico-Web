function addVisitantCenterMaker() {
	//set visitants info to use at infowindow
	var visitantsCenterContentString =
		'<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h1 id="firstHeading" class="firstHeading">Centro de Vistantes</h1>'+
		'<div id="bodyContent">'+
		'<p>O <b>Centro de Visitantes</b>, é onde o visitante se' +
		'informa sobre projetos, exposições, pesquisas, espaços de visitação, materiais' +
		'bibliográficos, eventos e visita orientada. ' +
		'<p>Leia mais em: <a href="/jbb_spaces/visitants_center">'+
		'Centro de Visitação</a> '+
		'</div>'+
		'</div>';

	//set infowindow
	var infowindow = new google.maps.InfoWindow({
			content: visitantsCenterContentString
	});

	//set position
	var visitantCenterLatLng = {lat:  -15.873780, lng: -47.836607};

	//set marker at map
	var visitantCenterMarker = new google.maps.Marker({
		position: visitantCenterLatLng,
		map: map,
		title: "Centro de Visitantes"
	});

	//add click listener
	visitantCenterMarker.addListener('click', function() {
		infowindow.open(map, visitantCenterMarker);
	});

	//sets on map
	visitantCenterMarker.setMap(map);
}
