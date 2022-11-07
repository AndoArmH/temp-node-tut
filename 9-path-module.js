const path = require('path');

//returns platform specific separator
console.log(path.sep)

//joins a sequence of path segments
//using the platform specific separator as the limiter
//and returns a normalized resulting path

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

//resolve returns absolute path
const absolute = path.resolve(__dirname, 'content','subfolder','test.txt')
console.log(absolute)

//application will run in different environments so the path to some
//resource will be different on my computer then somewhere else