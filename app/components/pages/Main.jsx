//Корневой компонент основного раздела
const React = require('react');
const Page = require('./Page.jsx');
const ButtonNav = require('../buttons/ButtonNav.jsx');
const ContentMain = require('../contents/ContentMain.jsx');
const ContentWork = require('../contents/ContentWork.jsx');
const ContentLive = require('../contents/ContentLive.jsx');
const ContentLink = require('../contents/ContentLink.jsx');
const ContentNotFound = require('../contents/ContentNotFound.jsx');
const Message = require('../other/Message.jsx');

class Main extends Page {
    constructor(props) {
        super(props);
        let curentPage = this.getCookie('curentPage');
        this.state = {
            main:false,
            work:false,
            live:false,
            link:false,
            notfound:false,
            message:false,
            headMessage:'',
            textMessage:'',
            ulData: []
        }
        this.state[curentPage]=true;
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
                <ContentNotFound refresh={this.refresh} visibility={this.state.notfound}/>
            </div>
        );
    }
}

module.exports = Main;