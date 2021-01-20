window.onload = () =>{
  var sphere = document.getElementsByClassName('js--sphere');
  var keuze = document.getElementsByClassName('js--keuze');
  var correct = document.getElementsByClassName('js--correct');

  for(let j = 0; j < sphere.length; j++){
    sphere[j].onmouseenter = (event) => {
      sphereKeuze = sphere[j].getAttribute("value");
      sphereKleur = sphere[j].getAttribute("color");
      if(sphereKleur == "lightblue"){
        sphere[j].setAttribute("color","lightpink");
        sphereKleur = sphere[j].getAttribute("color");
      }
      else if(sphereKleur == "lightpink"){
        sphere[j].setAttribute("color","lightblue");
        sphereKleur = sphere[j].getAttribute("color");
      }
    }
  }

  for(let j = 0; j < keuze.length; j++){
    keuze[j].onmouseenter = (event) => {
      gemaakteKeuze = keuze[j].getAttribute("value");
      keuzeKleur = keuze[j].getAttribute("color");
      if(keuzeKleur == "blue"){
        keuze[j].setAttribute("color","lightgrey");
        keuzeKleur = keuze[j].getAttribute("color");
      }
      else if(keuzeKleur == "lightgrey"){
        keuze[j].setAttribute("color","blue");
        keuzeKleur = keuze[j].getAttribute("color");
      }
      schriftKleur = keuze[j].getAttribute("color");
      if(gemaakteKeuze == sphereKeuze){
        keuze[j].setAttribute("color","lightgreen");
        sphere[j].setAttribute("color","lightgreen");
      }

      gemaakteKeuze1 = keuze[0].getAttribute("color");
      gemaakteKeuze2 = keuze[1].getAttribute("color");
      gemaakteKeuze3 = keuze[2].getAttribute("color");

      for(let j = 0; j < correct.length; j++){
        if(gemaakteKeuze1 == "lightgreen" && gemaakteKeuze2 == "lightgreen" && gemaakteKeuze3 == "lightgreen"){
          correct[j].getAttribute("value");
          correct[j].setAttribute("value", "Gefeliciteerd! je hebt de puzzel opgelost en hiervoor krijg je de volgende letter: C");
        }
      }
    }
  }

}
