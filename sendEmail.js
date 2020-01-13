//Модуль отправки сообщений на email
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const Email = require('./mongooseInit.js').Email;

function sendEmail(mailMessage) {
    Email.findOne({}, (err, data) => {
        if (err) return console.log(err);
        if (data.sendmail) {
            let transporter = nodemailer.createTransport({
                host: data.host,
                port: data.port,
                secure: data.secure,
                auth: {
                    user: data.user,
                    pass: data.pass
                }
            });
            transporter.sendMail({from: data.user, to: data.mail, subject: 'Сообщение с сайта резюме', 
                html: '<h1>На Ваше резюме новый отклик</h1><h2>Пользователь: '+mailMessage.autor+'</h2><h2>Обратный адрес: '+mailMessage.adress+'</h2><p>'+mailMessage.message+'</p>'});
        }
    });
}

module.exports = sendEmail;