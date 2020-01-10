const express = require('express');
const User = require('./mongooseInit.js').User;

const RouterAdmin = express.Router();
const jsonParser = express.json();

RouterAdmin.post('/login', jsonParser, (req, res)=>{
    if(!req.body) return res.sendStatus(400);
    User.findOne({login:req.body.login, pass:req.body.pass}, (err, doc)=>{
        if (err || doc===null) return res.sendStatus(400);
        return res.sendStatus(200);
    });
});

module.exports = RouterAdmin;