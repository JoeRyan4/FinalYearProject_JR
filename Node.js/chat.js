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
const socket = io()

//Elements 
const $messageForm = document.querySelector('#message-form')
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $sendLocationButton = document.querySelector('#send-location')

socket.on('message', (message) => {
    console.log(message)
})

$messageForm.addEventListener('submit', (e) => {
    e.preventDefault()

    $messageFormButton.setAttribute('disabled', 'disabled')

    const message = e.target.elements.message.value
     //disable
    socket.emit('sendMessage', message, (error) => {
        $messageFormButton.removeAttribute('disabled')
        $messageFormInput.value = ''
        $messageFormInput.focus()

        //enable
        if(error){
            return console.log(error)
        }

        console.log('Message delivered')
    })
})


$sendLocationButton.addEventListener('click', () => {
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
const $sendLocationButton = document.querySelector('#send-location')

socket.on('message', (message) => {
    console.log(message)
})

$messageForm.addEventListener('submit', (e) => {
    e.preventDefault()

    $messageFormButton.setAttribute('disabled', 'disabled')

    const message = e.target.elements.message.value
     //disable
    socket.emit('sendMessage', message, (error) => {
        $messageFormButton.removeAttribute('disabled')
        $messageFormInput.value = ''
        $messageFormInput.focus()

        //enable
        if(error){
            return console.log(error)
        }

        console.log('Message delivered')
    })
})


$sendLocationButton.addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your Browser')
    }

    $sendLocationButton.setAttribute('disabled', 'disabled')    

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
     
        }, () => {
            $sendLocationButton.removeAttribute('disabled')
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
const $sendLocationButton = document.querySelector('#send-location')
const $messages = document.querySelector('#messages')

// Template Render dynamic template
const messageTemplate = document.querySelector('#message-template').innerHTML

socket.on('message', (message) => {
    console.log(message)
    const html = Mustache.render(messageTemplate, {
        message
    })
    $messages.insertAdjacentHTML('beforeend', html)
})

$messageForm.addEventListener('submit', (e) => {
    e.preventDefault()

    $messageFormButton.setAttribute('disabled', 'disabled')

    const message = e.target.elements.message.value
     //disable
    socket.emit('sendMessage', message, (error) => {
        $messageFormButton.removeAttribute('disabled')
        $messageFormInput.value = ''
        $messageFormInput.focus()

        //enable
        if(error){
            return console.log(error)
        }

        console.log('Message delivered')
    })
})


$sendLocationButton.addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your Browser')
    }

    $sendLocationButton.setAttribute('disabled', 'disabled')    

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
     
        }, () => {
            $sendLocationButton.removeAttribute('disabled')
            console.log('Location shared!')
        })
    })
}) 



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1.create a seperate event for location sharing $messages
// 2.have the server 'emit' the location message with th URL
// 3.have the client listen for locationMesage and print the URL to the console
// 4.Test


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const socket = io()

// Elements
// const $messageForm = document.querySelector('#message-form')
// const $messageFormInput = $messageForm.querySelector('input')
// const $messageFormButton = $messageForm.querySelector('button')
// const $sendLocationButton = document.querySelector('#send-location')
// const $messages = document.querySelector('#messages')

// Templates
const messageTemplate = document.querySelector('#message-template').innerHTML
const locationMessageTemplate = document.querySelector('#location-message-template').innerHTML

socket.on('message', (message) => {
    console.log(message)
    const html = Mustache.render(messageTemplate, {
        message: message.text
    })
    $messages.insertAdjacentHTML('beforeend', html)
})

socket.on('locationMessage', (url) => {
    console.log(url)
    const html = Mustache.render(locationMessageTemplate, {
        url
    })
    $messages.insertAdjacentHTML('beforeend', html)
})

$messageForm.addEventListener('submit', (e) => {
    e.preventDefault()

    $messageFormButton.setAttribute('disabled', 'disabled')

    const message = e.target.elements.message.value

    socket.emit('sendMessage', message, (error) => {
        $messageFormButton.removeAttribute('disabled')
        $messageFormInput.value = ''
        $messageFormInput.focus()

        if (error) {
            return console.log(error)
        }

        console.log('Message delivered!')
    })
})

$sendLocationButton.addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser.')
    }

    $sendLocationButton.setAttribute('disabled', 'disabled')

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, () => {
            $sendLocationButton.removeAttribute('disabled')
            console.log('Location shared!')  
        })
    })
})
