import express from 'express';

const app=express();
const PORT =3000;

app.listen(PORT,()=>{
    console.log(`Server is running on prot ${PORT}`);

})


  app.get('/home',(req,res)=>{
    res.status(200).type('text/html').end('<h1>Welcome To The Home Page</h> ',style=color:green)
  })
  app.get('/about',(req,res)=>{
    res.status(200).type('text/plain').end('This is the About Page' )
  })

  app.get('/students/:studentId',(req,res)=>{
    const department= req.queries.department;
    const studentId=req.params.studentId;
res.status(200).type('application/json').json({studentId
    ,department
})})