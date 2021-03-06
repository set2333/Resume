//Форма авторизации
const React = require('react');
const ButtonOK = require('../buttons/ButtonOK.jsx');
const Form = require('./Form.jsx');

class FormLogin extends Form {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            pass: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit(e) {
        e.preventDefault();
        let sendData = JSON.stringify({
            login: this.state.login,
            pass: this.state.pass
        });
        const req = new XMLHttpRequest();
        req.open("POST", '/admin/login', true);
        req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        req.addEventListener('readystatechange', ()=>{
            if(req.status == 200) {
                location.href = '/admin/main';
            }
            else {
                this.props.showMessage(true, 'Ошибка', 'Неверный логин или пароль.'); 
            }
        });
        req.send(sendData);
    }
    
    render() {
        return(
            <div className="form_message">
               <form>
                   <h3>Логин <input name="login" type="text" value={this.state.login} onChange={this.onChange}/></h3>
                   <h3>Пароль <input name="pass" type="password" value={this.state.pass} onChange={this.onChange}/></h3>
                   <ButtonOK onClick={this.onSubmit} />
               </form>
            </div>
        );
    }
}

module.exports = FormLogin;