const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Router = require('./Router.js');
const RouterAdmin = require('./RouterAdmin.js');

app.use(express.static(__dirname + '/public'));
app.use('/admin', RouterAdmin);
app.use('/', Router);

mongoose.connect('mongodb://localhost:27017/resumedb', {useNewUrlParser:true, useUnifiedTopology:true}, (err)=>{
    if(err) return console.log(err);
    app.listen(3000, ()=>{
        console.log('Server started');
    });
});

