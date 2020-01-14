//Таблица с сообщениями
const React = require('react');

class TableMessages extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    
    onClick(id) {
        let sendData = JSON.stringify({_id:id});
        const req = new XMLHttpRequest();
        req.open("POST", '/admin/getmessage', true);
        req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        req.addEventListener('readystatechange', ()=>{
            if(req.status == 200 && req.responseText) {
                let data = JSON.parse(req.responseText);
                this.props.showMessage(true, 'От: ' + data.autor, data.message, [data.date, data.adress]);
            }
            else {
                this.props.showMessage(true, 'Ошибка', 'Не удалось показать сообщение. '); 
            }
        });
        req.send(sendData);
    }
    
    render() {
        return(
            <table className="tebleMessages">
                <tr>
                    <th>Автор</th>
                    <th>Обратный адрес</th>
                    <th>Дата</th>
                </tr>
                {this.props.messages.map((item)=>{
                    return(
                        <tr onClick={this.onClick.bind(this, item.id)}>
                            <td>{item.autor}</td>
                            <td>{item.adress}</td>
                            <td>{item.date}</td>
                        </tr>
                    );
                })}
            </table>
        );
    }
}

module.exports = TableMessages;