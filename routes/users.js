
const {Router} = require("express");
const User = require("../models/user.model");


const userRouter = Router();





userRouter.get('/:id', async(req, res, next)=>{
    const {id} = req.params;
    try{
        res.sendStatus(200).send(await User.get(id));
    }catch(err){
        res.sendStatus(err.code).send(err.message);
    }
})

userRouter.post('/', async (req, res, next)=>{
    try{
        await User.create({...req.body});
        res.statusCode(201)
    }catch(err){
        res.statusCode(500).send(err);
    }
})

userRouter.put('/:id', async (req, res, next)=>{
    try{
        let user = await User.findById(req.params.id);
        user = req.body;
        user.save({validateBeforeSave: true});
        res.statusCode(200)
    }catch(err){
        res.statusCode(500);
    }
})

userRouter.delete('/:id', async (req, res, next)=>{
    try{
        await User.deleteOne({_id: req.params.id})
        res.statusCode(200)
    }catch(err){
        res.statusCode(500)
    }
})

module.exports = userRouter;