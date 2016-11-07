function addInfowindow(latLng, information){
    infowindow.close();
    infowindow.setContent(information);
    infowindow.setPosition(latLng);
    infowindow.open(map);
}
