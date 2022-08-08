const os = require("os")

// current user info
const user = os.userInfo()
// console.log(user)

// system uptime
const system = os.uptime()
// console.log(system/3600)

// OS info
const currentOS = {
    type: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOS)
