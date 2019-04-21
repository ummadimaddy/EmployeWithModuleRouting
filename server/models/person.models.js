const {mongoose}=require('../db/mongoose-config.js');
const PersonSchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phoneNumber:{
        type:Number
    },
    password:{
        type:String
    }
});
const Person=mongoose.model("person",PersonSchema);
module.exports={
    Person
};