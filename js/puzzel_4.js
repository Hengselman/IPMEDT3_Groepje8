window.onload = () =>{
  var keuze = document.getElementsByClassName('js--keuze');

  for(let j = 0; j < keuze.length; j++){
    keuze[j].onmouseenter = (event) => {
      gemaakteKeuze = keuze[j].getAttribute("value");
      keuzeKleur = keuze[j].getAttribute("color");
      if(keuzeKleur == "lightblue" || keuzeKleur == "red" || keuzeKleur == "green"){
        keuze[j].setAttribute("color","lightgrey");
        keuzeKleur = keuze[j].getAttribute("color");
      }
      else if(keuzeKleur == "lightgrey"){
        keuze[j].setAttribute("color","lightblue");
        keuzeKleur = keuze[j].getAttribute("color");
        if(gemaakteKeuze == "onjuist"){
          keuze[j].setAttribute("color","red");
        }else{
          keuze[j].setAttribute("color","green");
        }
      }
    }
  }

}
