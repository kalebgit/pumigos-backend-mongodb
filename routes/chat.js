const {Router} = require("express")

const chatRouter = Router()

chatRouter.get("/:id", (req, res, next)=>{
    const {id} = req.params;
    
})

module.exports = chatRouter;