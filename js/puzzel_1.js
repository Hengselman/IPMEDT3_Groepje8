window.onload = () =>{
  const places = document.getElementsByClassName('js--place');
  const camera = document.getElementById('js--puzzel_1-camera');

  let scene = document.getElementById('js--scene');


  for(let i = 0; i < places.length; i++){
    places[i].addEventListener('mouseenter', function(evt){
      console.log("hallo");
    });
  }
};
