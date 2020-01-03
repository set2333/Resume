const React = require('react');
const Content = require('./Content.jsx');

class LiveContent extends Content {
    constructor(props) {
        super(props);
    }
    
    render() {console.log('live');
        return (
            <div className={(this.state.visibility)?'visibility':'hiden'}>
                <h1>О жизни</h1>
            </div>
            );
    }
}

module.exports = LiveContent;