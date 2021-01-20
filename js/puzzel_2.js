window.onload = () =>{
  var ni = document.getElementsByClassName("ni");
  var me = document.getElementsByClassName("me");
  var lala = document.getElementsByClassName("lala");
  var a = document.getElementsByClassName("a");
  var li = document.getElementsByClassName("li");
  var ku = document.getElementsByClassName("ku");
  var ona = document.getElementsByClassName("ona");
  var tu = document.getElementsByClassName("tu");
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
  var antwoord_opgeslagen = "";

  for(let i = 0; i < ni.length; i++){
    ni[i].onmouseenter = (event) => {
      antwoord_opgeslagen = ni[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      };
    }

  for(let i = 0; i < me.length; i++){
    me[i].onmouseenter = (event) => {
      antwoord_opgeslagen = me[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      };
    }

  for(let i = 0; i < lala.length; i++){
    lala[i].onmouseenter = (event) => {
      antwoord_opgeslagen = lala[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      };
    }

  for(let i = 0; i < a.length; i++){
    a[i].onmouseenter = (event) => {
      antwoord_opgeslagen = a[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      };
    }

  for(let i = 0; i < li.length; i++){
    li[i].onmouseenter = (event) => {
      antwoord_opgeslagen = li[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      };
    }

  for(let i = 0; i < ku.length; i++){
    ku[i].onmouseenter = (event) => {
      antwoord_opgeslagen = ku[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      };
    }

  for(let i = 0; i < ona.length; i++){
    ona[i].onmouseenter = (event) => {
      antwoord_opgeslagen = ona[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      };
    }

  for(let i = 0; i < tu.length; i++){
    tu[i].onmouseenter = (event) => {
      antwoord_opgeslagen = tu[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      };
    }

  for(let i = 0; i < sikia.length; i++){
    sikia[i].onmouseenter = (event) => {
      antwoord_opgeslagen = sikia[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      };
    }

  for(let i = 0; i < na.length; i++){
    na[i].onmouseenter = (event) => {
      antwoord_opgeslagen = na[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      };
    }

  for(let i = 0; i < soma.length; i++){
    soma[i].onmouseenter = (event) => {
      antwoord_opgeslagen = soma[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      };
    }

  for(let i = 0; i < wa.length; i++){
    wa[i].onmouseenter = (event) => {
      antwoord_opgeslagen = wa[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      };
    }

  for(let i = 0; i < ta.length; i++){
    ta[i].onmouseenter = (event) => {
      antwoord_opgeslagen = ta[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      };
    }

  for(let i = 0; i < penda.length; i++){
    penda[i].onmouseenter = (event) => {
      antwoord_opgeslagen = penda[i].getAttribute("value");
      console.log(antwoord_opgeslagen);
      };
    }

  for(let i = 0; i < geel_value.length; i++){
    geel_value[i].onmouseenter = (event) => {
      geel_value[i].setAttribute("value" , antwoord_opgeslagen);
      console.log(antwoord_opgeslagen);
    };
  }

};
