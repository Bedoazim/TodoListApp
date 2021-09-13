
const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
  });

db.authenticate();

 const Todo = db.define('Todo',{
    Task:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement:true
    },
    Due_Date:{
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue:db.NOW
    },
    Done:{
        type: DataTypes.BOOLEAN,
        defaultValue:false
    }
});

 async function initializeDb(){
    await db.sync()
}

module.exports.initializeDb = initializeDb;
module.exports.Todo = Todo;