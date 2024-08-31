const express = require("express")
const { postUser } = require("../controllers/userController")

const userRouter = express.Router()

// userRouter.use(express.json());



//test Api
userRouter.get("/",(req,res)=>{        //hosturl/user/
    res.send("User router working ")
})

//postApi(create,user)
userRouter.post("/post",postUser)  //hostpath/user/post

module.exports = {userRouter}