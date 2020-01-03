const React = require('react');

class LinkContent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className={(this.props.visibility)?'visibility':'hiden'}>
                <h1>Ссылки</h1>
            </div>
            );
    }
}

module.exports = LinkContent;