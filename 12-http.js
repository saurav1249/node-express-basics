const http = require("http")
const server = http.createServer((req, res) => {

    if(req.url === "/") {
        res.end('Welcome to our Home Page')
    }
    if(req.url === "/about") {
        res.end('About Page')
    }

    res.end(`
    <h1>Oops!</h1>
    <p>404 Page Not Found!</p>
    <a href="/">Go To Home</a>
    `)
    // res.write()
    // res.end()
})

server.listen(5000)
