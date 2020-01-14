const React = require('react');
const TableMessages = require('./TableMessages.jsx');

class Flipper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {curentPage : 0, messages : [], countPage : 1};
        this.upPage = this.upPage.bind(this);
        this.downPage = this.downPage.bind(this);
        this.getMessages = this.getMessages.bind(this);
    }
    
    componentDidMount() {
        this.getMessages(this.state.curentPage);
    }
    
    getMessages(curentPage) {
        const req = new XMLHttpRequest();
        let sendData = JSON.stringify({
            numberPage: curentPage
        });
        req.open("POST", '/admin/getmessages', true);
        req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        req.onload = ()=>{
            if(req.status == 200) {
                let data = JSON.parse(req.responseText);
                let count = data.count/10;
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
    
    upPage() {
//        if(this.state.curentPage < this.state.countPage) {
//            console.log('up2');
            this.getMessages(this.state.curentPage+1);
//        }
    }
    
    downPage() {
//        if(this.state.curentPage > 0) {
//            console.log('down2');
            this.getMessages(this.state.curentPage-1);
//        }
    }
    
    render() {
        return(
            <div>
                <div className="downPage" onClick={this.downPage}><h1>-</h1></div>
                <p><input type="text" value={this.state.curentPage}></input>{this.state.countPage}</p>
                <div className="upPage" onClick={this.upPage}><h1>+</h1></div>
                <TableMessages messages={this.state.messages} />                          
            </div>
            
        );
    }
}

module.exports = Flipper;