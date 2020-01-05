const React = require('react');

class Ancor extends React.Component {
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
        return <b onClick={this.onClick}>{this.props.title}</b>;
    }
}

module.exports = Ancor;