// CommonJS, every file is module(by default)
// Modules - Encapsulated code(only share minimum)

const names = require("./4-names")
const sayHi = require("./5-utils")
const alternative = require("./6-alternative-flavour")
require("./7-mind-grenade")

for (name of names) {
    sayHi(name);
}

sayHi(alternative.singlePerson.name)
