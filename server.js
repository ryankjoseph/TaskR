const express = require("express");
const path = require('path');

const app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req,res){
    res.render("splash");
});
app.get('/login', function(req,res){
    res.render("login")
})
app.listen(3000, function(){
    console.log('listening on port 3000')
})