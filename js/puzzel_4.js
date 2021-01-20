window.onload = () =>{
  var keuze = document.getElementsByClassName('js--keuze');
  var correct = document.getElementsByClassName('js--correct');

  for(let j = 0; j < keuze.length; j++){
    keuze[j].onmouseenter = (event) => {
      gemaakteKeuze = keuze[j].getAttribute("value");
      keuzeKleur = keuze[j].getAttribute("color");
      if(keuzeKleur == "red" || keuzeKleur == "green"){
        keuze[j].setAttribute("color","lightgrey");
        keuzeKleur = keuze[j].getAttribute("color");
      }
        if(gemaakteKeuze == "onjuist"){
          keuze[j].setAttribute("color","red");
        }else{
          keuze[j].setAttribute("color","green");
        }
        keuzeKleur = keuze[j].getAttribute("color");
        console.log(keuzeKleur);

        for(let j = 0; j < correct.length; j++){
          if(keuzeKleur == "green"){
            correct[j].getAttribute("value");
            correct[j].setAttribute("value", "Gefeliciteerd! je hebt de puzzel opgelost en hiervoor krijg je de volgende letter: T");
          }
        }

      }

    }
  }
