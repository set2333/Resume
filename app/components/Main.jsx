//Корневой компонент
const React = require('react');
var ButtonNav = require('./ButtonNav.jsx');
var ContentMain = require('./ContentMain.jsx');
var ContentWork = require('./ContentWork.jsx');
var ContentLive = require('./ContentLive.jsx');
var ContentLink = require('./ContentLink.jsx');
const Message = require('./Message.jsx');

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
        this.showMessage = this.showMessage.bind(this);
        this.state = {
            main:true,
            work:false,
            live:false,
            link:false,
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
        return (
            <div>
                    <Message visibility={this.state.message} showMessage={this.showMessage} headMessage={this.state.headMessage} textMessage={this.state.textMessage} ulData={this.state.ulData}/>
                    <nav>
                        <ul>
                            <ButtonNav title='Главная' refresh={this.refresh} contentName="main" acent={this.state.main}/>
                            <ButtonNav title='О работе' refresh={this.refresh} contentName="work" acent={this.state.work}/>
                            <ButtonNav title='О жизни' refresh={this.refresh} contentName="live" acent={this.state.live}/>
                            <ButtonNav title='Контакты' refresh={this.refresh} contentName="link" acent={this.state.link}/>
                        </ul>
                    </nav>    
                    <ContentMain refresh={this.refresh} visibility={this.state.main} />
                    <ContentWork refresh={this.refresh} visibility={this.state.work} />
                    <ContentLive refresh={this.refresh} visibility={this.state.live} />
                    <ContentLink refresh={this.refresh} visibility={this.state.link} showMessage={this.showMessage}/>
            </div>    );
    }
}

module.exports = Main;