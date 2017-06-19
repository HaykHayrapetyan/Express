const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');
const router = require('./router');

app.use(cookieParser());


app.use(express.static('static'));
app.set('views', './static')
app.set('view engine', 'pug');

app.use('/', (req, res, next) => {
    var time = new Date();
    if(!req.cookies.time){
        res.cookie('time', time.toString());
    }
    next();
});



app.use('/', (req, res, next)=>{
    res.render('index.pug', {"timer": req.cookies.time})
    next();
});


app.use('/', router);


app.listen(3000, ()=>{
    console.log("server working");
});