window.onload = () =>{
  const places = document.getElementsByClassName('js--place');
  const camera = document.getElementById('js--puzzel_1-camera');

  let scene = document.getElementById('js--scene');


  for(let i = 0; i < places.length; i++){
    places[i].addEventListener('click', function(evt){
      //camera.setAttribute('position', this.getAttribute('position').x + ' 1.6 ' + this.getAttribute('position').z)
      let att = document.createAttribute("animation");
      att.value = "property: position; easing: linear; dur: 2000; to: " + this.getAttribute("position").x + " 1.6 " + this.getAttribute("position").z;
      camera.setAttribute("animation", att.value);
    });
  }
};
