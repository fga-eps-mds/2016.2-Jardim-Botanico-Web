var rivers_on = false;

function setJbbRivers() {
  if(rivers_on) {
    taperaRiver.setMap(null);
    redentorCristRiver.setMap(null);
    redentorCristRiverArm.setMap(null);
    cochoRiver.setMap(null);
    taperaRiverArm.setMap(null);
    taperaRiverArm2.setMap(null);
    deerHeadRiver.setMap(null);
    caesb1River.setMap(null);
    caesb2River.setMap(null);
    caesb3River.setMap(null);
    caesb4River.setMap(null);
    deerHeadRiverArm.setMap(null);
    deerHeadRiverArm2.setMap(null);
    deerHeadRiverArm3.setMap(null);

    infowindow.close();
    rivers_on = false;
  }
  else {
    addTaperaRiver();
    addRedentorCristRiver();
    addRedentorCristRiverArm();
    addCochoRiver();
    addTaperaRiverArm();
    addTaperaRiverArm2();
    addDeerHeadRiver();
    addCaesb1River();
    addCaesb2River();
    addCaesb3River();
    addCaesb4River();
    addDeerHeadRiverArm();
    addDeerHeadRiverArm2();
    addDeerHeadRiverArm3();

    rivers_on = true;
  }
}
