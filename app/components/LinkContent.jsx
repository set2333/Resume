const React = require('react');
const Content = require('./Content.jsx');

class LinkContent extends Content {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='bg_div'>
            <div className={((this.state.visibility)?'visibility':'hiden') + ' content'} >
                <h1>Ссылки</h1>
                <p>Написать мне можно по адресу <a href="mailto:set2333@mail.ru">set2333@mail.ru.</a></p>
                <p>Ссылка на мой профиль на <a href="https://infostart.ru/profile/99304/">Инфостарте.</a></p>
                <p>Мой <a href="https://habr.com/ru/users/set2333/">Хабр</a> аккаунт.</p>
                <p><a href="https://career.habr.com/set2333">Хабр карьера.</a></p>
                <p>Аккаунт на <a href="https://github.com/set2333/">Гитхабе.</a></p>
                <p>Кстати, исходники этого сайта <a href="https://github.com/set2333/Resume">там же.</a></p>
            </div>
            </div>
            );
    }
}

module.exports = LinkContent;