require('../src/db/mongoose');
const Task = require('../src/models/task')

// Task.findByIdAndRemove('62dd917d1c88dbbbb7a202a9').then(() => {
//     console.log('Success');
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err);
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount("62dd910d1c88dbbbb7a202a7").then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
})