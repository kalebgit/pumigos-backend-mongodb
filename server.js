const express = require("express")
const mongoose = require("mongoose")
const {createServer} = require("http")
const {Server} = require("socket.io")
const userRoute = require("./routes/users")
const chatRoute = require("./routes/chat")


const app = express();
const server = createServer(app);
const io = new Server(server, {cors: {origin: '*', methods: ["GET", "POST"]}});


const PORT = 8080;

app.use(express.json())

app.use('/api/users', userRoute);
app.use('/api/chat', chatRoute)

app.use((req, res, next)=>{
    next();
});







server.listen(PORT, ()=>{
    mongoose.connect("mongodb+srv://emilianokaleb:Mongokaleb2005@proyectocoder.bmy8cw1.mongodb.net/test?retryWrites=true&w=majority")
        .then(()=>{
            console.log("connected to the database")
        })
        .catch((err)=>{
            console.log("there was an error: " + err);
        })

})


