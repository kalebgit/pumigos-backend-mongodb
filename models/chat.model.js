const mongoose = require("mongoose");
const User = require("./user.model")
const {get} = require("../util/httpFunctions")

// CHAT 

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
        type: [{
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
        }]
    }
})

chatSchema.statics.get = get;


chatSchema.virtual.data = function(){
    return `{senderId: ${this._id}, userName: ${User.findOne(this._id)}} <${this.sentAt}>: ${this.text}`
}

module.exports = mongoose.model("Chat", chatSchema);