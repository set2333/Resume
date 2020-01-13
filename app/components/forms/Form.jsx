const React = require('react');

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);        
    }
    
    onChange(e) {
        let target = e.target;
        let value = (target.type === 'checkbox') ? target.checked: target.value;
        this.setState({[target.name]:value});
    }
}

module.exports = Form;