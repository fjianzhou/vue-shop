const express =require('express');

const app=express();
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials","true");
  res.header("X-Powered-By",' 3.2.1')
  if(req.method==="OPTIONS") res.send(200);/*让options请求快速返回*/
  else  next();
});
app.listen(4000)


let data=[
  {product:'小米',pic:'pro_1.jpg',price:1000},
  {product:'小米1',pic:'pro_1.jpg',price:1000},
  {product:'小米2',pic:'pro_1.jpg',price:1000},
]


app.get('/get',(req,res)=>{
  console.log('req');
    res.json(data)
})
