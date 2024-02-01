const express = require("express")
const {createServer} = require("http")
const {Server} = require("socket.io")
const mongoose = require("mongoose");

const user = require("./models")

const PORT = 8080


mongoose.connect("mongodb://locahlhost/testdb")
.then(()=>{
    console.log("database connected")
})
.catch((error)=>{
    console.log("there was en error")
})

const app = express();
const server = createServer(app);
const io = new Server(server, {cors: {origin: '*', methods: ["GET", "POST"]}});



app.listen(PORT, ()=>{

})


