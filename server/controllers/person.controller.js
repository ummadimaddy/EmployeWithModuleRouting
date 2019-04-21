const {
    Person
}=require('../models/person.models');
const postdata=async(req,res)=>{
    user=new Person(req.body);
    try{
        const data=await user.save();
        if(!data){
            res.json({
                message:"Data was not saved",
                data:'',
                status:400
            });
            return
        }
        res.json({
            message:'Data was successfully Registered',
            data:'',
            status:200
        });
    }catch(error){
        res.json({
            message:'OOPS! Something went wrong',
            data:'',
            status:500
        });
    }
};

const sign=async(req,res)=>{
    try{
        const user=await Person.findOne({
            $and:[{email:req.body.email},{password:req.body.password}]
        })
        if(!user){
            res.json({
                message:"email or password do not match",
                data:'',
                status:400
            });
            return;
        }
        res.json({
            message:'person was succesfully logged in',
            data:user,
            status:200,
        });
    } catch (error){
        res.json({
            message:'OOPS! Something went wrong',
            data:[],
            status:500
        })
    }
}

module.exports={
    postdata,
    sign
}