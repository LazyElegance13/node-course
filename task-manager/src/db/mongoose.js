const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");
// , {
//     useNewUrlParser: true,
//     useCreateIndex: true
// })

// const me = new User({
//     name : '  Scarlet ',
//     email: 'scarletJ@email.com  ',
//     password: 'hotness ',
//     age: 29
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((err) => {
//     console.log('Error!', err);
// })

// const todo = new Task({
//     description: "Complete Mongoose Section",
//     completed: false,
// })

// todo.save().then(() => {
//     console.log(todo)
// }).catch((err) => {
//     console.log(err)
// })
