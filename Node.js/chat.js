const socket = io()

// socket.on('countUpdated', (count) => {
//     console.log('The count has been updated', count)
// })

// document.querySelector('#increment').addEventListener('click', () => {
//     console.log('Clicked')
//     socket.emit('increment')
// })



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const socket = io()


socket.on('message', (message) => {
    console.log(message)
})



// socket.on('countUpdated', (count) => {
//     console.log('The count has been updated', count)
// })

// document.querySelector('#increment').addEventListener('click', () => {
//     console.log('Clicked')
//     socket.emit('increment')
// })


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const socket = io()


socket.on('message', (message) => {
    console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {

        e.preventDefault()

    //target represents the the target event we are listening i.e 'form'  
    //Alternative way to get the input, less likely to crash when the HTML is being altered
     const message = e.target.elements.message.value
     
     socket.emit('sendMessage', message)
})


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const socket = io()


socket.on('message', (message) => {
    console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {

        e.preventDefault()

    //target represents the the target event we are listening i.e 'form'  
    //Alternative way to get the input, less likely to crash when the HTML is being altered
     const message = e.target.elements.message.value
     
     socket.emit('sendMessage', message)
})


document.querySelector('send me-location').addEventListener('click', () => {
    if (navigator.geolocation) {
        return alert('Geolocation is not supported by your Browser')
    }


    navigator.geolocation.getCurrentPosition((position) => {

            console.log(position)
    })
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const socket = io()


socket.on('message', (message) => {
    console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()

    const message = e.target.elements.message.value
     
    socket.emit('sendMessage', message)
})


document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your Browser')
    }
 

    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
    })
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const socket = io()


socket.on('message', (message) => {
    console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()

    const message = e.target.elements.message.value
     
    socket.emit('sendMessage', message)
})


document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your Browser')
    }
 

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    })
}) 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const socket = io()


socket.on('message', (message) => {
    console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()

    const message = e.target.elements.message.value
     
    socket.emit('sendMessage', message, (message) => {
        console.log('the message was delivered', message)
    })
})


document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your Browser')
    }
 

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    })
}) 



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const socket = io()


socket.on('message', (message) => {
    console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()

    const message = e.target.elements.message.value
     
    socket.emit('sendMessage', message, (error) => {
        if(error){
            return console.log(error)
        }

        console.log('Message delivered')
    })
})


document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your Browser')
    }
 

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    })
}) 

// ***Acknowledgment Setup**

// 1. Client acknowledgement function
// 2. server to send back acknowledgement 
// 3. Client print "location being shared" as acknowledgement
// 4. Test work

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const socket = io()


socket.on('message', (message) => {
    console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()

    const message = e.target.elements.message.value
     
    socket.emit('sendMessage', message, (error) => {
        if(error){
            return console.log(error)
        }

        console.log('Message delivered')
    })
})


document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your Browser')
    }
 

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
     
        }, () => {
            console.log('Location shared!')
        })
    })
}) 


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const socket = io()

//Elements 
const $messageForm = document.querySelector('#message-form')
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')

socket.on('message', (message) => {
    console.log(message)
})

$messageForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const message = e.target.elements.message.value
     //disable
    socket.emit('sendMessage', message, (error) => {
        //enable
        if(error){
            return console.log(error)
        }

        console.log('Message delivered')
    })
})


document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your Browser')
    }
 

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
     
        }, () => {
            console.log('Location shared!')
        })
    })
}) 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

