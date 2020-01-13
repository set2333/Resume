const express = require('express');
const User = require('./mongooseInit.js').User;
const Email = require('./mongooseInit.js').Email;
const crypto = require('crypto');

const RouterAdmin = express.Router();
const jsonParser = express.json();

//Функция возвращает хэш
function getHash(value) {
    let hash = crypto.createHash('sha256');
    hash.update(value);
    return hash.digest('hex');
}

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

RouterAdmin.post('/getsettings', (req, res) => {
    if (req.session.key) {
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
                res.send(data);
            });
        });


    } else {
        res.sendStatus(400);
    }
});

RouterAdmin.post('/setsettings', jsonParser, (req, res) => {
    if (req.session.key) {
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
    } else {
        return res.sendStatus(400);
    }
});

RouterAdmin.get('/main', (req, res) => {
    if (req.session.key) {
        res.sendFile(__dirname + '/admin.html');
    } else {
        res.redirect('/main');
    }
});

module.exports = RouterAdmin;
