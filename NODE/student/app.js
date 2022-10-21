const express = require('express'),
      app = express()
      
      const man=require('./models/man')
       const s = require('mongoose');
      const conn = require('./db/connect')
      require('dotenv').config()

//You must require the body-parser middleware to access request.body in express
bodyParser = require('body-parser');

//configuring bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use('/' ,require('./employer'))

//setting our port
app.set('port', process.env.PORT || 3000);
app.post('/js',async(request,response)=>{


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