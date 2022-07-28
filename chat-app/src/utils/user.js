const users = []

// addUser, removeUser, getUser, getUsersInRoom
const addUser = ({id, username, room}) => {
    // Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required'
        }
    }

    // Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validate username
    if (existingUser) {
        return {
            error: 'Username is in use'
        }
    }

    // Store user
    const user = { id, username, room}
    users.push(user)
    return { user }
}

// addUser({
//     id: 13,
//     username: '  Lazy',
//     room: "Devil"
// })
// console.log(users)

// const res = addUser({
//     id: 33, 
//     username: 'crazy',
//     room: 'devil'
// })
// // console.log(res)
// addUser({
//     id: 7, 
//     username: 'mad',
//     room: 'Crazy'
// })

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

// const removedUser = removeUser(13)
// console.log(removedUser)
// console.log(users)



const getUser = (id) => {
    return users.find((user) => user.id === id)
}

// const userToGet = getUser(13)
// console.log(userToGet)
// console.log(users)

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room.trim().toLowerCase())
    // if (res.length !== 0) {
    //     return res
    // }
    // return []
}

// const usersInRoom = getUsersInRoom('Crazy')
// console.log(usersInRoom)

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}