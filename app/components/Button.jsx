//Класс от которого будут наследоваться все кнопки
const React = require('react');

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        let data = {
            main:false,
            work:false,
            live:false,
            link:false
        };
        data[this.props.contentName] = true;
        this.props.refresh(data);
    }
    
}

module.exports = Button;
