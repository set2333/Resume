//Кнопка удаления сообщения
const React = require('react');
const Button = require('./Button.jsx');

class ButtonDelete extends Button {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    
    onClick(event) {//Удаление сообщения. Удаляем в this.props.onClick. Здесь останавливае всплытие сообщения, стобы не подгружать удаленное сообщение
        event = event || window.event;
        if(event.stopPropagation) {
            event.stopPropagation();
        }
        else {
            event.cancelBubble = true;
        }
        this.props.onClick(this.props.idMessage);
    }
    
    render() {
        return(
            <div className='ButtonDelete' onClick={this.onClick}>
                
            </div>
        );
    }
}

module.exports = ButtonDelete;