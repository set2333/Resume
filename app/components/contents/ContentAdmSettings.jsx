//Контент страницы с настройками
const React = require('react');
const Content = require('./Content.jsx');
const FormSettings = require('../forms/FormSettings.jsx');

class ContentAdmSettings extends Content {
    
    render() {
        return (
            <div className={((this.state.visibility)?'visibility':'hiden') + ' content'} >
                <h1>Настройки</h1>
                <FormSettings showMessage={this.props.showMessage}/>
            </div>
        );
    }
}

module.exports = ContentAdmSettings;