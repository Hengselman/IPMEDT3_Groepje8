window.onload = () =>{
  var sphere_puzzel_3 = document.getElementsByClassName('js--sphere-3');
  var keuze_puzzel_3 = document.getElementsByClassName('js--keuze-3');
  var correct_puzzel_3 = document.getElementsByClassName('js--correct-3');

  for(let j = 0; j < sphere_puzzel_3.length; j++){
    sphere_puzzel_3[j].onmouseenter = (event) => {
      sphereKeuze_3 = sphere_puzzel_3[j].getAttribute("value");
      sphereKleur_3 = sphere_puzzel_3[j].getAttribute("color");
      if(sphereKleur_3 == "lightblue"){
        sphere_puzzel_3[j].setAttribute("color","lightpink");
        sphereKleur_3 = sphere_puzzel_3[j].getAttribute("color");
      }
      else if(sphereKleur_3 == "lightpink"){
        sphere_puzzel_3[j].setAttribute("color","lightblue");
        sphereKleur_3 = sphere_puzzel_3[j].getAttribute("color");
      }
    }
  }

  for(let j = 0; j < keuze_puzzel_3.length; j++){
    keuze_puzzel_3[j].onmouseenter = (event) => {
      gemaakteKeuze_3 = keuze_puzzel_3[j].getAttribute("value");
      keuzeKleur_3 = keuze_puzzel_3[j].getAttribute("color");
      if(keuzeKleur_3 == "blue"){
        keuze_puzzel_3[j].setAttribute("color","lightgrey");
        keuzeKleur = keuze_puzzel_3[j].getAttribute("color");
      }
      else if(keuzeKleur_3 == "lightgrey"){
        keuze_puzzel_3[j].setAttribute("color","blue");
        keuzeKleur_3 = keuze_puzzel_3[j].getAttribute("color");
      }
      if(gemaakteKeuze_3 == sphereKeuze_3){
        keuze_puzzel_3[j].setAttribute("color","lightgreen");
        sphere_puzzel_3[j].setAttribute("color","lightgreen");
      }

      gemaakteKeuze1 = keuze[0].getAttribute("color");
      gemaakteKeuze2 = keuze[1].getAttribute("color");
      gemaakteKeuze3 = keuze[2].getAttribute("color");

      for(let j = 0; j < correct.length; j++){
        if(gemaakteKeuze1 == "lightgreen" && gemaakteKeuze2 == "lightgreen" && gemaakteKeuze3 == "lightgreen"){
          correct_puzzel_3[j].getAttribute("value");
          correct_puzzel_3[j].setAttribute("value", "Gefeliciteerd! je hebt de puzzel opgelost en hiervoor krijg je de volgende letter: C");
        }
      }
    }
  }

}
