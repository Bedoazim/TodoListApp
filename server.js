const express = require('express');
const { toInteger } = require('lodash');
const app = express();
const ft = require("./features")
app.use(express.json())

app.listen(8080);
console.log('Server is listening on port 8080');

app.get("/api/task", async (req, res) => {
  console.log("request came");
  const tasks=await ft.getTasks();
  res.send(tasks)
})
app.post("/api/task", async (req, res) => {
  console.log("request came");
  await  ft.addTask(req.body.task,req.body.date);
  res.send('Task Added');
})
app.delete("/api/task/:id", async (req, res) => {
  const id = req.params.id;
  console.log("request came");
  await  ft.deleteTask(toInteger(id));
  res.send('Task deleted');
})

app.put("/api/task/:id", async (req, res) => {
  const id = req.params.id;
  console.log("request came");
  await  ft.editTask(toInteger(id),req.body.task,req.body.date,req.body.done);
  res.send('Task updated');
})