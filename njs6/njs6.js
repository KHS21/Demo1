const express = require("express")
const bodyParser = require("body-parser");  //middleware

const app = express()
app.use(bodyParser.json())

//creating our own middleware

// function middle1(){
//     console.log("middle1")
// }

// app.use(middle1)

//accepts three arguments
// function middle1(req,res,next){
//     console.log("middle1")
//     let name = req.body.name    //from post man
//     console.log(name)

//     if(name == "kiran"){
//         res.json("wrong user")
//     }
//     next()
// }

// app.use(middle1)

function middle1(req,res,next){
    console.log("middle1")
    next()
}

function middle2(req,res,next){
    console.log("middle2")
    next()
}

//first api
// app.get("/dashboard",(req,res)=>{

//     //to send in json format
//     res.json({ message: "hello world" });
// })

app.post("/dashboard",middle1,middle2,(req,res)=>{

    //to send in json format
    res.json({ message: "hello world" });
})

app.get("/canteen",(req,res)=>{
    res.json({ message: "hello earth" })
})

app.listen(3000,()=>{
    console.log("running")
})
