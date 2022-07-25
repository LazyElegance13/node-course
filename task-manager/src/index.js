const express = require("express");
require("./db/mongoose");

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled.')
//   } else {
//     next()
//   }  
// })

// app.use((req, res, next) => {
//   res.status(503).send('The service is temperorily down due to scheduled maintenance.')
// })

app.use(express.json());
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//   // const task = await Task.findById("62ded30b8a7089612db35c17")
//   // await task.populate('owner')
//   // console.log(task.owner)

//   const user = await User.findById('62ded2289198c5829b0f6c7b')
//   await user.populate('tasks')
//   console.log(user.tasks)
// }

// main()