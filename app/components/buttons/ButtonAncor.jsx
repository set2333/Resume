//Внутренняя ссылка. Переходит на нужный раздел
const React = require('react');
const Button = require('./Button.jsx');

class ButtonAncor extends Button {
    
    render() {
        return <b onClick={this.onClick}>{this.props.title}</b>;
    }
}

module.exports = ButtonAncor;