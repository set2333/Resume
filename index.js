const express = require('express');
const jsonParser = express.json();
const mongoose = require('mongoose');
const app = express();
const Message = require('./mongooseInit.js');

app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost:27017/resumedb', {useNewUrlParser:true, useUnifiedTopology:true}, (err)=>{
    if(err) return console.log(err);
    app.listen(3000, ()=>{
        console.log('Server started');
    });
});

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.post('/sendMessage', jsonParser, (req, res)=>{
    if(!req.body) return res.sendStatus(400);
    let messageNew = new Message({date:new Date(), autor:req.body.autor, adress:req.body.adress, message:req.body.message, readed:false});
    messageNew.save((err)=>{
        if(err) {
            res.sendStatus(400);
            return console.log(err);
        }
        res.sendStatus(200);
    })
});