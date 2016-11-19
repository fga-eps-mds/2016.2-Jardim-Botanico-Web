var permaculture;

var permacultureCoordinate = {lat: -15.875759, lng: -47.836626};

var permacultureContentString =
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
    'não só do processo construtivo, mas também da ocupação. <br><br>'+
    '<img src="/assets/portfolio/fullsize/19.jpg" class="img-responsive" alt="" style="width: 550px;height: 250px;">' +
    '<p>Leia mais em: <a href="http://www.jardimbotanico.df.gov.br/espacos-jbb/permacultura/" target="_blank"> '+
    'Permacultura</a> '+
    '</div>'+
    '</div>';

var permacultureTitle = 'Permacultura';

function addPermacultureMarker(){
    //create the jbb space
    permaculture = createJbbSpace(permacultureCoordinate, permacultureTitle);

    //set the jbb space on map
    permaculture.setMap(map);

    //add a listener to open a infowindow every time the jbb space is clicked
    google.maps.event.addListener(permaculture, 'click', function() {
        addInfowindowMarkers(permaculture, permacultureContentString);
    });
}
