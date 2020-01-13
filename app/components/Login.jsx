const React = require('react');
const FormLogin = require('./forms/FormLogin.jsx');
const ContentLogin = require('./contents/ContentLogin.jsx');
var ButtonNavLink = require('./buttons/ButtonNavLink.jsx');
const Message = require('./other/Message.jsx')

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.showMessage = this.showMessage.bind(this);
        this.state = {
            message:false,
            headMessage:'',
            textMessage:'',
            ulData: []
        }
    }
    
    showMessage(show, headMessage, textMessage, ulData) {
        this.setState({message:show, headMessage:headMessage, textMessage:textMessage, ulData:ulData});
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