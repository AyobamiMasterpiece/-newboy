



const express = require('express'),
app = express();

//setting the port
app.set('port', process.env.PORT || 3000);

//first middleware
app.use((request,respone,next)=>{
console.log(`processing for data for ${request.url}`);
next();
});

//second middleware
app.use((request,response,next)=>{
console.log(`The response.send will terminate the request`);

});

//third middleware
app.use((request,respone,next)=>{
console.log(`I’ll never get called`);
});

app.listen(3000,()=>console.log('Express server started at port 3000'));










// const express = require('express'),
//       app = express();

// //requiring the basic_router.js
// app.use('/users',require('./react-router/basic_router'));
// const x=require('./react-router/basic_router')

// //routes
// app.get('/posts/newpost',(request,response)=>{
//   response.send('new post');
// });

// app.get('/api',(request,response)=>{
//   response.send('API route');
// });

// app.listen(3000,()=>console.log('Express server started at port 3000'));