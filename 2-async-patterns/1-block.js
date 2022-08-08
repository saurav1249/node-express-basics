const http = require("http")

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.end("Welcome To Home Page")
    }
    if(req.url === "/about") {
        // BLOCKING CODE!!!
        for(let i=0; i<=1000; i++) {
            for (let j = 0; j <= 1000; j++) {
                console.log(`${i} and ${j}`)
            }
        }
        res.end("About Us Page")
    }
    // res.end("Error Page")
})

server.listen(5000, () => {
    console.log("Listening to port 5000...")
})
