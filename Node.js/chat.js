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





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







