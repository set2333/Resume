//Кнопка подтверждения действия
const React = require('react');
const Button = require('./Button.jsx');

class ButtonDelete extends Button {
    render() {
        return(
            <div className='ButtonDelete' onClick={this.props.onClick.bind(this.props.idMessage)}>
                
            </div>
        );
    }
}

module.exports = ButtonDelete;