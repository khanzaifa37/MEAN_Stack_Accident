var     mongoose        =require("mongoose");

// Creating a user Schema
const AccidentSchema = new mongoose.Schema({
    category:{
        type:String,
        required:true
    } ,
    date:{
        type:String,
        required:true
    } ,
    time: {
        type:String,
        required:true
    } ,
    description:{
        type:String
    },
    image:{
        type:String
    },
    location:{
        type:String,
    },
    resp:{
        type:String
    },
    aids:{
        type:String
    }
});

// Creating a user Model
const Accident = module.exports= mongoose.model('Accident',AccidentSchema)