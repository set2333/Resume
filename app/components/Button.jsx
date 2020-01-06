const React = require('react');

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    
    onClick() {
        let data = {
            main:false,
            work:false,
            live:false,
            link:false
        };
        data[this.props.contentName] = true;
       this.props.refresh(data);
    }
    
    render() {
        return <li className={((this.props.acent)?'acent':'')  + ' nav_button'} onClick={this.onClick}>{this.props.title}</li>;
    }
}

module.exports = Button;