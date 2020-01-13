//Класс для наследования компонентами страниц
const React = require('react');

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
        this.showMessage = this.showMessage.bind(this);
        this.getCookie = this.getCookie.bind(this);
    }
    
    //Отображение нужного подраздела
    refresh(data) {
        this.setState(data);
    }
    
    //Функция получения cookie по имени
    getCookie(name) {
        let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    
    //Показ окна сообщения
    showMessage(show, headMessage, textMessage, ulData) {
        this.setState({message:show, headMessage:headMessage, textMessage:textMessage, ulData:ulData});
    }
}

module.exports = Page;