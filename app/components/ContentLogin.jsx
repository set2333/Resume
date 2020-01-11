const React = require('react');
const Content = require('./Content.jsx');
const FormLogin = require('./FormLogin.jsx');

class ContentLogin extends Content {
    
    render() {
        return (
            <div className='visibility content' >
               <h1>Для дальнейшей работы авторизуйтесь</h1>
                <FormLogin showMessage={this.props.showMessage}/>
            </div>
            );
    }
}

module.exports = ContentLogin;