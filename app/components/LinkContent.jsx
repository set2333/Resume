const React = require('react');
const Content = require('./Content.jsx');

class LinkContent extends Content {
    
    render() {
        return (
            <div className={((this.state.visibility)?'visibility':'hiden') + ' content'} >
                <h1>Ссылки</h1>
                <ul>
                    <li>Написать мне можно по адресу <a href="mailto:set2333@mail.ru">set2333@mail.ru.</a></li>
                    <li>Ссылка на мой профиль на <a href="https://infostart.ru/profile/99304/">Инфостарте.</a></li>
                    <li>Мой <a href="https://habr.com/ru/users/set2333/">Хабр</a> аккаунт.</li>
                    <li><a href="https://career.habr.com/set2333">Хабр карьера.</a></li>
                    <li>Аккаунт на <a href="https://github.com/set2333/">Гитхабе.</a></li>
                    <li>Кстати, исходники этого сайта <a href="https://github.com/set2333/Resume">там же.</a></li>
                </ul>
            </div>
            );
    }
}

module.exports = LinkContent;