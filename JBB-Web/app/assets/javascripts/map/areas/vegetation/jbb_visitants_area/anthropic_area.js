var anthropicArea;

var anthropicAreaCoordinates = [
    {lat: -15.861174333815605, lng: -47.829580307006836},
    {lat: -15.861050489526903, lng: -47.82924771308899},
    {lat: -15.860854402580921, lng: -47.8289794921875},
    {lat: -15.860668635824624, lng: -47.8289794921875},
    {lat: -15.859750119903753, lng: -47.83073902130127},
    {lat: -15.860709917340808, lng: -47.82997727394104},
];

var anthropicAreaColor = '#87B591';

function addAnthropicArea(){
  anthropicArea = createVegetation(anthropicAreaCoordinates,
                                        anthropicAreaColor);

  anthropicArea.setMap(map);
}
