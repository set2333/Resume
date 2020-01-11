const React = require('react');
const Message = require('./Message.jsx')

class Admin extends React.Component {
//    constructor(props) {
//        super(props);
//        this.showMessage = this.showMessage.bind(this);
//        this.state = {
//            message:false,
//            headMessage:'',
//            textMessage:'',
//            ulData: []
//        }
//    }
//    
//    showMessage(show, headMessage, textMessage, ulData) {
//        this.setState({message:show, headMessage:headMessage, textMessage:textMessage, ulData:ulData});
//    }
//    
//    render() {
//        return(
//            <div>
//               <Message visibility={this.state.message} showMessage={this.showMessage} headMessage={this.state.headMessage} textMessage={this.state.textMessage} ulData={this.state.ulData}/>
//                <h1>Админка</h1>
//            </div>
//            
//        );
//    }
    render() {
        return(<h1>Админка</h1>)
    }
}

module.exports = Admin;