//Модуль маршрутизации административного раздела
const express = require('express');
const User = require('./mongooseInit.js').User;
const Email = require('./mongooseInit.js').Email;
const Message = require('./mongooseInit.js').Message;
const crypto = require('crypto');

const RouterAdmin = express.Router();
const jsonParser = express.json();

//Функция возвращает хэш
function getHash(value) {
    let hash = crypto.createHash('sha256');
    hash.update(value);
    return hash.digest('hex');
}

//Проверяем, авторизован ли пользователь
function isAutorized(req, res, next) {
    if (req.session.key) {
        next();
    } else {
        res.sendStatus(400);
    }
}

//Авторизация пользователя
RouterAdmin.post('/login', jsonParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    User.findOne({
        login: req.body.login,
        pass: getHash(req.body.pass)
    }, (err, doc) => {
        if (err || doc === null) return res.sendStatus(400);
        req.session.key = doc._id;
        return res.sendStatus(200);
    });
});

//Получение JSON объекта с настройками пользователя и отправки сообщений на email
RouterAdmin.post('/getsettings', isAutorized, (req, res) => {
    let data = {};
    User.findOne({}, (err, dataUser) => {
        if (err) return res.sendStatus(400);
        data.login = dataUser.login;
        Email.findOne({}, (err, dataEmail) => {
            if (err) return res.sendStatus(400);
            data.email = dataEmail.mail;
            data.emaillogin = dataEmail.user;
            data.emailhost = dataEmail.host;
            data.emailport = dataEmail.port;
            data.emailsecure = dataEmail.secure;
            data.sendmail = dataEmail.sendmail;
            res.send(JSON.stringify(data));
        });
    });
});

//Установка настроек пользователя и отправки сообщений на email
RouterAdmin.post('/setsettings', jsonParser, isAutorized, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    User.collection.drop();
    let user = new User(req.body.admin);
    user.pass = getHash(user.pass);
    user.save((err) => {
        if (err) return res.sendStatus(400);
        Email.collection.drop();
        let email = new Email(req.body.email);
        email.save((err) => {
            if (err) return res.sendStatus(400);
            return res.sendStatus(200);
        });
    });
});

//Получение списка сообщений
RouterAdmin.post('/getmessages', jsonParser, isAutorized, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    let messagePageNumber = req.body.numberPage * 10;
    Message.find({}, (err, docs) => {
        if (err) return sendStatus(400);
        let messages = [];
        let endItem = (messagePageNumber*10+10>docs.length)?docs.length-messagePageNumber*10:10;
        for (let i = 0; i < endItem; i++) {
            messages.push({
                date: docs[messagePageNumber + i].date,
                autor: docs[messagePageNumber + i].autor,
                adress: docs[messagePageNumber + i].adress,
                id: docs[messagePageNumber + i]._id
            });
        }
        res.send(JSON.stringify(messages));
    });
});

//Получение одного сообщения
RouterAdmin.post('/getmessage', jsonParser, isAutorized, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    Message.findById(req.body._id, (err, doc) => {
        if (err) return sendStatus(400);
        let messages = {autor:doc.autor, message:doc.message, id:doc._id, date:doc.date, adress:doc.adress};
        res.send(JSON.stringify(messages));
    });
});

//Главная страница административного раздела
RouterAdmin.get('/main', isAutorized, (req, res) => {
    res.cookie('curentPage', 'main');
    res.sendFile(__dirname + '/admin.html');
});

//Главная страница административного раздела через /admin/
RouterAdmin.get('/', isAutorized, (req, res) => {
    res.cookie('curentPage', 'main');
    res.sendFile(__dirname + '/admin.html');
});

//Страница с настройками
RouterAdmin.get('/settings', isAutorized, (req, res) => {
    res.cookie('curentPage', 'settings');
    res.sendFile(__dirname + '/admin.html');
});

//Страница с сообщениями
RouterAdmin.get('/messages', isAutorized, (req, res) => {
    res.cookie('curentPage', 'allmessage');
    res.sendFile(__dirname + '/admin.html');
});

RouterAdmin.get('*', isAutorized, (req, res) => {
    res.cookie('curentPage', 'notfound');
    res.sendFile(__dirname + '/admin.html');
});

module.exports = RouterAdmin;
