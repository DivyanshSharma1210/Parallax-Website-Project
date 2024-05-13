const express=require('express')
const mongoose=require('mongoose')
const path=require('path')
const { stringify } = require('querystring')
const port=3500

const app=express()
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/students')
const db=mongoose.connection

db.once('open',()=>{
    console.log("Mongodb Connection Successful");
})

const userSchema=new mongoose.schema(
    {
        name:"string",
        // mobile:Number,
        // email:string,
        // age:Number,
        // Username:string,
        // Password:string,
        // confirm_Password:string,



    }
)

const users=mongoose.model("Userdetails",userSchema)


app.use(express.static(__dirname))
app.get('/',(req,res)=>
{
    res.sendFile(path.join(__dirname,'mainlogin.html'))
})

app.post('/post',async(req,res)=>{
    const {name}=req.body
   const user=new users({
        name,
        // mobile,
        // email,
        // age,
        // Username,
        // Password,
        // confirm_Password

   })
   await user.save()
    console.log(user)
    res.send("Form Submission Successful")
})
app.listen(port,()=>{
    console.log("Server Started");
})