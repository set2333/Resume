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
        console.log(this.state.login + ':' + this.state.pass);
    }
    
    render() {
        return(
            <div className="formMessage">
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