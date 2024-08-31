const { userModel} = require("../model/userModel")


//post user
const postUser=  async(req,res)=>{
    // res.send("postuser working")
    // console.log(req.body);
    try{
        const {name,age, address, isActive} = req.body
        if( name && age && address && isActive != undefined){
            const data = new userModel({name,age,address,isActive})
            await data.save()
            return res.status(201).send({message:"User registration sucessfull"})

        }
        else {
            return res.status(400).send({error:"Provide all fields"})
        }
    } catch(error){
        return res.status(500).send({error:"Internal server error"})
    }

}

module.exports ={postUser}