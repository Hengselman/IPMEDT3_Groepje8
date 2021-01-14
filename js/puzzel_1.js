var taal = document.getElementsByClassName('js--keuze-taal');
  var schrift = document.getElementsByClassName('js--keuze-schrift');
  let taalKeuze = "";
  let taalKleur = "";
  let schriftKeuze = "";
  let schriftKleur = "";

function gemaakteKeuzes(){
  for(let i = 0; i < taal.length; i++){
    taal[i].onmouseenter = (event) => {
      taalKeuze = taal[i].getAttribute("value");
      taalKleur = taal[i].getAttribute("color");
      if(taalKleur == "yellow"){
        taal[i].setAttribute("color","lightgrey");
        taalKleur = taal[i].getAttribute("color");
      }
      else if(taalKleur == "lightgrey"){
        taal[i].setAttribute("color","yellow");
        taalKleur = taal[i].getAttribute("color");
        console.log(taalKeuze);
      }
    }
  }
  for(let j = 0; j < schrift.length; j++){
    schrift[j].onmouseenter = (event) => {
      schriftKeuze = schrift[j].getAttribute("value");
      schriftKleur = schrift[j].getAttribute("color");
      if(schriftKleur == "blue"){
        schrift[j].setAttribute("color","lightgrey");
        schriftKleur = schrift[j].getAttribute("color");
      }
      else if(schriftKleur == "lightgrey"){
        schrift[j].setAttribute("color","blue");
       schriftKleur = schrift[j].getAttribute("color");
      }
      schriftKleur = schrift[j].getAttribute("color");
      console.log(schriftKeuze);
    }
  }
  console.log("taalkeuze is: " + schriftKeuze);
  console.log("schriftkeuze is: " + schriftKeuze);
}

gemaakteKeuzes();
