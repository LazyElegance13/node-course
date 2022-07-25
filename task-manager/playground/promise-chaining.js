require('../src/db/mongoose')

const User = require('../src/models/user')


// User.findByIdAndUpdate('62dd8ebb6a761c0126803db8', {
//     age: 18
// }).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 18})
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

// Async Await

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('62dd9af20acc6bcf63000b27', 29).then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
})

