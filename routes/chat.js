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

chatRouter.post("/:id", async(req, res, next)=>{
    const message = req.body;
    const {id} = req.params;
    if(id && message){
        const chat = await Chat.findById(id);
        chat.messages.push(message);
        chat.save();
        res.sendStatus(201)
    }else{
        res.sendStatus(500)
    }
})

chatRouter.put("/:id", async(req, res, next)=>{
    const {id, text} = req.body;
    
    const {chatId} = req.params;    
    if(id && chatId && text){
        const chat = await Chat.findById(chatId);
        chat = chat.messages.map((message)=>{
            if(message._id == id){
                message.text = text;
            }
            else{
                message
            }
            return message
        })
        chat.save()
        
    }
})
module.exports = chatRouter;