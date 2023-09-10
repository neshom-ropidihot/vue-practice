
Vue.component("plan", {
  template: `#plan-template`,
  props:{
    name : {
      type : String
    }
  }
});

var two = new Vue({
  el: "#app",
  data : {
    plans:['a','b','c']
  }
});
