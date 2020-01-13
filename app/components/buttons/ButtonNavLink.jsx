//Кнопка подтверждения действия
const React = require('react');
const Button = require('./Button.jsx');

class ButtonNavLink extends Button {
    
    onClick() {
        return location.href = '/' + this.props.contentName;
    }
    
    render() {
        return <li className='nav_button' onClick={this.onClick}>{this.props.title}</li>;
    }
}

module.exports = ButtonNavLink;