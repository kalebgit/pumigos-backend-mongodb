
const {Router} = require("express");
const User = require("../models/user.model");


const userRouter = Router();



userRouter.get('/', (req, res, next)=>{

})

userRouter.get('/:id', (req, res, next)=>{
    const {id} = req.params;
    if(id){
        const user = 
        
    }else{

    }
})

userRouter.post('/', async (req, res, next)=>{
    const user = req.body;
    if(user.name && user.age && user.email && user.password){
        const user = new User({ ...user})
        try{
            await user.save()
            console.log("the user has been successfully created")
            res.statusCode(201)
        }catch(err){
            console.log("there was an error: " + err)
            res.statusCode(500)
        }
    }
})

userRouter.put('/', (req, res, next)=>{

})

userRouter.delete('/', (req, res, next)=>{

})

module.exports = userRouter;