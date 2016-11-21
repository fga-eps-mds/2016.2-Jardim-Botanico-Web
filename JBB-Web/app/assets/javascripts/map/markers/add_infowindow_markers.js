function addInfowindowMarkers(marker, information){
    infowindow.close();
    infowindow.setContent(information);
    infowindow.open(map, marker);
}
