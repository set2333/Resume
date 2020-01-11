const express = require('express');
const User = require('./mongooseInit.js').User;
const crypto = require('crypto');

const RouterAdmin = express.Router();
const jsonParser = express.json();

//Функция возвращает хэш
function getHash(value) {
    let hash = crypto.createHash('sha256');
    hash.update(value);
    return hash.digest('hex');
}

RouterAdmin.post('/login', jsonParser, (req, res)=>{
    if(!req.body) return res.sendStatus(400);
    User.findOne({login:req.body.login, pass:getHash(req.body.pass)}, (err, doc)=>{
        if (err || doc===null) return res.sendStatus(400);
        req.session.key = doc._id;
        return res.sendStatus(200);
    });
});

RouterAdmin.get('/main', (req, res)=>{
    if(req.session.key) {
        res.sendFile(__dirname + '/admin.html');
    }
    else {
        res.redirect('/main');
    }
});

module.exports = RouterAdmin;