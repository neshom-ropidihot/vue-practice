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
    el : '#app-3',
    data : {
        seen : true,
    }
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
  el : '#app-6',
  data : {
    message : 'Hello Vue Js !'
  }
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
  el : '#example-2',
  data : {
    parentMessage : 'parent',
    items : [
      { message : 'foo'},
      { message : 'bar'}
    ]
  }
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
    evenNumbers : function() {
      return this.numbers.filter(function(num) {
        return num % 2 === 0
      })
    }
  },
});

var evenNumber2 = new Vue({
  el: "#even-number-2",
  data : {
    sets: [
      [1,2,3,4,5],
      [6,7,8,9,10],
    ],
  },
  methods : {
    even : function(number) {
      return number.filter(function(n) {
        return n % 2 === 0
      });
    }
  }
});

var range = new Vue ({
  el : '#range',
  
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