window.onload = () =>{
  var taal = document.getElementsByClassName('js--keuze-taal');
  var schrift = document.getElementsByClassName('js--keuze-schrift');
  var correct = document.getElementsByClassName('js--a');

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
      if(schriftKeuze == taalKeuze){
        schrift[j].setAttribute("color","green");
        taal[j].setAttribute("color","green");
      }
      schriftKleur1 = schrift[0].getAttribute("color");
      schriftKleur2 = schrift[1].getAttribute("color");
      schriftKleur3 = schrift[2].getAttribute("color");
      schriftKleur4 = schrift[3].getAttribute("color");
      schriftKleur5 = schrift[4].getAttribute("color");
      for(let j = 0; j < correct.length; j++){
        if(schriftKleur1 == "green" && schriftKleur2 == "green" && schriftKleur3 == "green" && schriftKleur4 == "green" && schriftKleur5 == "green"){
          correct[j].getAttribute("value");
          correct[j].setAttribute("value", "Gefeliciteerd! je hebt de puzzel opgelost en hiervoor krijg je de volgende letter: A");
        }
      }

    }
  }


}
