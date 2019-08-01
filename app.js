var app = new Vue({
  el: "#simpletasks",
  data: {
    title: "Tasks overview",
    tasks: [
      { text: "task 1", done: false, id: Date.now() },
      { text: "task 2", done: false, id: Date.now() + 1 }
    ]
  },
  methods: {}
});
