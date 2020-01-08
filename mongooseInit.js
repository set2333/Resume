//Настройка схемы mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({date: Date, autor: String, adress: String, message: String, readed:Boolean}, {versionKey: false});
const Message = mongoose.model("message", messageSchema);
const emailSchema = new Schema({host: String, port:Number, secure:Boolean, user: String, pass:String, mail:String});
const Email = mongoose.model('email', emailSchema);

module.exports.Message = Message;
module.exports.Email = Email;
