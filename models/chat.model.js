const mongoose = require("mongoose");
const User = require("./user.model")

//MESSAGE

const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Types.ObjectId,
        required: true,
        immutable: true
    },
    sentAt: {
        type: Date,
        required: true,
        default: ()=>Date.now(),
        immutable: true,
    },
    text: {
        type: String,
        required: true,
        minLength: 1,
    },
    updatedAt: {
        type: Date,
        default: ()=>Date.now()
    }
})

messageSchema.pre('save', function(next){
    this.upodatedAt = Date.now()
    next()
})

const messageModel = mongoose.model("Message", messageSchema);


// CHAT 

function chatValidator({people, ...other}){
    
}

const chatSchema = new mongoose.Schema({
    people: {
        type: [mongoose.Types.ObjectId],
        required: true,
        immutable: true,
        validate: {
            validator: ({people, ...other})=>{
                if(people && people.length > 2){
                    return true
                }else return false
            },
            message: "There must be more than 1 user in chat"
        }
    },
    messages: {
        type: [messageSchema]
    }
})

chatSchema.statics.get = async function({id}){
    if(id){
        if(chat = this.findById(id)){
            return chat;
        }else return {code: 404, message: "chat not found"};
    }else return {code: 406, message: "chat id null value, not accepted"}
}

chatSchema.methods.addMessage = async function({userId, text}){
    if(userId && text){
        try{
            const message = await messageModel.create({sender: userId, text: text});
        }catch(err){
            
        }
        

    }else return 406;
}

chatSchema.virtual.data = function(){
    return `{senderId: ${this._id}, userName: ${User.findOne(this._id)}} <${this.sentAt}>: ${this.text}`
}

module.exports = mongoose.model("Chat", chatSchema);