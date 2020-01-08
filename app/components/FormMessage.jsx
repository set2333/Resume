//Форма отправки сообщения
const React = require('react');
const ButtonOK = require('./ButtonOK.jsx');

class FormMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            adress: '',
            message: ''
        };
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAdres = this.onChangeAdres.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeName(e) {
        this.setState({name: e.target.value});
    }
    
    onChangeAdres(e) {
        this.setState({adress: e.target.value});
    }
    
    onChangeMessage(e) {
        this.setState({message: e.target.value});
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
                this.props.showMessage(true, 'Отправленно', 'Ваше сообщение отправленно. Я свяжусь с вами при первой возможности.'); 
            }
            else {
                this.props.showMessage(true, 'Ошибка', 'Что-то пошло не так. Просьба переотправить сообщение на e-mail. Сылка ниже. Спасибо за понимание.'); 
            }
        });
        req.send(sendData);
               
    }
    
    render() {
        return(
        <div className='form_message'>    
        <form onSubmit={this.onSubmit}>
            <h2>Сообщение</h2>
            <textarea value={this.state.message} onChange={this.onChangeMessage}/>
            <h3>Представтесь пожалуйста<input type="text" value={this.state.name} onChange={this.onChangeName}/></h3>
            <h3>Ваш адрес <input type="text" value={this.state.adress} onChange={this.onChangeAdres}/></h3>
            <ButtonOK onClick={this.onSubmit} />
        </form>
        </div>
        )
    }
            
}

module.exports = FormMessage;