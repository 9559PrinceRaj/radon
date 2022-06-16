const mongoose = requi9re('mongoose');
const authorSchema=new mongoose.schema({
const_id:{
    type:String,
    unique: true,
    requred: true
},
author_name:String,
age: number,
address:string
}, { timestamps: true })

module.exports = mongoose.model('Author', authorSchema)