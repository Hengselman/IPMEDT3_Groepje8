window.onload = () =>{
  var places = document.getElementsByClassName('js--place');
  const camera = document.getElementById('js--puzzel_1-camera');
  var keuze = document.getElementById('js--keuze');
  let scene = document.getElementById('js--scene');


  for(let i = 0; i < places.length; i++){
    places[i].onmouseenter = (event) => {
      brush = places[i].getAttribute("value");
      console.log(brush);

    }

  }


}
