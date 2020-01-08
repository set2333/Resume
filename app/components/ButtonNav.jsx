//Кнопка навирационного меню. Переходит на нужный раздел
const React = require('react');
const Button = require('./Button.jsx');

class ButtonNav extends Button {
    
    render() {
        return <li className={((this.props.acent)?'acent':'')  + ' nav_button'} onClick={this.onClick}>{this.props.title}</li>;
    }
}

module.exports = ButtonNav;