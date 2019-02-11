var express=require('express');
var app=express();
var mysql=require('mysql');

app.get('/',function(req,res){


    

var connection=mysql.createConnection({ 
    host:'localhost',
    user:'root',
    password:'',
    database:'nodepro'
     });
    
     connection.connect();
    
    connection.query('select * from  login',function(err,rows,fields){
  //  console.log("Output="+rows[0].name);
    res.send('Hello world:'+rows[0].name);
    });
    
    connection.end();
    
console.log('Hello  World');

});


app.get('/login/:username/:password',function(req,res){
var username=req.params.username;
var password=req.params.password;
console.log(username+' '+password);
    res.send('username:'+username+'password:'+password);
    

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodepro'

})


connection.connect();

connection.query("select * from login where username='"+username+"' and password='"+password+"'",function(err,rows,fields){

if(row!=null){
    console.log('login Success !');
}else{
    console.log('login Fail !');
}

});




});



app.get('/loginform',function(req,res){


    var username=req.query.username;
    var password=req.query.password;
    console.log(username+' '+password);
      //  res.send('username:'+username+'password:'+password);
        
    
    
var connection=mysql.createConnection({ 
    host:'localhost',
    user:'root',
    password:'',
    database:'nodepro'
     });
    
     connection.connect();
    
    
    
connection.query("select * from login where username='"+username+"' and password='"+password+"'",function(err,rows,fields){
console.log(fields);


    if(rows.length>0){
       res.send('Login Success');
    }else{
        res.send('login Fail !');
    }
    
    });
    

});




app.listen(3000,function(){
    console.log('server is running on http://localhost:3000');
})