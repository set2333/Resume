//Кнопка подтверждения действия
const React = require('react');
const Button = require('./Button.jsx');

class ButtonOK extends Button {
    render() {
        return(
            <div className='buttonOK' onClick={this.props.onClick}>
                <h2>OK</h2>
            </div>
        );
    }
}

module.exports = ButtonOK;