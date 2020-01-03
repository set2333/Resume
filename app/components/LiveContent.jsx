const React = require('react');

class LiveContent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className={(this.props.visibility)?'visibility':'hiden'}>
                <h1>О жизни</h1>
            </div>
            );
    }
}

module.exports = LiveContent;