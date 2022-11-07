const http = require('http');

const server = http.createServer((req,res)=>{
  // first parameter req handles requests from users
  //res is what were sending back
  if(req.url === '/'){
    res.end('Welcome to our home page')
  }
  else if(req.url === '/about'){
    res.end('Here is the about page')
  }else{
  //now set up a page that doesnt exist
  res.end(`
  <h1>OOPS!</h1>
  <p>We cant seem to find the page youre looking for</p>
  <a href="/">back home</a>
  `)

}})

server.listen(5000)//port that its listening to