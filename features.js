const dbb = require("./database")

dbb.initializeDb();

async function addTask(name,date){
    const add = await dbb.Todo.create({Task: name, Due_Date:date,Done:false});
    await add.save();
  }
  
  async function editTask(id,name,date,done){
    const edit= await dbb.Todo.findOne({
        where:{
            Id: id
        }
    })
    edit.Task=name;
    edit.Due_Date=date;
    edit.Done=done;
    await edit.save();
  }
  
  async function deleteTask(id){
    const task= await dbb.Todo.findOne({
        where:{
            Id: id
        }
    })
    await task.destroy();
  }
  
  async function getTasks(){
   let done=[],undone=[];
   undone = await dbb.Todo.findAll({
    where:{
        Done : false
    }
   })
   done= await dbb.Todo.findAll({
    where:{
        Done : true
    }
   })
   const tasks=undone.concat(done);
   return tasks;
  }

  module.exports.getTasks = getTasks
  module.exports.editTask = editTask
  module.exports.deleteTask = deleteTask
  module.exports.addTask = addTask