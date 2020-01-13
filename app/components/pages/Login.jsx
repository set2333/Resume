//Корневой компонент страницы авторизации
const React = require('react');
const Page = require('./Page.jsx');
const FormLogin = require('../forms/FormLogin.jsx');
const ContentLogin = require('../contents/ContentLogin.jsx');
const ButtonNavLink = require('../buttons/ButtonNavLink.jsx');
const Message = require('../other/Message.jsx')

class Login extends Page {
    constructor(props) {
        super(props);
        this.state = {
            message:false,
            headMessage:'',
            textMessage:'',
            ulData: []
        }
    }
    
    render() {
        return(
            <div>
               <Message visibility={this.state.message} showMessage={this.showMessage} headMessage={this.state.headMessage} textMessage={this.state.textMessage} ulData={this.state.ulData}/>
                <nav>
                    <ul>
                        <ButtonNavLink title='Главная' contentName="main" />
                        <ButtonNavLink title='О работе' contentName="work" />
                        <ButtonNavLink title='О жизни' contentName="live" />
                        <ButtonNavLink title='Контакты' contentName="about" />
                    </ul>
                </nav>  
                <ContentLogin showMessage={this.showMessage}/>
            </div>
            
        );
    }
}

module.exports = Login;