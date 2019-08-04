var app = new Vue({
  el: "#simpletasks",
  data: {
    title: "Tasks",
    newTask: "",

    tasks: [
      { text: "task 1", done: false, id: Date.now() },
      { text: "task 2", done: false, id: Date.now() + 1 }
    ]
  },
  methods: {
    addTask() {
      if (this.newTask.length > 0) {
        this.tasks.push({
          text: this.newTask,
          done: false,
          id: Date.now()
        });
        this.newTask = "";
      } else {
        window.alert("Please describe your task");
      }
    },
    removeTask(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1);
    }
  }
});
