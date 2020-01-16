//Модуль отправки сообщений на email
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const Email = require('./mongooseInit.js').Email;

function sendEmail(mailMessage, sendAdmin=false) {
    Email.findOne({}, (err, data) => {
        if (err) return console.log(err);
        if (data.sendmail || sendAdmin) {
            let transporter = nodemailer.createTransport({
                host: data.host,
                port: data.port,
                secure: data.secure,
                auth: {
                    user: data.user,
                    pass: data.pass
                }
            });
            if(sendAdmin) {//Сообщение о входе в админку
                transporter.sendMail({from: data.user, to: data.mail, subject: 'Вход в админку.', 
                html: '<h1>'+mailMessage.message+'</h1>'});
            }
            else{//Сообщение о новом сообщении
                transporter.sendMail({from: data.user, to: data.mail, subject: 'Сообщение с сайта резюме', 
                html: '<h1>На Ваше резюме новый отклик</h1><h2>Пользователь: '+mailMessage.autor+'</h2><h2>Обратный адрес: '+mailMessage.adress+'</h2><p>'+mailMessage.message+'</p>'});
            }
        }
    });
}

module.exports = sendEmail;