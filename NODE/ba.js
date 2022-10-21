 const express = require("express");
 console.log('kk')
const app =express()
const path =require('path');


const port =3500
const studentd=require('./json.js')



const {student} = studentd

function logger(req,res,next) {
    console.log('hey')
    next()
}

app.use(logger)

app.get('/',(req,res)=>{
    res.json(student)
})

app.get('/student',(req,res)=>{
    const classes=student.map((stud)=>{
        const { studentid,age}= stud;
        return {studentid,age}
    })
    res.json(classes)
})


app.get('/student/:age/:id',(req,res)=>{
    console.log(req.params)
    console.log(req.query)
    const {age,id}=req.params

     let b = student.find((pup)=>pup.age ==age)
   let x=[b]
     const classe=x.find((cl)=>cl.studentid ===Number(id))
   
    
    res.json(classe)
})















app.listen(port,()=>{console.log('kill')})

// app.use((req,res,next)=>{
//     console.log(`${req.method} ${req.path} ${req.url} ${req.headers.origin}`)
//     next()
// })






// app.use(express.static(path.join(__dirname,'/public')))
// app.get('/',(req,res)=>{
//     res.sendfile('./WONDY.html',{root:__dirname})
// })


// app.get('/GRAVE(.html)?',(req,res)=>{
//     res.sendfile('./WONDY.html',{root:__dirname})
// })


// app.get('/WONDY(.html)?',(req,res)=>{
//         res.sendfile('./GRAVE.html',{root:__dirname})
// })




// app.get('/*',(req,res)=>{
//     res.status(404).sendfile('./GRAVE.html',{root:__dirname})
// })



 