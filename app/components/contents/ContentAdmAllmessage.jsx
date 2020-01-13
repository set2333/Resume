//Контент главного раздела
const React = require('react');
const Content = require('./Content.jsx');

class ContentAdmAllmessage extends Content {
    
    render() {
        return (
            <div className={((this.state.visibility)?'visibility':'hiden') + ' content'} >
                <h1>Все сообщения</h1>
            </div>
        );
    }
}

module.exports = ContentAdmAllmessage;