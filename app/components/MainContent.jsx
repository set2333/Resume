const React = require('react');

class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className={(this.props.visibility)?'visibility':'hiden'}>
                <h1>О сайте</h1>
            </div>
            );
    }
}

module.exports = MainContent;