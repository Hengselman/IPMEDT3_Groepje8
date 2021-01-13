window.onload = () =>{
  const places = document.getElementsByClassName('js--place');
  const camera = document.getElementById('js--puzzel_1-camera');

  let scene = document.getElementById('js--scene');



};

function keuze(){
  const places = document.getElementsByClassName('js--place');
  for(let i = 0; i < places.length; i++){
    places[i].addEventListener('click', function(evt){
      value = document.getElementById('js--tekst')[i];
      keuze = value.getAttribute('value');
      console.log(value);
    });
  }
}

keuze();
