//Контент страницы с сообщениями
const React = require('react');
const Content = require('./Content.jsx');
const TableMessages = require('../other/TableMessages.jsx');

class ContentAdmAllmessage extends Content {
    constructor(props) {
        super(props);
        this.state = {curentMessagePage:0, messages:[]};
        this.getMessages = this.getMessages.bind(this);
    }
    
    componentDidMount() {
        this.getMessages();
    }
    
    getMessages() {
        const req = new XMLHttpRequest();
        let sendData = JSON.stringify({
            numberPage: this.state.curentMessagePage
        });
        req.open("POST", '/admin/getmessages', true);
        req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        req.addEventListener('readystatechange', ()=>{
            console.log('req.responseText: ' + req.responseText + ' req.status: ' + req.status)
            if(req.status == 200 && req.responseText) {
                    console.log('TYT');
                    let data = JSON.parse(req.responseText);
                    this.setState({messages:data});
            
            }
            else {
                this.props.showMessage(true, 'Ошибка', 'Не удалось получить сообщения. '); 
            }
        });
        req.send(sendData);
    }
    
    render() {
        return (
            <div className={((this.state.visibility)?'visibility':'hiden') + ' content'} >
                <h1>Все сообщения</h1>
                <TableMessages messages={this.state.messages} showMessage={this.props.showMessage}/>
            </div>
        );
    }
}

module.exports = ContentAdmAllmessage;