const React = require('react');
const Message = require('./other/Message.jsx');
const ButtonNavAdm = require('./buttons/ButtonNavAdm.jsx');
const ContentAdmMain = require('./contents/ContentAdmMain.jsx');
const ContentAdmAllmessage = require('./contents/ContentAdmAllmessage.jsx');
const ContentAdmSettings = require('./contents/ContentAdmSettings.jsx');



class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.showMessage = this.showMessage.bind(this);
        this.refresh = this.refresh.bind(this);
        this.state = {
            main:true,
            allmessage:false,
            settings:false,
            message:false,
            headMessage:'',
            textMessage:'',
            ulData: []
        }
    }
    
    refresh(data) {
        this.setState(data);
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
                            <ButtonNavAdm title='Главная' refresh={this.refresh} contentName="main" acent={this.state.main}/>
                            <ButtonNavAdm title='Сообщения' refresh={this.refresh} contentName="allmessage" acent={this.state.allmessage}/>
                            <ButtonNavAdm title='Настройки' refresh={this.refresh} contentName="settings" acent={this.state.settings}/>
                        </ul>
                    </nav>    
                    <ContentAdmMain refresh={this.refresh} visibility={this.state.main}/>
                    <ContentAdmAllmessage refresh={this.refresh} visibility={this.state.allmessage}/>
                    <ContentAdmSettings refresh={this.refresh} visibility={this.state.settings} showMessage={this.showMessage}/>

                    
            </div>    
        
        )
    }
}

module.exports = Admin;