const http = require("http")
const fs = require("fs")

http
    .createServer(function (req, res) {
        // big content size
        // const text = fs.readFileSync("./content/big.txt", "utf-8")
        const fileStream = fs.createReadStream("./content/big.txt", "utf-8")
        fileStream.on("open", () => {
            fileStream.pipe(res)
        })
        fileStream.on("error", (err) => {
            res.end(err)
        })
    })
    .listen(5000)
