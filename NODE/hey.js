














const express = require('express'),
app = express();
function sayHello(request,response,next){
console.log('I must be called');
next();
}
app.get('/', sayHello, (request, response)=>{
response.send('sayHello');
console.log(request.body)
});
app.listen(3000,()=>console.log('Express server started at port 3000'));












// const fs=require('fs')
// const http = require('http')
// const path=require('path')
// const fspromises=require('path')
// const PORT =process.env.PORT 




// const server= http.createServer((req,res)=>{

// console.log(req.url,req.method)
// if (req.url ==='/'){
//     res.statusCode=200
//     res.setHeader('Content-Type','text/html')
//     const pathf=path.join(__dirname,'Wondy.html')
//     fs.readFile(pathf,'utf-8',(err,data)=>{res.end(data)})
// }

// if (req.url ==='/about'){
//     res.statusCode=200
//     res.setHeader('Content-Type','text/html')
//     const pathf=path.join(__dirname,'GRAVE.html')
//     fs.readFile(pathf,'utf-8',(err,data)=>{res.end(data)})
// }

// })
// server.listen(3500,()=>{console.log('dd')})