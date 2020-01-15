//Настройка схемы mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({date: Date, autor: String, adress: String, message: String, readed:Boolean}, {versionKey: false});
const Message = mongoose.model("message", messageSchema);

const emailSchema = new Schema({host: String, port:Number, secure:Boolean, user: String, pass:String, mail:String, sendmail:Boolean});
const Email = mongoose.model('email', emailSchema);

const userSchema = new Schema({login: String, pass:String});
const User = mongoose.model('user', userSchema);

const settingSchema = new Schema({sendAdmLogin: Boolean, countMessagesOnePage:Number});
const Setting = mongoose.model('setting', settingSchema);

module.exports.Message = Message;
module.exports.Email = Email;
module.exports.User = User;
module.exports.Setting = Setting;