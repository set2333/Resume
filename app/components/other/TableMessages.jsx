//Таблица с сообщениями
const React = require('react');

class TableMessages extends React.Component {
    render() {
        return(
            <table>
                <tr>
                    <th>Дата</th>
                    <th>Автор</th>
                    <th>Обратный адрес</th>
                </tr>
                {this.props.messages.map((item)=>{
                    return(
                        <tr>
                            <td>{item.date}</td>
                            <td>{item.autor}</td>
                            <td>{item.adress}</td>
                        </tr>
                    );
                })}
            </table>
        );
    }
}

module.exports = TableMessages;