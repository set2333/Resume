const React = require('react');
const Content = require('./Content.jsx');

class WorkContent extends Content {
    constructor(props) {
        super(props);
    }
    
    render() {console.log('work');
        return (
            <div className={(this.state.visibility)?'visibility':'hiden'}>
                <h1>О работе</h1>
            </div>
            );
    }
}

module.exports = WorkContent;