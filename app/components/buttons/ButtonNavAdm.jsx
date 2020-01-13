//Кнопка навирационного меню. Переходит на нужный раздел
const React = require('react');
const Button = require('./Button.jsx');

class ButtonNavAdm extends Button {
    onClick() {
        let data = {
            main:false,
            allmessage:false,
            settings:false
        };
        data[this.props.contentName] = true;
        this.props.refresh(data);
    }
    
    render() {
        return <li className={((this.props.acent)?'acent':'')  + ' nav_button'} onClick={this.onClick}>{this.props.title}</li>;
    }
}

module.exports = ButtonNavAdm;