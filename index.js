const express=require("express")
const {dbConnect}=require('./db/dbConnect')
const {userRouter} = require("./routes/userRouter")



const app=express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))








//mongoose config
// const mongoose = require("mongoose")

//db connect
// mongoose.connect("mongodb://127.0.0.1:27017/demo1")

//connecting collection

//schemaDeclaration

// const collectionSchema = new mongoose.Schema({
//     name:{ type: String},
//     age:{ type: Number},
//     isActive : Boolean

// })

//model connection

// const collectionModel = mongoose.model("collection", collectionSchema)

//CRUD operations  using mongoose

//create
// async function postDocument(){
//     let student = {name: "Sonid", age: 23, isActive:true}
//     const data = new collectionModel(student)
//     let response = await data.save()
    // let res = await collectionModel.insertMany([{name:"Rahul",age:22}]) //and so on 
    // console.log(response)
// }

//read
// async function getDocuments() {
    
//     let data = await collectionModel.findOne({name:"Sonid"})
    // console.log(data);
    
// }

//update
// async function updateDocument(){
    // const response = await collectionModel.updateOne({name: "Sonid"},{$set:{age:22}});
    // console.log(response);
// }

//delete
// async function deleteDocument() {
    // const response = await collectionModel.deleteOne({name:"Sonid"});
    // console.log(response);
    
    
// }



//test api
app.get("/",(req,res)=>{
    // postDocument()
    // getDocuments()
    // updateDocument()
    // deleteDocument()
    res.send("hello sonid");
})

//routes

app.use("/user", userRouter)


app.listen(2000, "127.0.0.7",()=>{
    console.log("server is starting at http://127.0.0.7:2000");
    dbConnect();

})