Vue.component("blog-post", {
  props: ["postTitle"],
  template: `<h3> {{ postTitle }} </h3>`,
});
var componentProps1 = new Vue({
  el: "#component-props-1",

});