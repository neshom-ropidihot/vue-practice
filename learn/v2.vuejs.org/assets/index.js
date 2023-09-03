var app = new Vue({
  el: "#app",
  data: {
    message: "hello Vue!",
  },
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "You loaded this page on " + new Date().toLocaleString(),
  },
});

var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true,
  },
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { txt: "Learn JavaScript" },
      { txt: "Learn Vue" },
      { txt: "Build something awesome" },
    ],
  },
});

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue Js!",
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello Vue Js !",
  },
});

// Vue.component('todo-item', {
// template : '<li>This is a todo</li>'
// });

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>",
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: "Vegetables" },
      { id: 1, text: "Cheese" },
      { id: 2, text: "Whatever else humans are supposed to eat" },
    ],
  },
});

// 2.List Rendering

var example1 = new Vue({
  el: "#example-1",
  data: {
    items: [{ message: "foo" }, { message: "bar" }],
  },
});

var example2 = new Vue({
  el: "#example-2",
  data: {
    parentMessage: "parent",
    items: [{ message: "foo" }, { message: "bar" }],
  },
});

var vforobject = new Vue({
  el: "#v-for-object",
  data: {
    object: {
      title: "How to do lists in Vue",
      author: "Jane Doe",
      publishedAt: "2016-04-10",
    },
  },
});

var evenNumber = new Vue({
  el: "#even-number",
  data: {
    numbers: [1, 2, 3, 4, 5],
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (num) {
        return num % 2 === 0;
      });
    },
  },
});

var evenNumber2 = new Vue({
  el: "#even-number-2",
  data: {
    sets: [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
    ],
  },
  methods: {
    even: function (number) {
      return number.filter(function (n) {
        return n % 2 === 0;
      });
    },
  },
});

var range = new Vue({
  el: "#range",
});

Vue.component("todo-item", {
  template:
    "\
    <li>\
      {{ title }}\
      <button v-on:click=\"$emit('remove')\">Remove</button>\
    </li>\
  ",
  props: ["title"],
});

// ;
var todolistexample = new Vue({
  el: "#todo-list-example",
  data: {
    newTodoText: "",
    todos: [
      {
        id: 1,
        title: "Do the dishes",
      },
      {
        id: 2,
        title: "Take out the trash",
      },
      {
        id: 3,
        title: "Mow the lawn",
      },
    ],
    nextTodoId: 4,
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
      });
      this.newTodoText = "";
    },
  },
});

// 3.conditional

var oneCondition = new Vue({
  el: "#one-condition",
  data: {
    awesome: true,
    type: "A",
    ok: true,
  },
});

// 4.Class and Style Bindings

var oneClass = new Vue({
  el: "#one-class",
  data: {
    isActive: true,
    hasError: false,
  },
});

var twoClass = new Vue({
  el: "#two-class",
  data: {
    classObject: {
      isActive: true,
      "text-danger": false,
    },
    activeClass: "active1",
    errorClass: "error1",
    isActive: true,
  },
});

var threeClass = new Vue({
  el: "#three-class",
  data: {
    color: "red",
    fontSize: 20,
    styleObject: {
      color: "blue",
      fontSize: "100px",
    },
  },
});

// 5.Computed Properties and Watchers

var example = new Vue({
  el: "#example",
  data: {
    message: "Hello Vue!",
    firstName: "Foo",
    lastName: "Bar",
  },
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("");
    },
    fullName: {
      // getter
      get: function () {
        return this.firstName + " " + this.lastName;
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
  },
  methods: {
    reversedMessageMethods() {
      return this.message.split("").reverse().join("");
    },
  },
});

// 6.ComponentsBasics
Vue.component("click-counter", {
  template: `
  <button @click="count++"> clicked me {{ count }} </button>
  `,
  data() {
    return {
      count: 0,
    };
  },
});

Vue.component("click-counter2", {
  template: `#click-counter22`,
  data() {
    return {
      count: 0,
    };
  },
});
var component1 = new Vue({
  el: "#component-1",
});
var component2 = new Vue({
  el: "#component-2",
});

Vue.component("blog-post", {
  props: ["title"],
  template: `<h3> {{ title }} </h3>`,
});
Vue.component3 = new Vue({
  el: "#component-3",
  data: {
    posts: [
      { id: 1, title: "My journey with Vue" },
      { id: 2, title: "Blogging with Vue" },
      { id: 3, title: "Why Vue is so fun" },
    ],
  },
});

Vue.component("blog-post-1", {
  props: ["post"],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
        <button v-on:click="$emit('enlarge-text', 0.1)">
          Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `,
});

var component4 = new Vue({
  el: "#component-4",
  data: {
    posts: [
      { id: 1, title: "My journey with Vue" },
      { id: 2, title: "Blogging with Vue" },
      { id: 3, title: "Why Vue is so fun" },
    ],
    postFontSize: 1,
  },
  methods: {
    onEnlargeText(size) {
      this.postFontSize += size;
    },
  },
});

Vue.component("box", {
  template: `
  <div>
  Error!: 
  <slot></slot>
  </div>`,
});
var component5 = new Vue({
  el: "#component-5",
});

Vue.component("tab-home", {
  template:  `<div>Home component</div>`,
});
Vue.component("tab-posts", {
  template: `<div>Posts component</div>`,
});
Vue.component("tab-archive", {
  template: `<div>Archive component</div>`,
});

var component6 = new Vue({
  el: "#component-6",
  data: {
    currentTab: "Home",
    tabs: ["Home", "Posts", "Archive"],
  },
  computed: {
    currentTabComponent() {
      return "tab-" + this.currentTab.toLowerCase();
    },
  },
});
