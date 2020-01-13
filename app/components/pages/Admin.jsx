//Корневой компонент административного раздела
const React = require('react');
const Page = require('./Page.jsx');
const Message = require('../other/Message.jsx');
const ButtonNavAdm = require('../buttons/ButtonNavAdm.jsx');
const ButtonNavLink = require('../buttons/ButtonNavLink.jsx');
const ContentAdmMain = require('../contents/ContentAdmMain.jsx');
const ContentAdmAllmessage = require('../contents/ContentAdmAllmessage.jsx');
const ContentAdmSettings = require('../contents/ContentAdmSettings.jsx');
const ContentNotFound = require('../contents/ContentNotFound.jsx');

class Admin extends Page {
    constructor(props) {
        super(props);
        let curentPage = this.getCookie('curentPage');
        this.state = {
            main:false,
            allmessage:false,
            settings:false,
            notfound:false,
            headMessage:'',
            textMessage:'',
            ulData: []
        }
        this.state[curentPage] = true;
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
                            <ButtonNavLink title='Основной раздел' contentName="main" />
                        </ul>
                    </nav>    
                    <ContentAdmMain refresh={this.refresh} visibility={this.state.main}/>
                    <ContentAdmAllmessage refresh={this.refresh} visibility={this.state.allmessage} showMessage={this.showMessage}/>
                    <ContentAdmSettings refresh={this.refresh} visibility={this.state.settings} showMessage={this.showMessage}/>
                    <ContentNotFound refresh={this.refresh} visibility={this.state.notfound}/>
            </div>    
        )
    }
}

module.exports = Admin;