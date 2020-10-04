// first step WE NEED TO CREATE A SERVER 
const http =  require("http")
// server will need a function and 2 parameters request and response , the request parameter allows us to make request and the response allows us to set data and build a response.
// and sometimes you will see them as  (req , res)
const server = http.createServer((req, res) =>{
// use 'req' to get information about the http request 
// use "res" to send informantion back to the caller to the browser 


  // send back a "success" status code 
  res.statusCode = 200
  // tell the browser we're sending back HTML
  res.setHeader("Content-Type", "text/html")

  res.write("<h1>Hello, World</h1>")

  // send this build response out into the internet 
  res.end()
})
// web server need to be continously listening  otherwise the front end wotn work 
server.listen(8080, () => {
console.log("server started")

})