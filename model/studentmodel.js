const mongoose =require('mongoose')
const schema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Contact_No:{
        type:Number,
        minlength:[10],
        maxlength:[10],
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    class:{
        type:String,
        required:true
    },
    subjects:{
        type:[String],
       validate(value){
           if(value<=0){
              throw new Error('Please add at least one subject')
           }
       }
    },
    society:[String]
      
    

    

})


module.exports =new mongoose.model('Student',schema);