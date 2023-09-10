let planComponent = {
  template: `#plan-template`,
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};

let planpicker = {

    template: `#plan-picker-template`,
    components: {
        plan: planComponent,
    },
    data() {
        return {
            plans:['a','b','c']
        }
    }
}


var one = new Vue({
  el: "#app",
  components: {
    "plan-picker": planpicker,
  },
});
