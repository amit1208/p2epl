const mongoose=require('mongoose')

const TaskSchema= mongoose.Schema({
    Testimonial_ID:{
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
      } ,
    photo:{
        type:String,
        required:false

    },
    Name:{
        type:String,
        unique:true,
        required:false

    },
    Post:
  { type:String,
    required:false

    },
    Testimonial_Description:{
        type:String,
        required:false

    },
    Created_On:{
      type:Date,
      default:Date.now

    },
    Last_Updated_On:{
        type: Date
    ,default:Date.now

    },
    Active:{
        type:Boolean
    }
},
// {collection:'taskcol'}
)

const TaskModel=mongoose.model('Bodel',TaskSchema)
module.exports =TaskModel