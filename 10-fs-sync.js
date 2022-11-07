const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
//reads contents of file
console.log(first,second)
//writes in the file, if file doesnt exist creates new one in the path
writeFileSync('./content/result-sync.txt', `Here is the result :  ${first} , ${second}`)
