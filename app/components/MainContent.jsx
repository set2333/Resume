const React = require('react');
const Content = require('./Content.jsx');

class MainContent extends Content {
    constructor(props) {
        super(props);
    }
    
    render() {console.log('main');
        return (
            <div className={((this.state.visibility)?'visibility':'hiden') + ' content'} >
                <h1>О сайте</h1>
            </div>
            );
    }
}

module.exports = MainContent;