var express=require('express');
var app=express();

app.get('/',function(req,res){
    res.send('family tracker');
});
app.listen(1000);