const mongoose = require('mongoose')





const manchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    completed:Boolean                                                            
})
module.exports=mongoose.model('man',manchema)