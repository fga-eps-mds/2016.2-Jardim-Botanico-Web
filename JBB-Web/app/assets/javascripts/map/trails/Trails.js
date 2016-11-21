class Trails {


  constructor(map) {
    this.map = map;
    this.infowindow;
    this.trails_on = false;

    //Initializing Trails
    this.matterTrailPolyline = new google.maps.Polyline({
        path: matterTrailCoords,
        geodesic: true,
        strokeColor: '#ff533d',
        strokeOpacity: 1,
        strokeWeight: 3
    });

    this.ecologicTrailPolyline = new google.maps.Polyline({
        path: ecologicTrailCoords,
        geodesic: true,
        strokeColor: '#15317e',
        strokeOpacity: 1,
        strokeWeight: 3
    });
  }


  setListener(){
    this.matterTrailPolyline.addListener('click', function() {
      infowindow.setContent(matterTrailContentString);
      infowindow.setPosition({lat: -15.863455119200005, lng: -47.83678572624922});
      infowindow.open(map, this.matterTrailPolyline);
    });

    this.ecologicTrailPolyline.addListener('click', function() {
      infowindow.setContent(ecologicTrailContentString);
      infowindow.setPosition({lat: -15.875535627259856, lng: -47.83130550387796});
      infowindow.open(map, this.ecologicTrailPolyline);
    });
  }


  setMap() {
    //Set Trails at the map
    this.matterTrailPolyline.setMap(map);

    //Set Trails at the map
    this.ecologicTrailPolyline.setMap(map);

    //Set markers as on
    this.trails_on = true;
  };


  setNull() {
    //Set Trails as null
    this.matterTrailPolyline.setMap(null);

    //Set Trails as null
    this.ecologicTrailPolyline.setMap(null);

    //Set markers and infowindow as off
    this.trails_on = false;
    infowindow.setMap(null);
  };
};
