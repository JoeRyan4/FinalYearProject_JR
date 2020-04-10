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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



