const {Router} = require("express")
const Chat = require("../models/chat.model")
const chatRouter = Router()

chatRouter.get("/:id", async (req, res, next)=>{
    const {id} = req.params;
    try{
        res.sendStatus(200).send(Chat.get(id));
    }catch(err){
        res.sendStatus(err.code).send(err.message);
    }
})

chatRouter.post("/", async(req, res, next)=>{
    
})

module.exports = chatRouter;