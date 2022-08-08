const EventEmitter = require("events")

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, age) => {
    console.log(`Data Received`)
    console.log(`Name: ${name}`)
    console.log(`Age: ${age}`)
})

customEmitter.on('response', (name) => {
    console.log(`Some other Data Received`)
    console.log(`Name: ${name}`)
})
customEmitter.emit('response', "john", 34)
