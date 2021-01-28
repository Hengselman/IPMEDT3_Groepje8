window.onload = () => {
  var ni = document.getElementsByClassName("ni");
  var me = document.getElementsByClassName("me");
  var lala = document.getElementsByClassName("lala");
  var a = document.getElementsByClassName("a");
  var li = document.getElementsByClassName("li");
  var ku = document.getElementsByClassName("ku");
  var ona = document.getElementsByClassName("ona");
  var tu_p = document.getElementsByClassName("tu_p");
  var tu_g = document.getElementsByClassName("tu_g");
  var sikia = document.getElementsByClassName("sikia");
  var na = document.getElementsByClassName("na");
  var soma = document.getElementsByClassName("soma");
  var wa = document.getElementsByClassName("wa");
  var ta = document.getElementsByClassName("ta");
  var penda = document.getElementsByClassName("penda");
  var blauw_value = document.getElementsByClassName("blauw_value");
  var paars_value = document.getElementsByClassName("paars_value");
  var groen_value = document.getElementsByClassName("groen_value");
  var geel_value = document.getElementsByClassName("geel_value");
  var controle_text = document.getElementsByClassName("controle_text");
  var antwoord_opgeslagen = "";
  var triagle1 = document.getElementsByClassName('js--triangle-1');
  var triagle2 = document.getElementsByClassName('js--triangle-2');
  var triagle3 = document.getElementsByClassName('js--triangle-3');
  var triagle4 = document.getElementsByClassName('js--triangle-4');
  var triagle5 = document.getElementsByClassName('js--triangle-5');

  for(let i = 0; i < ni.length; i++){
    ni[i].onmouseenter = (event) => {
      antwoord_opgeslagen = ni[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      geel_value[i].setAttribute("value" , antwoord_opgeslagen);
      console.log(antwoord_opgeslagen);
      check_antwoord();
      };
    }

  for(let i = 0; i < me.length; i++){
    me[i].onmouseenter = (event) => {
      antwoord_opgeslagen = me[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      blauw_value[i].setAttribute("value" , antwoord_opgeslagen);
      console.log(antwoord_opgeslagen);
      check_antwoord();
      };
    }

  for(let i = 0; i < lala.length; i++){
    lala[i].onmouseenter = (event) => {
      antwoord_opgeslagen = lala[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      groen_value[i].setAttribute("value" , antwoord_opgeslagen);
      console.log(antwoord_opgeslagen);
      check_antwoord();
      };
    }

  for(let i = 0; i < a.length; i++){
    a[i].onmouseenter = (event) => {
      antwoord_opgeslagen = a[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      geel_value[i].setAttribute("value" , antwoord_opgeslagen);
      console.log(antwoord_opgeslagen);
      check_antwoord();
      };
    }

  for(let i = 0; i < li.length; i++){
    li[i].onmouseenter = (event) => {
      antwoord_opgeslagen = li[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      blauw_value[i].setAttribute("value" , antwoord_opgeslagen);
      console.log(antwoord_opgeslagen);
      check_antwoord();
      };
    }

  for(let i = 0; i < ku.length; i++){
    ku[i].onmouseenter = (event) => {
      antwoord_opgeslagen = ku[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      paars_value[i].setAttribute("value" , antwoord_opgeslagen);
      console.log(antwoord_opgeslagen);
      check_antwoord();
      };
    }

  for(let i = 0; i < ona.length; i++){
    ona[i].onmouseenter = (event) => {
      antwoord_opgeslagen = ona[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      groen_value[i].setAttribute("value" , antwoord_opgeslagen);
      console.log(antwoord_opgeslagen);
      check_antwoord();
      };
    }

  for(let i = 0; i < tu_g.length; i++){
    tu_g[i].onmouseenter = (event) => {
      antwoord_opgeslagen = tu_g[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      geel_value[i].setAttribute("value" , antwoord_opgeslagen);
      console.log(antwoord_opgeslagen);
      check_antwoord();
      };
    }

    for(let i = 0; i < tu_p.length; i++){
      tu_p[i].onmouseenter = (event) => {
        antwoord_opgeslagen = tu_p[i].getAttribute("value");
        console.log(antwoord_opgeslagen);
        paars_value[i].setAttribute("value" , antwoord_opgeslagen);
        console.log(antwoord_opgeslagen);
        check_antwoord();
        };
      }

  for(let i = 0; i < sikia.length; i++){
    sikia[i].onmouseenter = (event) => {
      antwoord_opgeslagen = sikia[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      groen_value[i].setAttribute("value" , antwoord_opgeslagen);
      console.log(antwoord_opgeslagen);
      check_antwoord();
      };
    }

  for(let i = 0; i < na.length; i++){
    na[i].onmouseenter = (event) => {
      antwoord_opgeslagen = na[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      blauw_value[i].setAttribute("value" , antwoord_opgeslagen);
      console.log(antwoord_opgeslagen);
      check_antwoord();
      };
    }

  for(let i = 0; i < soma.length; i++){
    soma[i].onmouseenter = (event) => {
      antwoord_opgeslagen = soma[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      groen_value[i].setAttribute("value" , antwoord_opgeslagen);
      console.log(antwoord_opgeslagen);
      check_antwoord();
      };
    }

  for(let i = 0; i < wa.length; i++){
    wa[i].onmouseenter = (event) => {
      antwoord_opgeslagen = wa[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      geel_value[i].setAttribute("value" , antwoord_opgeslagen);
      console.log(antwoord_opgeslagen);
      check_antwoord();
      };
    }

  for(let i = 0; i < ta.length; i++){
    ta[i].onmouseenter = (event) => {
      antwoord_opgeslagen = ta[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      blauw_value[i].setAttribute("value" , antwoord_opgeslagen);
      console.log(antwoord_opgeslagen);
      check_antwoord();
      };
    }

  for(let i = 0; i < penda.length; i++){
    penda[i].onmouseenter = (event) => {
      antwoord_opgeslagen = penda[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      groen_value[i].setAttribute("value" , antwoord_opgeslagen);
      console.log(antwoord_opgeslagen);
      check_antwoord();
      };
    }

  function check_antwoord(){
    var i = 0;
    var geel_antwoord = geel_value[i].getAttribute("value");
    var blauw_antwoord = blauw_value[i].getAttribute("value");
    var paars_antwoord = paars_value[i].getAttribute("value");
    var groen_antwoord = groen_value[i].getAttribute("value");
    if(geel_antwoord == "Ni" && blauw_antwoord == "na" && paars_antwoord == "ku" && groen_antwoord == "Penda"){
      controle_text[i].setAttribute("value" , "Goede antwoord");
      controle_text[i].setAttribute("color", "green");
      console.log("goede antwoord");
      for(let j = 0; j < triagle2.length; j++){
        if(schriftKleur1 == "green" && schriftKleur2 == "green" && schriftKleur3 == "green" && schriftKleur4 == "green" && schriftKleur5 == "green"){
          triagle2[j].getAttribute("color");
          triagle2[j].setAttribute("color", "green");
        }
      }
    }else{
      controle_text[i].setAttribute("value" , "Foute antwoord");
      controle_text[i].setAttribute("color", "red");
      console.log("fout antwoord");
    }
  }
  // misschien nog geluidje als je het goede antwoord hebt.
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
      for(let j = 0; j < triagle1.length; j++){
        if(schriftKleur1 == "green" && schriftKleur2 == "green" && schriftKleur3 == "green" && schriftKleur4 == "green" && schriftKleur5 == "green"){
          triagle1[j].getAttribute("color");
          triagle1[j].setAttribute("color", "green");
        }
      }

    }
  }

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

      gemaakteKeuze1 = keuze_puzzel_3[0].getAttribute("color");
      gemaakteKeuze2 = keuze_puzzel_3[1].getAttribute("color");
      gemaakteKeuze3 = keuze_puzzel_3[2].getAttribute("color");

      for(let j = 0; j < correct_puzzel_3.length; j++){
        if(gemaakteKeuze1 == "lightgreen" && gemaakteKeuze2 == "lightgreen" && gemaakteKeuze3 == "lightgreen"){
          correct_puzzel_3[j].getAttribute("value");
          correct_puzzel_3[j].setAttribute("value", "Gefeliciteerd! je hebt de puzzel opgelost en hiervoor krijg je de volgende letter: C");
        }
      }
      for(let j = 0; j < triagle3.length; j++){
        if(gemaakteKeuze1 == "lightgreen" && gemaakteKeuze2 == "lightgreen" && gemaakteKeuze3 == "lightgreen"){
          triagle3[j].getAttribute("color");
          triagle3[j].setAttribute("color", "green");
        }
      }
    }
  }

  var keuze_4 = document.getElementsByClassName('js--keuze-4');
  var correct_4 = document.getElementsByClassName('js--correct-4');
  var moetWeg = document.getElementsByClassName('js--correct-weg');

  for(let j = 0; j < keuze_4.length; j++){
    keuze_4[j].onmouseenter = (event) => {
      gemaakteKeuze_4 = keuze_4[j].getAttribute("value");
      keuzeKleur_4 = keuze_4[j].getAttribute("color");
      if(keuzeKleur_4 == "red" || keuzeKleur_4 == "green"){
        keuze_4[j].setAttribute("color","lightgrey");
        keuzeKleur_4 = keuze_4[j].getAttribute("color");
      }
        if(gemaakteKeuze_4 == "onjuist"){
          keuze_4[j].setAttribute("color","lightgrey");
        }else{
          keuze_4[j].setAttribute("color","green");
        }
        keuzeKleur_4 = keuze_4[j].getAttribute("color");
        moetWeg
        for(let j = 0; j < correct_4.length; j++){
          if(keuzeKleur_4 == "green"){
            correct_4[j].getAttribute("value");
            correct_4[j].setAttribute("value", "Gefeliciteerd! je hebt de puzzel opgelost en hiervoor krijg je de volgende letter: T");
          }
        }
        for(let j = 0; j < triagle4.length; j++){
          if(keuzeKleur_4 == "green"){
            triagle4[j].getAttribute("color");
            triagle4[j].setAttribute("color", "green");
          }
        }
        for(let j = 0; j < moetWeg.length; j++){
          if(keuzeKleur_4 == "green"){
            moetWeg[j].getAttribute("value");
            moetWeg[j].setAttribute("value", "");
          }
        }

      }
  }

  console.log("Script laad in");
  const teleportRaadsel = document.getElementsByClassName('js--teleportRaadsel')
  const teleport1 = document.getElementsByClassName('js--teleportPuzzel1')
  const teleport2 = document.getElementsByClassName('js--teleportPuzzel2')
  const teleport3 = document.getElementsByClassName('js--teleportPuzzel3')
  const teleport4 = document.getElementsByClassName('js--teleportPuzzel4')
  const teleport5 = document.getElementsByClassName('js--teleportPuzzel5')

  const camera = document.getElementById('js--camera');

  for (var i =0; i < teleportRaadsel.length; i++){
    teleportRaadsel[i].addEventListener('click', function(evt){
      camera.setAttribute('position', "0 1.6 0")
      console.log("Teleporteer naar raadsel, whoosh.");
    });
  }

  for (var i =0; i < teleport1.length; i++){
    teleport1[i].addEventListener('click', function(evt){
      camera.setAttribute('position', "-12 1.6 0")
      console.log("Teleporteer naar puzzel 1, whoosh.");
    });
  }

  for (var i =0; i < teleport2.length; i++){
    teleport2[i].addEventListener('click', function(evt){
      camera.setAttribute('position', "-24 1.6 0")
      console.log("Teleporteer naar puzzel 2, whoosh.");
    });
  }

  for (var i =0; i < teleport3.length; i++){
    teleport3[i].addEventListener('click', function(evt){
      camera.setAttribute('position', "0 1.6 -12")
      console.log("Teleporteer naar puzzel 3, whoosh.");
    });
  }

  for (var i =0; i < teleport4.length; i++){
    teleport4[i].addEventListener('click', function(evt){
      camera.setAttribute('position', "-12 1.6 -12")
      console.log("Teleporteer naar puzzel 4, whoosh.");
    });
  }

  for (var i =0; i < teleport5.length; i++){
    teleport5[i].addEventListener('click', function(evt){
      camera.setAttribute('position', "-24 1.6 -12")
      console.log("Teleporteer naar puzzel 5, whoosh.");
    });
  }

}
