window.onload = () =>{
  var taal = document.getElementsByClassName('js--keuze-taal');
  var schrift = document.getElementsByClassName('js--keuze-schrift');

  for(let j = 0; j < taal.length; j++){
    taal[j].onmouseenter = (event) => {
      taalKeuze = taal[j].getAttribute("value");
      taalKleur = taal[j].getAttribute("color");
      if(taalKleur == "yellow"){
        taal[j].setAttribute("color","lightgrey");
        taalKleur = taal[j].getAttribute("color");
      }
      else if(taalKleur == "lightgrey"){
        taal[j].setAttribute("color","yellow");
        taalKleur = taal[j].getAttribute("color");
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
      console.log(taalKeuze);
      if(schriftKeuze == taalKeuze){
        console.log(j);
        schrift[j].setAttribute("color","green");
        taal[j].setAttribute("color","green");
      }else{
        console.log("niet juist");
      }
    }
  }

}
