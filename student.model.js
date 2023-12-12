import mongoose from "mongoose";
const student_schema=new mongoose.Schema({
   studentid:{type:String},
    fullname:{type:String},
    username:{type:String},
    password:{type:String},
    course:{type:String},
    batch:{type:String},
    semester:{type:String},
    dob:{type:String},
    bloodgroup:{type:String},
    intphy:{type:String},
    intche:{type:String},
    intmath:{type:String},
    physics:{type:String},
    chemistry:{type:String},
    maths:{type:String},
    attendance:{type:String},
    photo:{type:String}

})


export default mongoose.model.students||mongoose.model("students",student_schema)