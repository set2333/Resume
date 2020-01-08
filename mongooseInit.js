//Настройка схемы mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({date: Date, autor: String, adress: String, message: String, readed:Boolean}, {versionKey: false});
const Message = mongoose.model("message", messageSchema);

module.exports Message;