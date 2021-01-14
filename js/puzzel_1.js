window.onload = () =>{
  var taal = document.getElementsByClassName('js--keuze-taal');
  var schrift = document.getElementsByClassName('js--keuze-schrift');

function taalKleurYes(){
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
      }
      console.log(taalKeuze);
      console.log(taalKleur);
    }
  }
}
taalkleur = taalKleurYes();


function schriftKleurYes(){
  for(let i = 0; i < schrift.length; i++){
    schrift[i].onmouseenter = (event) => {
      schriftKeuze = schrift[i].getAttribute("value");
      schriftKleur = schrift[i].getAttribute("color");
      if(schriftKleur == "blue"){
        schrift[i].setAttribute("color","lightgrey");
        schriftKleur = schrift[i].getAttribute("color");
      }
      else if(schriftKleur == "lightgrey"){
        schrift[i].setAttribute("color","blue");
        schriftKleur = schrift[i].getAttribute("color");
      }
      console.log(schriftKeuze);
      console.log(schriftKleur);
    }
  }
}

schriftkleur = schriftKleurYes();

function isJuist(taalkleur, schriftkleur){
  console.log("taalkleur is: " + taalkleur);
  console.log("schriftkleur is: " + schriftkleur);
}

isJuist(taalkleur, schriftkleur);
}
