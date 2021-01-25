window.onload = () => {
  console.log("Script laad in");
  const teleportRaadsel = document.getElementById('js--teleportRaadsel')
  const teleport1 = document.getElementById('js--teleportPuzzel1')
  const teleport2 = document.getElementById('js--teleportPuzzel2')
  const teleport3 = document.getElementById('js--teleportPuzzel3')
  const teleport4 = document.getElementById('js--teleportPuzzel4')
  const teleport5 = document.getElementById('js--teleportPuzzel5')

  const camera = document.getElementById('js--camera');

  function addListeners(){
    teleportRaadsel.addEventListener('click', function(evt){
      camera.setAttribute('position', "0 1.6 0")
      console.log("Teleporteer naar raadsel, whoosh.");
    });

    teleport1.addEventListener('click', function(evt){
      camera.setAttribute('position', "-12 1.6 0")
      console.log("Teleporteer naar puzzel 1, whoosh.");
    });

    teleport2.addEventListener('click', function(evt){
      camera.setAttribute('position', "-24 1.6 0")
      console.log("Teleporteer naar puzzel 2, whoosh.");
    });

    teleport3.addEventListener('click', function(evt){
      camera.setAttribute('position', "0 1.6 -12")
      console.log("Teleporteer naar puzzel 3, whoosh.");
    });

    teleport4.addEventListener('click', function(evt){
      camera.setAttribute('position', "-12 1.6 -12")
      console.log("Teleporteer naar puzzel 4, whoosh.");
    });

    teleport5.addEventListener('click', function(evt){
      camera.setAttribute('position', "-24 1.6 -12")
      console.log("Teleporteer naar puzzel 5, whoosh.");
    });
  }

  addListeners();
}
