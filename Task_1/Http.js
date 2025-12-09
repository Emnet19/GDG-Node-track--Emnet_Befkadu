const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/' && req.method==='GET'){
        res.end("Welcome to the Home page");
    }else if(req.url=='/info'&& req.method ==='GET'){
        res.end("This is the nfo Page");
    } else if(req.url==='/submit'&& req.method==='POST'){
        let body='';
        req.on('data',chunk=>{
            body+=chunk;
        })

        req.on('end',()=>{
            const data=JSON.parse(body); //to convert the text to object

            res.setHeader('Content-Type','application/jison');
            res.end(JSON.stringify(data));
        })
    }else{
        res.end('Page not found');
    }
})
server.listen(3000,()=>{
    console.log('Server is running on port 3000');
})