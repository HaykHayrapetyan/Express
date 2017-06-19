const express = require('express');
const PORT = 8080;
const path = require('path');
const app = express();
const router = require('./router');
const logger = require('morgan');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'pug');

app.use(cookieParser('keyboard cat'));

app.use(session({
    secret: 'asaaaaaaaaaaaaaaaasssssssssssss',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false, httpOnly: false}
}));

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(logger('dev'));

const posts = [{
    id: 1,
    title: 'Ujex title'
}, {
    id: 2,
    title: 'arish ujex title'
}];

app.use('')

app.use('/setter', (req, res)=>{
    req.session.token = 'lYplF1z7TAQ';
    req.session.username = "@Hayk"
    req.session.gender = "miban"
    res.redirect('/');
})

app.use('/posts', (req, res)=>{
    const {sort} = req.query;
    console.log(req.query);
    if(!sort){
        res.json(posts);
    } else{
        
        const sorted = posts.sort((a, b) => {
            return b.title > a.title;
        });
        res.json(sorted);    
        
    }
    
})



app.use('/', router);



app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT}`);
})