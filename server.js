const express = require('express');
const { toInteger } = require('lodash');
const app = express();
const ft = require("./features")
app.use(express.json())

app.listen(8080);
console.log('Server is listening on port 8080');

app.get("/api/task", async (req, res) => {
  const tasks=await ft.getTasks();
  if(tasks.length){
    res.send(tasks)
  }
  else{
    res.send('The list is empty!')
  }
})
app.post("/api/task", async (req, res) => {
  await  ft.addTask(req.body.task,req.body.date);
  res.send('Task added succesfully!');
})
app.delete("/api/task/:id", async (req, res) => {
  const id = req.params.id;
  await  ft.deleteTask(toInteger(id));
  res.send('Task deleted succesfully!');
})

app.put("/api/task/:id", async (req, res) => {
  const id = req.params.id;
  await  ft.editTask(toInteger(id),req.body.task,req.body.date,req.body.done);
  res.send('Task updated succesfully!');
})