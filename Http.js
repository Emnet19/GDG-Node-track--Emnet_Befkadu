const http=require('http');
const server=http.createServer((req,res));
server.listen(3000,()=>{
    console.log('Server is running on port 3000');
})

if(req.get==='/'){
       res.end("Welcome to Home Page");
}else if(req.get==='/info'){
    res.end("This is the information Page");
}else {
    res.end("Page not found");
}