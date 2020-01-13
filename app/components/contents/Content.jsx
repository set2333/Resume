//Класс от которого наследуются все контенты, т.е данные отображенные в разделе
const React = require('react');

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {visibility: this.props.visibility};
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.visibility !== nextProps.visibility;
    }
    
    componentWillReceiveProps(nextProps) {
        this.state.visibility = nextProps.visibility;
    }
}

module.exports = Content;