const tasks = [
  {
    id: 1,
    title: "выучить JS",
    text: "Ходить на курс,делать домашки",
    completed: false
  },
  {
    id: 2,
    title: "Выучить React",
    text: "Ходить на курс,делать домашки",
    complete: false
  }
];
console.log("it is first scripts");
(function(arrTasks) {
  const objectOfTasks = arrTasks.reduce((acc, task) => {
    acc[task.id] = task;
    return acc;
  }, {});
  console.log("objectOfTasks", objectOfTasks);
  function renderAllTasks(taskList) {
    Object.values(taskList).forEach(task => {
      console.log(task);
      const li = listItem(task);
    });
  }
  function listItem({ id, text, title }) {
    console.log("iii", id, title, text);
  }
  renderAllTasks(objectOfTasks);
})(tasks);
