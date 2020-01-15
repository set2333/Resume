const React = require('react');
const TableMessages = require('./TableMessages.jsx');

class Flipper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {curentPage : 1, messages : [], countPage : 1, countMessagesOnePage:0};
        this.upPage = this.upPage.bind(this);
        this.downPage = this.downPage.bind(this);
        this.getMessages = this.getMessages.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.deleteMessage = this.deleteMessage.bind(this);
    }
    
    componentDidMount() {
        this.getMessages(this.state.curentPage);
    }
    
    getMessages(curentPage) {
        const req = new XMLHttpRequest();
        let sendData = JSON.stringify({
            numberPage: curentPage-1
        });
        req.open("POST", '/admin/getmessages', true);
        req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        req.onload = ()=>{
            if(req.status == 200) {
                let data = JSON.parse(req.responseText);
                let count = data.count/data.countMessagesOnePage;
                data.countPage = (count > Math.floor(count))?Math.floor(count)+1:Math.floor(count);
                data.curentPage = curentPage;
                this.setState(data);
            }
            else {
                this.props.showMessage(true, 'Ошибка', 'Не удалось получить сообщения. '); 
            }
        };
        req.send(sendData);
    }
    
    deleteMessage(id) {
        alert(id);
    }
    
    upPage() {
        this.getMessages(+this.state.curentPage+1);
    }
    
    downPage() {
        this.getMessages(+this.state.curentPage-1);
    }
    
    onInputChange(e) {
        let value = e.target.value;
        if(value>0 && value <= this.state.countPage) {
            this.getMessages(value);
        }
    }
    
    render() {
        let buttonUp = (this.state.curentPage == this.state.countPage)?'':<div className="upPage" onClick={this.upPage}>+</div>;
        let buttonDown = (this.state.curentPage == 1)?'':<div className="downPage" onClick={this.downPage}>-</div>;
        return(
            <div className="flipper">
                
                <p>{buttonDown}<input type="text" value={this.state.curentPage} onChange={this.onInputChange}></input> / {this.state.countPage}{buttonUp}</p>
                
                <TableMessages messages={this.state.messages} showMessage={this.props.showMessage} getMessages={this.getMessages} curentPage={this.state.curentPage} deleteMessage={this.deleteMessage}/>                          
            </div>
            
        );
    }
}

module.exports = Flipper;