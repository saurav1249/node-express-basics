const http = require("http")

const server = http.createServer((req, res) => {
    console.log("Request Event");
    res.end("Event End")
})

server.listen(5000, () => {
    console.log("Listening to port 5000")
})
