var anthropicAreaPolygon;
function addAnthropicAreaPolygon(){
  var anthropicAreaPolygonCoords = [
{lat: -15.861174333815605, lng: -47.829580307006836},
{lat: -15.861050489526903, lng: -47.82924771308899},
{lat: -15.860854402580921, lng: -47.8289794921875},
{lat: -15.860668635824624, lng: -47.8289794921875},
{lat: -15.859750119903753, lng: -47.83073902130127},
{lat: -15.860709917340808, lng: -47.82997727394104},
  ];

    // Construct the polygon.
    anthropicAreaPolygon = new google.maps.Polygon({
      paths: anthropicAreaPolygonCoords,
      strokeColor: '#87B591',
      strokeOpacity: 0.1,
      strokeWeight: 3,
      fillColor: '#87B591',
      fillOpacity: 0.35
    });

    anthropicAreaPolygon.setMap(map);
}