const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Title is required"],
    },
    firstName:{
        type:String,
        required:[true, " first name is required"],
    },
    lastName:{
        type:String,
        required:[true, " last name is required"],
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
    },
    mobile:{
        type:String,
        required:[true,"Phone number is required"],
        unique:true,
    },
    programType:{
        type:String,
        required:[true,"The program type is required"],
    },
});

//Export the model
module.exports = mongoose.model('User', userSchema);