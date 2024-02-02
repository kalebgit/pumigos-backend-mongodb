const {Router} = require("express")


const productsRouter = Router();


//you can limit the products returned
productsRouter.get("/", (req, res, next)=>{

});

productsRouter.get("/:id", (req, res, next)=>{

});

productsRouter.post("/", (req, res, next)=>{

})

productsRouter.put("/:id", (req, res, next)=>{

})

productsRouter.delete("/:id", (req, res, next)=>{

})

module.exports = productsRouter;
