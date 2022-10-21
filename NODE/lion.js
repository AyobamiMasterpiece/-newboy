





//server.js file

const express = require('express'),
      app = express();

//setting the port 
app.set('port', process.env.PORT || 3000);

//
app.get('/',(request,response)=>{
  response.sendFile(__dirname +'/form.html');
});

app.get('/process',(request,response)=>{
  console.log(request.query);
  response.send(`${request.query.name} said ${request.query.message}`);
});

app.listen(3000,()=>{
  console.log('Express server started at port 3000');
});




// const express = require('express'),
//       app = express();
// //route serves both the form page and processes form data
// app.get('/', (request, response)=>{
//   console.log(request.query);
//   console.log(request.body)
//   console.log(request.url,request.ip)
// //   response.send(message)
// // response.cookie(name,value,duration)
// // response.redirect([redirect status], url)
// //   console.log(request.headers)
// console.log(request.accepts(['json','html']))
//   response.sendFile(__dirname +'/form.html');
// });
// app.listen(3000,()=>console.log('Express server started at port 3000'));