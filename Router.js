//Модуль маршрутизации основного раздела
const express = require('express');
const Message = require('./mongooseInit.js').Message;
const sendEmail = require('./sendEmail.js');
const Logger = require('./Logger.js');

const Router = express.Router();
const jsonParser = express.json();

Router.use(Logger);

//Страница с ссылками и формой отправки сообщения
Router.get('/about', (req, res)=>{
    res.cookie('curentPage', 'link');
    res.sendFile(__dirname + '/index.html');
});

//Страница с описанием биографии и увлечений
Router.get('/live', (req, res)=>{
    res.cookie('curentPage', 'live');
    res.sendFile(__dirname + '/index.html');
});

//Страница с навыками и профессиональной деятельностью
Router.get('/work', (req, res)=>{
    res.cookie('curentPage', 'work');
    res.sendFile(__dirname + '/index.html');
});


//Главная страница основного раздела
Router.get('/main', (req, res)=>{
    res.cookie('curentPage', 'main');
    res.sendFile(__dirname + '/index.html');
});

//Страница авторизации
Router.get('/login', (req, res)=>{
    res.sendFile(__dirname + '/login.html');
});

//Главная страница основного раздела (вход через корень сайта)
Router.get('/', (req, res)=>{
    res.cookie('curentPage', 'main');
    res.sendFile(__dirname + '/index.html');
});

//Прочие страницы т.е. not found
Router.get('*', (req, res)=>{
    res.cookie('curentPage', 'notfound');
    res.sendFile(__dirname + '/index.html');
});

//Сохранение сообщения и отправка его на email
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