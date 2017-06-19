const express = require('express');
const todos = ['Run', 'Eat', 'urish'];
const router = express.Router();

router.post('/add', (req, res)=>{
    todos.push(req.body.todo);
    res.redirect('/');
});

router.get('/', (req, res)=>{
    const {token, username, gender} = req.session;
    res.render('index', { todos, token, username, gender });
});

module.exports = router; 