//Модальное окно сообщения
const React = require('react');
const ReactDOM = require('react-dom');
const ButtonOK = require('../buttons/ButtonOK.jsx');

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }
    
    close() {
        this.props.showMessage(false);
    }
    
    render() {
        if (this.props.visibility) {
            return ReactDOM.createPortal(
                <div className='messageBG'>
                    <div className='message'>
                        <h1>{this.props.headMessage}</h1>
                        <p>{this.props.textMessage}</p>
                        
                        <ul>
                            {this.props.ulData.map((item)=>{
                                return <li>{item}</li>;
                            })}
                        </ul>
                        <ButtonOK onClick={this.close} />
                    </div>
                </div>, document.querySelector('body'));
        }
        else return null;
    }
    
}

Message.defaultProps = {headMessage:'', textMessage:'', ulData:[]};

module.exports = Message;