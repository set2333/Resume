//Форма настроек
const React = require('react');
const ButtonOK = require('../buttons/ButtonOK.jsx');
const Form = require('./Form.jsx');

class FormSettings extends Form {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            pass: '',
            emaillogin: '',
            emailpass: '',
            emailhost: '',
            emailport: '',
            emailsecure: '',
            email: '',
            sendmail: '',
            getting : false
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    //Послк рендера формы обратимся к серверу, получим настройки и вставим полученные данные в поля формы
    componentDidMount() {
        if (!this.state.getting) {
            const req = new XMLHttpRequest();
            req.open("POST", '/admin/getsettings', true);
            req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            req.onload = ()=>{
                if(req.status == 200) {
                    let data = JSON.parse(req.responseText);
                    data.getting = true;
                    this.setState(data);
                }
                else {
                    this.props.showMessage(true, 'Ошибка', 'Не удалось получить настройки. '); 
                }
            };
            req.send();
        }
    }
    
    onSubmit(e) {
        e.preventDefault();
        let sendData = JSON.stringify({
            admin: {
                login: this.state.login,
                pass: this.state.pass
            },
            email: {
                user: this.state.emaillogin,
                pass: this.state.emailpass,
                host: this.state.emailhost,
                port: this.state.emailport,
                secure: this.state.emailsecure,
                mail: this.state.email,
                sendmail: this.state.sendmail
            }
            
        });
        const req = new XMLHttpRequest();
        req.open("POST", '/admin/setsettings', true);
        req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        req.onload = ()=>{
            if(req.status == 200) {
                this.props.showMessage(true, 'Успех', 'Настройки сохраннены. ');
                this.setState({getting: false});
            }
            else {
                this.props.showMessage(true, 'Ошибка', 'Что-то пошло не так. '); 
            }
        };
        req.send(sendData);
    }
    
    render() {
        return(
            <div className="form_message">
               <form>
                   <h3>Логин администратора <input name="login" type="text" value={this.state.login} onChange={this.onChange}/></h3>
                   <h3>Пароль администратора <input name="pass" type="password" value={this.state.pass} onChange={this.onChange}/></h3>
                   <h3>Отправлять сообщения на email <input name="sendmail" type="checkbox" checked={this.state.sendmail} onChange={this.onChange}/></h3>
                   <h3>Адрес почты <input name="emaillogin" type="text" value={this.state.emaillogin} onChange={this.onChange}/></h3>
                   <h3>Пароль почты <input name="emailpass" type="password" value={this.state.emailpass} onChange={this.onChange}/></h3>
                   <h3>Сервер почты <input name="emailhost" type="text" value={this.state.emailhost} onChange={this.onChange}/></h3>
                   <h3>Порт почты <input name="emailport" type="text" value={this.state.emailport} onChange={this.onChange}/></h3>
                   <h3>Безопасность <input name="emailsecure" type="checkbox" checked={this.state.emailsecure} onChange={this.onChange}/></h3>
                   <h3>Адрес для получения почты <input name="email" type="text" value={this.state.email} onChange={this.onChange}/></h3>
                   <ButtonOK onClick={this.onSubmit} />
               </form>
            </div>
        );
    }
}

module.exports = FormSettings;