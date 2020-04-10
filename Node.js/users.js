const users =[]

const addUser = ({id, username, room }) => {

    //Clean data 
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validating the data
    if(!username || !room) {
        return {
            error: 'Username and room ar required'
        }
    }

    //Checking for the existing user
    const existingUser = users.find((user) =>{
        return user.room === room && user.username === username
    })



    //Validate the username 
    if(existingUser){
        return {
            error: 'Username is in use!'
        }
    }

    //store the user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

addUser({
    id: 23,
    username: 'Joe',
    room: 'Lounge'
})

console.log(users)

//running test in the terminal 'node src/utils/users.js'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Testing for Other people of the same variables in the chatgroup
addUser({
    id: 23,
    username: 'Joe',
    room: 'Lounge'
})

console.log(users)

const res = addUser({
    id: 26,
    username: 'Joe',
    room: 'Lounge'
})

console.log(res)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Validate the username 
    if(existingUser){
        return {
            error: 'Username is in use!'
        }
    }

    //store the user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1){
        return users.splice(index, 1)[0]
    }
}

addUser({
    id: 23,
    username: 'Joe',
    room: 'Lounge'
})

console.log(users)

const removedUser = removeUser(23)

console.log(removedUser)
console.log(users)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Need to have two new functions for the user
1.Fetch a user (needs to accept the id and return the user object - else its undefined)
2.Display an array of users - else display none
3.test code
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



