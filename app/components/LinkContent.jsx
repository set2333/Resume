const React = require('react');
const Content = require('./Content.jsx');

class LinkContent extends Content {
    constructor(props) {
        super(props);
    }
    
    render() {console.log('link');
        return (
            <div className={(this.state.visibility)?'visibility':'hiden'}>
                <h1>Ссылки</h1>
            </div>
            );
    }
}

module.exports = LinkContent;