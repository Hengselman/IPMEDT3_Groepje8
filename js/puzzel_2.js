window.onload = () =>{
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

    }
  }
};
