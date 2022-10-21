const mongoose = require('mongoose')





const studentchema= new mongoose.Schema({
    name:String,
    completed:Boolean                                                            
})
module.exports=mongoose.model('student',studentchema)