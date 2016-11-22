var trails_on  = false;

//Shows or remove trails at map
function setTrails() {
    if(trails_on) {
        transcerradoTrail.setMap(null);
        ecologicTrail.setMap(null);
        matterTrail.setMap(null);
        bikeTourEasy.setMap(null);
        bikeTourMedium.setMap(null);
        medicinalTrail.setMap(null);

        trails_on = false;
        infowindow.close();
    }
    else {
        addTrancerradoTrail();
        addBikeTourMedium();
        addMatterTrail();
        addBikeTourEasy();
        addmedicinalTrail();
        addEcologicTrail();
        addAcessibleTrail();

        trails_on = true;
    }
}
