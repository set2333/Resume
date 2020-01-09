const express = require('express');
const Message = require('./mongooseInit.js').Message;
const sendEmail = require('./sendEmail.js');

const Router = express.Router();
const jsonParser = express.json();

Router.get('/about', (req, res)=>{
    res.cookie('curentPage', 'link');
    res.sendFile(__dirname + '/index.html');
});

Router.get('/live', (req, res)=>{
    res.cookie('curentPage', 'live');
    res.sendFile(__dirname + '/index.html');
});

Router.get('/work', (req, res)=>{
    res.cookie('curentPage', 'work');
    res.sendFile(__dirname + '/index.html');
});

Router.get('/main', (req, res)=>{
    res.cookie('curentPage', 'main');
    res.sendFile(__dirname + '/index.html');
});

Router.get('/', (req, res)=>{
    res.cookie('curentPage', 'main');
    res.sendFile(__dirname + '/index.html');
});

Router.get('*', (req, res)=>{
    res.cookie('curentPage', 'notfound');
    res.sendFile(__dirname + '/index.html');
});

Router.post('/sendMessage', jsonParser, (req, res)=>{
    if(!req.body) return res.sendStatus(400);
    let mailMessage = {date:new Date(), autor:req.body.autor, adress:req.body.adress, message:req.body.message, readed:false}
    let messageNew = new Message(mailMessage);
    messageNew.save((err)=>{
        if(err) {
            res.sendStatus(400);
            return console.log(err);
        }
        sendEmail(mailMessage);
        res.sendStatus(200);
    })
});

module.exports = Router;