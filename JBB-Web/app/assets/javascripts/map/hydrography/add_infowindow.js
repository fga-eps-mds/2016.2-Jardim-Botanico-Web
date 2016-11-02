function addInfowindow(latLng, information){
    infoWindow.close();
    infoWindow.setContent(information);
    infoWindow.setPosition(latLng);
    infoWindow.open(map);
}
