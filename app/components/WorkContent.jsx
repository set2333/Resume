const React = require('react');

class WorkContent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className={(this.props.visibility)?'visibility':'hiden'}>
                <h1>О работе</h1>
            </div>
            );
    }
}

module.exports = WorkContent;