// first step WE NEED TO CREATE A SERVER 
const http =  require('http')
// server will need a function and 2 parameters request and response , the request parameter allows us to make request and the response allows us to set data and build a response.
// and sometimes you will see them as  (req , res)
const server = http.createServer((request, response ) =>{
// use 'req' to get information about the http request 
// use "res" to send informantion back to the caller to the browser 


  // send back a "success" status code 
  response.statusCode = 200
  // tell the browser we're sending back HTML
  response.setHeqader("Content-Type", "text/html")
  response.write("<h1>Hello, World</h1>")

  // send this build response out into the internet 
  response.end()
})

server.listen(80180, () => {
console.log()

})