const mongoose = require('mongoose');
const Email = require('./mongooseInit.js').Email;

let email = new Email({host: 'smtp.yandex.com', port:465, secure:true, user: 'set2333@yandex.ru', pass:'serSET2333new_yandex', mail:'set2333@mail.ru'});
mongoose.connect('mongodb://localhost:27017/resumedb', {useNewUrlParser:true, useUnifiedTopology:true}, (err)=>{
    if(err) return console.log(err);
    Email.collection.drop();
    email.save((err)=>{
        mongoose.disconnect();
        if (err) return console.log(err);
        console.log('e-mail адрес добавлен');
});
});
