// this import is now pulling from node_module instead of the Node stdlib
const express = require("express")
const db = require("./database")

// create an express server instance 
const server = express()
// this allows us to parse request Json bodies, 
server.use(express.json())


// ----------------------------------------------------------------END POINTS START FROM HERE --------------------------------------------------------------------------------
server.get("/api" , (req, res) =>{
res.json({message: "Hello, Jonathan"})
})

server.get("/api/users", (req, res ) =>{
     // simulate a real call to a database to fetch data  THIS ENDPOINT RETURNS AN ARRAY OF USERS .
   const  users = db.getUsers()

    res.json(users)
})
server.get("/api/users/:id", (req, res) => {
	const id = req.params.id
	const user = db.getUserById(id)

	// make sure user exists before we try to send it back THIS ENDPOINT RETURNS USERS BY ID NUMBER 1 . 
	if (user) {
		res.json(user)
	} else {
		res.status(404).json({
			message: "User not found",
		})
    }
 // ----------------------------------- POST ENDPOINT ------------------------------------------------------------------------------------

 server.post("/api/users", (req, res) => {
	const newUser = db.createUser({
		name: req.body.name,
	})

	res.status(201).json(newUser)
})
})
// --------------------------------------------- DELETE ENDPOINT ----------------------------------------------------------------------------
server.delete("/api/users/:id" , (req, res) =>{


})
// --------------------------------------------- DELETE ENDPOINT ----------------------------------------------------------------------------
server.put("/api/users/:id" , (req, res) =>{


    
})

// ----------------------------------------------------END POINTS END FROM HERE ----------------------------------------------------------------------------------------------------

// web server need to be continously listening  otherwise the front end wotn work 
server.listen(8080, () => {
console.log("server started")

})