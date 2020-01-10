const React = require('react');
const Content = require('./Content.jsx');
const FormLogin = require('./FormLogin.jsx');

class ContentLogin extends Content {
    
    render() {
        return (
            <div className='visibility content' >
                <FormLogin showMessage={this.props.showMessage}/>
            </div>
            );
    }
}

module.exports = ContentLogin;