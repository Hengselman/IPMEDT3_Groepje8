AFRAME.registerComponent("reloader", {
  init: function(){
    const planeet = document.querySelectorAll("[planeet]");
    const BASE_URL_PlANEET = "https://swapi.dev/api/planets/";
    this.newPlaneet = function(){
      for(let i = 0; i < planeet.length; i++){
      let randomNum = Math.floor(Math.random() * 60) + 1;
      fetch(BASE_URL_PlANEET + randomNum + "/")
      .then(response => response.json())
      .then(data => planeet[i].setAttribute("value", data.name));
      }
    }
    this.el.addEventListener("mouseenter", this.newPlaneet);
  },
  update:function(){
    this.newPlaneet();
  },
  tick:function(){},
  remove:function(){},
  pause:function(){},
  play:function(){}
});
