// import the modules 
const express = require("express")
const db = require("./database")


const server =  express()              // we are declaring express with this line 
server.use(express.json())             // middleware that helps express parse incoming request bodies into json object 

// start creating this endpoints after this line ======================

































// this is where the browser will listen to the API 
server.listen(4000, () =>{
    console.log("server started at http://localhost:4000")
})