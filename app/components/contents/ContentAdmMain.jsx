//Контент главной страницы административного раздела
const React = require('react');
const Content = require('./Content.jsx');

class ContentAdmMain extends Content {
    
    render() {
        return (
            <div className={((this.state.visibility)?'visibility':'hiden') + ' content'} >
                <h1>Административный раздел</h1>
                <p>Раздел для чтения полученных сообщений и настройки сайта.</p>
                <p>Этот раздел исключительно для административного использования. Еслы Вы попали сюда случайно, пожалуйста не меняйте настройки и не читайте сообщения. Я буду Вам очень признателен, если Вы напишите, как Вам удалось попасть в этот раздел. Спасибо.</p>
            </div>
        );
    }
}

module.exports = ContentAdmMain;