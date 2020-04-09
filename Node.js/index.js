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


1.Send a welcome message to new users ie.(send welcome as an event data
2.Have the client listen for a message event and print the message to complete.
3. Test code













