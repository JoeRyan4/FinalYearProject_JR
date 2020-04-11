const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

let count = 0
//server to the client which is receiving the updated count
//client to the server receives the increment
///test for communication between client and server

io.on('connection', (socket) => {
    console.log('New Websocket connection')

    // socket.emit('countUpdated', count)


    // socket.on('increment', () => {
    //     count++
    //     //socket.emit('countUpdated', count)
    //     io.emit('countUpdated', count)
    })
})


server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})










////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 1.Send a welcome message to new users ie.(send welcome as an event data
// 2.Have the client listen for a message event and print the message to complete.
// 3.Test code


const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))



io.on('connection', (socket) => {
    console.log('New Websocket connection')

    socket.emit('message', 'welcome')

    // socket.emit('countUpdated', count)


    // socket.on('increment', () => {
    //     count++
    //     //socket.emit('countUpdated', count)
    //     io.emit('countUpdated', count)
   // })
})


server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

// //Goal: Allow Clients to send message
// //1. create a form with an input and button
// 2.set up a listener to form submisssions 
// 3.Have server listen for "sendMesages"
// 4. Test code


io.on('connection', (socket) => {
    console.log('New Websocket connection')

    socket.emit('message', 'welcome')

    // socket.emit('countUpdated', count)


    // socket.on('increment', () => {
    //     count++
    //     //socket.emit('countUpdated', count)
    //     io.emit('countUpdated', count)
   // })
})


server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))


io.on('connection', (socket) => {
    console.log('New Websocket connection')

    socket.emit('message', 'welcome')

    socket.on('sendMessage', (message) => {
        io.emit('message', message)

    })
})


server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

//function emulates when a user has joined/left the chat gooup

io.on('connection', (socket) => {
    console.log('New Websocket connection')

    socket.emit('message', 'welcome')
    socket.broadcast.emit('message', 'new user joined')

    socket.on('sendMessage', (message) => {
        io.emit('message', message)

    })

    socket.on('disconnect', () => {
        io.emit('message','a user has left')

    })
})


server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

//function emulates when a user has joined/left the chat gooup

io.on('connection', (socket) => {
    console.log('New Websocket connection')

    socket.emit('message', 'welcome')
    socket.broadcast.emit('message', 'new user joined')

    socket.on('sendMessage', (message) => {
        io.emit('message', message)
    })

    socket.on('sendLocation', (coords) => {
        io.emit('message', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
    })

    socket.on('disconnect', () => {
        io.emit('message','a user has left')
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

//function emulates when a user has joined/left the chat gooup

io.on('connection', (socket) => {
    console.log('New Websocket connection')

    socket.emit('message', 'welcome')
    socket.broadcast.emit('message', 'new user joined')

    socket.on('sendMessage', (message, collback) => {
        io.emit('message', message)
        callback('Delivered')
    })

    socket.on('sendLocation', (coords) => {
        io.emit('message', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
    })

    socket.on('disconnect', () => {
        io.emit('message','a user has left')
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

//function emulates when a user has joined/left the chat gooup

io.on('connection', (socket) => {
    console.log('New Websocket connection')

    socket.emit('message', 'welcome')
    socket.broadcast.emit('message', 'new user joined')

    socket.on('sendMessage', (message, callback) => {
        const filter = new Filter()

        if(filter.isProfane(message)) {
            return callback('Profanity is not allowed!')
        }

        io.emit('message', message)
        callback()
    })

    socket.on('sendLocation', (coords, callback) => {
        io.emit('message', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
        callback()
    })

    socket.on('disconnect', () => {
        io.emit('message','a user has left')
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

//function emulates when a user has joined/left the chat gooup

io.on('connection', (socket) => {
    console.log('New Websocket connection')

    socket.emit('message', 'welcome')
    socket.broadcast.emit('message', 'new user joined')

    socket.on('sendMessage', (message, callback) => {
        const filter = new Filter()

        if(filter.isProfane(message)) {
            return callback('Profanity is not allowed!')
        }

        io.emit('message', message)
        callback()
    })

    socket.on('sendLocation', (coords, callback) => {
        io.emit('locationMessage', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
        callback()
    })

    socket.on('disconnect', () => {
        io.emit('message','a user has left')
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const { generateMessage } = require('./utils/messages')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

//function emulates when a user has joined/left the chat gooup

io.on('connection', (socket) => {
    console.log('New Websocket connection')

    socket.emit('message', generateMessage('Welcome'))
    socket.broadcast.emit('message', 'new user joined')

    socket.on('sendMessage', (message, callback) => {
        const filter = new Filter()

        if(filter.isProfane(message)) {
            return callback('Profanity is not allowed!')
        }

        io.emit('message', message)
        callback()
    })

    socket.on('sendLocation', (coords, callback) => {
        io.emit('locationMessage', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
        callback()
    })

    socket.on('disconnect', () => {
        io.emit('message','a user has left')
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const { generateMessage } = require('./utils/messages')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    socket.emit('message', generateMessage('Welcome!'))
    socket.broadcast.emit('message', generateMessage('A new user has joined!'))

    socket.on('sendMessage', (message, callback) => {
        const filter = new Filter()

        if (filter.isProfane(message)) {
            return callback('Profanity is not allowed!')
        }

        io.emit('message', generateMessage(message))
        callback()
    })

    socket.on('sendLocation', (coords, callback) => {
        io.emit('locationMessage', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
        callback()
    })

    socket.on('disconnect', () => {
        io.emit('message', generateMessage('A user has left!'))
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const { generateMessage,generateLocationMessage } = require('./utils/messages')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    socket.emit('message', generateMessage('Welcome!'))
    socket.broadcast.emit('message', generateMessage('A new user has joined!'))

    socket.on('sendMessage', (message, callback) => {
        const filter = new Filter()

        if (filter.isProfane(message)) {
            return callback('Profanity is not allowed!')
        }

        io.emit('message', generateMessage(message))
        callback()
    })

    socket.on('sendLocation', (coords, callback) => {
        io.emit('locationMessage', generateLocationMessage(`https://google.com/maps?q=${coords.latitude},${coords.longitude}`))
        callback()
    })

    socket.on('disconnect', () => {
        io.emit('message', generateMessage('A user has left!'))
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const { generateMessage,generateLocationMessage } = require('./utils/messages')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    // socket.emit('message', generateMessage('Welcome!'))
    // socket.broadcast.emit('message', generateMessage('A new user has joined!'))

    socket.on('join', ({username, room}) => {
        socket.join(room)

        socket.emit('message', generateMessage('Welcome!'))
        socket.broadcast.to(room).emit('message', generateMessage('${username} has joined'))

        //socket.emit, io.emit, socket.broadcast.emt
        //io.to.emit, socket.broadcast.to.emit
    })


    socket.on('sendMessage', (message, callback) => {
        const filter = new Filter()

        if (filter.isProfane(message)) {
            return callback('Profanity is not allowed!')
        }

        io.emit('message', generateMessage(message))
        callback()
    })

    socket.on('sendLocation', (coords, callback) => {
        io.emit('locationMessage', generateLocationMessage())
        callback()
    })

    socket.on('disconnect', () => {
        io.emit('message', generateMessage('A user has left!'))
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// need to send messages to the correct room 
// use the event handler and getUser to get the user data
// message needs to emit into the current room (Must also work for send location)


// 1.set up server to send username to th client
// 2.edit the calls the include the username
// 3.check client to render username
// 4.test


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



