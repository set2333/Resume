//Контент страницы с сообщениями
const React = require('react');
const Content = require('./Content.jsx');
const Flipper = require('../other/Flipper.jsx');

class ContentAdmAllmessage extends Content {

    render() {
        return (
            <div className='content' >
                <h1>Все сообщения</h1>
                <Flipper showMessage={this.props.showMessage}/>
            </div>
        );
    }
}

module.exports = ContentAdmAllmessage;