const mongoose = require("mongoose");
const {get} = require("../util/httpFunctions")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 18,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: (email)=>email.includes('@'),
            message: "The email doesn't include @"
        },
        createdAt: {
            type: Date,
            immutable: false,
            default: ()=>Date.now()
        },
        updatedAt: {
            type: Date,
            default: ()=>Date.now()
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 10,
        // validate: {
        //     validator: (password)=>{},
        //     message: ""
        // }
    }
})

userSchema.statics.get = get

const userModel = mongoose.model("User", userSchema);

module.exports = userModel