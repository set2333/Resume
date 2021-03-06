//Таблица с сообщениями
const React = require('react');
const ButtonDelete = require('../buttons/ButtonDelete.jsx');

class TableMessages extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    
    onClick(id) {//По клику на строку таблицы позгрузим сообщение и отобразим его в окошке
        let sendData = JSON.stringify({_id:id});
        const req = new XMLHttpRequest();
        req.open("POST", '/admin/getmessage', true);
        req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        req.addEventListener('readystatechange', ()=>{
            if(req.status == 200 && req.responseText) {
                let data = JSON.parse(req.responseText);
                this.props.showMessage(true, 'От: ' + data.autor, data.message, [data.date, data.adress]);
                this.props.getMessages(this.props.curentPage);
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
                        <tr className={(!item.readed)?'noReaded':''} onClick={this.onClick.bind(this, item.id)}>
                            <td>{item.autor}</td>
                            <td>{item.adress}</td>
                            <td>{item.date}<ButtonDelete onClick={this.props.deleteMessage} idMessage={item.id}/></td>
                        </tr>
                    );
                })}
            </table>
        );
    }
}

module.exports = TableMessages;