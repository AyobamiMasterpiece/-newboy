//server.js

const express = require('express'),
      app = express()
      const studentdata=require('./models/task')
      const man=require('./models/man')
       const s = require('mongoose');
      const conn = require('./db/connect')
      require('dotenv').config()
   const student = require('./json')
//You must require the body-parser middleware to access request.body in express
bodyParser = require('body-parser');

//configuring bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use('/' ,require('./employer'))

//setting our port
app.set('port', process.env.PORT || 3000);

//Get route for localhost:3000
app.post('/j',async(request,response)=>{


 try{ const every = await man(request.body)
   every.save()
  
    console.log( man(request.body ))
  response.json({every})

console.log(request.body)
}
  catch(r){console.log(r)
  response.json(r)
  }
});










app.get('/j/:id',async(request,response)=>{
  console.log(request.params.id)
  
const r = await  man.find({name:request.params.id})


console.log(r.length===0)
if(r.length===0)
{
  response.status(201).json('it was not found')
  return
}
  response.status(200).json(r)
 });













 app.get('/j',async(request,response)=>{
  console.log(request.params.id)
  
const r = await  man.find({})


console.log(r.length===0)
if(r.length===0)
{
  response.status(201).json('it was not found')
  return
}
  response.status(200).json(r)
 });
//POST route for form handling
// app.post('/',(request,response)=>{
  
//  response.status(200).send(request.body)
//  var reques=request.body

// });



console.log(student)

app.delete('/j/:id',async(request,response)=>{
  try{ const every = await  man.findOneAndDelete({name:request.params.id})
  
  
    console.log('llllllll')
    console.log(every)
    
    if (every){
 return response.json(every)

}
response.status(201).json('erroe')

}
  catch(r){console.log(r)
  response.json(r)
  }
  })












  app.put('/j/:id',async(request,response)=>{
   const {id}=request.params
  
   const data =request.body
  
    console.log(id,data) 
  const r = await man.findByIdAndUpdate({_id:id},data,{new:true})
  
  

  if (!r) return response.status(201).json('it was not found')
   
  
    response.status(200).json(r)
   });















const start= async ()=>{
  try{
    await conn(process.env.MONGO_URI)
    console.log('done')
    app.listen(3000,()=>{
      console.log('Express server started at port 3000');
    });
    
  }
  catch  (err) {
console.log(err)
  }
}
start()