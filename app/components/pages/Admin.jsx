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
        let content = '';
        if(this.state.main) {
            content = <ContentAdmMain refresh={this.refresh} />;
        }
        else if(this.state.allmessage) {
            content = <ContentAdmAllmessage refresh={this.refresh} showMessage={this.showMessage}/>;
        }
        else if(this.state.settings) {
            content = <ContentAdmSettings refresh={this.refresh} showMessage={this.showMessage}/>;
        }
        else {
            content = <ContentNotFound refresh={this.refresh} />
        }
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
                    {content}
            </div>    
        )
    }
}

module.exports = Admin;