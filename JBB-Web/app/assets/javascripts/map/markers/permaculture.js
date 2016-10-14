function addPermacultureMarker(){
    //set smells garden info, will be used at infowindow
    var permacultureInfowindowContentString =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Permacultura</h1>'+
        '<div id="bodyContent">'+
        '<p>O <b>Permacultura</b>, A unidade de permacultura compõe ' +
        'lado a lado com o Jardim de Cheiros a integração de um '+
        'sistema de natureza interligada. Foi construído utilizando '+
        'técnicas de bioconstrução, captação de água da chuva, '+
        'fossa ecológica, horta e jardim em pequenos espaços, etc. '+
        'Tecnologias milenares e inovadoras para garantir a sustentabilidade '+
        'não só do processo construtivo, mas também da ocupação.'+
        '<p>Leia mais em: <a href="/jbb_spaces/smells_garden"> '+
        'Permacultura</a> '+
        '</div>'+
        '</div>';

    //set the infowindow with smells garden info
    var infowindow = new google.maps.InfoWindow({
        content: permacultureInfowindowContentString
    });

    //set the position in latitude and longitude of the marker
    var permacultureLatLng = {lat: -15.875759, lng: -47.836626};

    //add the marker at the map in the position previously defined
    var permacultureMarker = new google.maps.Marker({
        position: permacultureLatLng,
        map: map,
        title: 'Permacultura'
    });

    //add a listener to verify if the marker is clicked
    permacultureMarker.addListener('click', function() {
        infowindow.open(map, permacultureMarker);
    });

    //set the marker on map
    permacultureMarker.setMap(map);
}
