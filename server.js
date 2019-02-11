var http=require('http');

http.createServer(function(req,res){
res.write('Hello World');
res.end();
}).listen(3000,function(){
    console.log('server running on http://localhost:3000');
});