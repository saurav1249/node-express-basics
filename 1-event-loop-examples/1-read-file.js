const { readFile } = require("fs");

console.log("This is first task");

readFile("../content/first.txt", "utf-8", (err, result) => {
    if(err) {
        console.log("ERROR");
        console.log(err);
        return
    }
    console.log(result)
    console.log("first task completed")
});

console.log("Starting next task")
