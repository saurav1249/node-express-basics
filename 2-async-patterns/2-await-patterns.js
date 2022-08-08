const {readFile, writeFile} = require("fs").promises

// const util = require("util")
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFile("../content/first.txt", "utf-8")
        const second = await readFile("../content/second.txt", "utf-8")

        await writeFile("../content/write-file-promise.txt",
            `THIS IS AWESOME: ${first}, ${second}`)

        console.log(first)
        console.log(second)
    } catch (e) {
        console.log("ERROR!!!");
        console.log(e)
    }
}

start()

// const getText = (path, encoding) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, encoding, (err, data) => {
//             if(err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText("./content/first.txt", "utf-8")
//     .then(result => console.log(result))
//     .catch(err => console.log(err))
