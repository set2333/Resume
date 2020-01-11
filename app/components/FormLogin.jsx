const React = require('react');
const ButtonOK = require('./ButtonOK.jsx');

class FormLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            pass: ''
        };
        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePass = this.onChangePass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
    }
    
    onChangeLogin(e) {
        this.setState({login:e.target.value});
    }
    
    onChangePass(e) {
        this.setState({pass:e.target.value});
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
                this.props.showMessage(true, 'Ошибка', 'Что-то пошло не так. Просьба переотправить сообщение на e-mail. Сылка ниже. Спасибо за понимание.'); 
            }
        });
        req.send(sendData);
    }
    
    render() {
        return(
            <div className="form_message">
               <form onSubmit={this.onSubmit}>
                   <h3>Логин <input type="text" value={this.state.login} onChange={this.onChangeLogin}/></h3>
                   <h3>Пароль <input type="password" value={this.state.pass} onChange={this.onChangePass}/></h3>
                   <ButtonOK onClick={this.onSubmit} />
               </form>
            </div>
        );
    }
}

module.exports = FormLogin;