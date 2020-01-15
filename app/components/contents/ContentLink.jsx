//Контент раздела с контактами и ссылками
const React = require('react');
const Content = require('./Content.jsx');
const FormMessage = require('../forms/FormMessage.jsx');

class ContentLink extends Content {
    
    render() {
        return (
            <div className='content' >
                <h1>Написать мне можно прямо здесь</h1>
                <FormMessage showMessage={this.props.showMessage}/>
                <h2>Ссылки</h2>
                <ul>
                    <li>Так же можно написать по адресу <a href="mailto:set2333@mail.ru">set2333@mail.ru.</a></li>
                    <li>Ссылка на мой профиль на <a href="https://infostart.ru/profile/99304/">Инфостарте.</a></li>
                    <li>Мой <a href="https://habr.com/ru/users/set2333/">Хабр</a> аккаунт.</li>
                    <li><a href="https://career.habr.com/set2333">Хабр карьера.</a></li>
                    <li>Аккаунт на <a href="https://github.com/set2333/">Гитхабе.</a></li>
                    <li>Кстати, исходники этого сайта <a href="https://github.com/set2333/Resume">там же.</a></li>
                    <li>А вот <a href="https://drive.google.com/open?id=18QpwXxgM2pvLe-SYb5ftMry-rkhhJhLQ">сертификат</a> с финала Цифрового прорыва 2019</li>
                </ul>
            </div>
            );
    }
}

module.exports = ContentLink;