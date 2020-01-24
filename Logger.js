//Модуль логирования
const fs = require('fs');
const newLine = require('os').EOL;

function writeLog(logStr) {
    const date = new Date();
    strDate = date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear();
    fs.appendFile(__dirname + '/logs/' + strDate + '.txt', logStr + newLine, (err)=>{
        if(err) console.log(err);
    });
}

function logger(req, res, next) {
    const logString = req.method + ' ' + req.url + ' ' + req.hostname + ' ' + req.connection.remoteAddress + ' ' + new Date();
    setImmediate(writeLog.bind(this, logString));
    next();
}

module.exports = logger;