const express = require("express")
const {createServer} = require("http")
const {Server} = require("socket.io")
const userRoute = require("./routes/users")


const app = express();
const server = createServer(app);
const io = new Server(server, {cors: {origin: '*', methods: ["GET", "POST"]}});


const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded())
app.use('/api/users', userRoute);

app.use((req, res, next)=>{
    next();
});





server.listen(PORT, ()=>{

})


