window.onload = () => {
  console.log("Script laad in");
  const teleport1 = document.getElementById('js--teleportPuzzel1')
  const teleport2 = document.getElementById('js--teleportPuzzel2')
  const teleport3 = document.getElementById('js--teleportPuzzel3')
  const teleport4 = document.getElementById('js--teleportPuzzel4')
  const teleport5 = document.getElementById('js--teleportPuzzel5')

  const camera = document.getElementById('js--camera');

  function addListeners(){
    teleport1.addEventListener('click', function(evt){
      console.log("Klik!");
      camera.setAttribute('position', "-5 1.6 -5")
    });

    teleport2.addEventListener('click', function(evt){
      camera.setAttribute('position', "5 1.6 -5")
    });

    teleport3.addEventListener('click', function(evt){
      camera.setAttribute('position', "-5 1.6 -11")
    });

    teleport4.addEventListener('click', function(evt){
      camera.setAttribute('position', "5 1.6 -11")
    });

    teleport5.addEventListener('click', function(evt){
      camera.setAttribute('position', "-5 1.6 -17")
    });
  }

  addListeners();



    //  let att = document.createAttribute("animation");
    //  att.value = "property: position; easing: linear; dur: 2000; to: " +
    //  this.getAttribute('position').x + " 1.6 " + this.getAttribute('position').z;
    //  camera.setAttribute('animation', att.value);
  //  });
}
