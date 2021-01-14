window.onload = () =>{
  var keuzes = document.getElementsByClassName('js--keuze');
  var schrift = document.getElementById('js--keuze-schrift');
  var taal = document.getElementById('js--keuze-taal')

  for(let i = 0; i < keuzes.length; i++){
    keuzes[i].onmouseenter = (event) => {
      keuze = keuzes[i].getAttribute("value");
      keuzes[i].setAttribute("color","yellow");
      console.log(keuze);

    }

  }


}
