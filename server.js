// this import is now pulling from node_module instead of the Node stdlib
const express = require("express")
const db = require("./database")
// create an express server instance 
const server = express()
// ----------------------------------------------------------------END POINTS START FROM HERE --------------------------------------------------------------------------------
server.get("/api/users" , (req, res) =>{
res.json({message: "Hello, Jonathan"})
})

server.get("/users", (req, res ) =>{
     // simulate a real call to a database to fetch data  THIS ENDPOINT RETURNS AN ARRAY OF USERS . 
   const  users = db.getUsers()

    res.json(users)
})
server.get("/users/:id", (req, res) => {
	const id = req.params.id
    const user = db.getUserById(id)
    
// make sure user exists before we try to send it back
if (user) {
    res.json(user)
} else {
    res.status(404).json({
        message: "User not found",
    })
}


// web server need to be continously listening  otherwise the front end wotn work 
server.listen(8080, () => {
console.log("server started")

})