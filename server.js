// import the modules 
const express = require("express")
const db = require("./database")


const server =  express()              // we are declaring express with this line 
server.use(express.json())             // middleware that helps express parse incoming request bodies into json object 

// start creating this endpoints after this line ======================
//============================================================== GET API POINTS ======================================================================
server.get("/api/users", (req, res) =>{
    const users = db.getUsers()
    res.json(users)
    if (users){
        res.json(users)
    }else{
        res.status(500).json({
            errorMessage: "The users information could not be retrieved." 
        })
    }
})



server.get("/api/users:id", (req, res) => {
  const id = req.params.id 
  const user = db.getUserById(id)  

  if(user){
      res.json(user)
  }else {
      res.status(404).json({
          message:"user with that ID is not found"
      })
  }
})


//============================================================== POST API POINTS ======================================================================

server.get("/api/users", (req, res) =>{
    if(!req.body.name){
        return res.status(400).json({
            message:"Please provide name and bio for user"
        })
    }
})






















// this is where the browser will listen to the API 
server.listen(4000, () =>{
    console.log("server started at http://localhost:4000")
})