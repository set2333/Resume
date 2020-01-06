const React = require('react');
const Button = require('./Button.jsx');

class Ancor extends Button {
    
    render() {
        return <b onClick={this.onClick}>{this.props.title}</b>;
    }
}

module.exports = Ancor;