//Форма отправки сообщения
const React = require('react');
const ButtonOK = require('../buttons/ButtonOK.jsx');
const Form = require('./Form.jsx');

class FormMessage extends Form {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            adress: '',
            message: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit(e) {
        e.preventDefault();
        let errorString = [];
        if (this.state.adress == '') {
            errorString.push('Укажите обратный адрес.');
        }
        if (this.state.name == '') {
            errorString.push('Укажите Ваше имя.');
        }
        if (this.state.message == '') {
            errorString.push('Введите текст сообщения.');
        }
        if (errorString.length) {
            this.props.showMessage(true, 'Ошибка заполнения', '', errorString);
            return;
        }
        let sendData = JSON.stringify({
            autor: this.state.name,
            adress: this.state.adress,
            message: this.state.message
        });
        const req = new XMLHttpRequest();
        req.open("POST", '/sendMessage', true);
        req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        req.addEventListener('readystatechange', ()=>{
            if(req.status == 200) {
                this.props.showMessage(true, 'Отправлено', 'Ваше сообщение отправлено. Я свяжусь с вами при первой возможности.'); 
            }
            else {
                this.props.showMessage(true, 'Ошибка', 'Что-то пошло не так. Просьба переслать сообщение на e-mail. Ссылка ниже. Спасибо за понимание.'); 
            }
        });
        req.send(sendData);
               
    }
    
    render() {
        return(
        <div className='form_message'>    
        <form>
            <h2>Сообщение</h2>
            <textarea name="message" value={this.state.message} onChange={this.onChange}/>
            <h3>Представьтесь пожалуйста<input name="name" type="text" value={this.state.name} onChange={this.onChange}/></h3>
            <h3>Ваш адрес <input name="adress" type="adress" value={this.state.adress} onChange={this.onChange}/></h3>
            <ButtonOK onClick={this.onSubmit} />
        </form>
        </div>
        )
    }
}

module.exports = FormMessage;