window.onload = () =>{
  var sphere = document.getElementsByClassName('js--sphere');
  var keuze = document.getElementsByClassName('js--keuze');

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
      console.log(sphereKeuze);
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
      console.log(gemaakteKeuze);
      console.log(sphereKeuze);
      if(gemaakteKeuze == sphereKeuze){
        keuze[j].setAttribute("color","lightgreen");
        sphere[j].setAttribute("color","lightgreen");
      }
    }
  }

}
