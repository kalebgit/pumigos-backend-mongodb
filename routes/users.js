const mongoose = require("mongoose")
const {Router} = require("express");
const User = require("../models/User");


const userRouter = Router();

mongoose.connect("mongodb://localhost/")
.then(()=>{
    console.log("connected to the database")
})
.catch((err)=>{
    console.log("there was an error: " + err);
})

userRouter.get('/', (req, res, next)=>{

})

userRouter.post('/', async (req, res, next)=>{
    const {email, password} = req.body;
    if(email && password){
        const user = new User({email: email, password: password})
        try{
            await user.save()
            console.log("the user has been successfully created")
        }catch(err){
            console.log("there was an error: " + err)
        }
        
            
    }
})

userRouter.put('/', (req, res, next)=>{

})

userRouter.delete('/', (req, res, next)=>{

})

module.exports = userRouter;