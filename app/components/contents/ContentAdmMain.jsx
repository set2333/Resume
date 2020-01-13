//Контент главного раздела
const React = require('react');
const Content = require('./Content.jsx');

class ContentAdmMain extends Content {
    
    render() {
        return (
            <div className={((this.state.visibility)?'visibility':'hiden') + ' content'} >
                <h1>Административный раздел</h1>
                <p>Раздел для чтения полученных сообщений и настройки сайта.</p>
            </div>
        );
    }
}

module.exports = ContentAdmMain;