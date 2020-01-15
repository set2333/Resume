//Контент раздела с контактами и ссылками
const React = require('react');
const Content = require('./Content.jsx');
const ButtonAncor = require('../buttons/ButtonAncor.jsx');

class ContentNotFound extends Content {
    
    render() {
        return (
            <div className='content' >
                <h1>Нет такой страницы.</h1>
                <p>Возможно я просто забыл или не захотел её создать. Вы можете перейти на <ButtonAncor title='Главную страницу' refresh={this.props.refresh} contentName="main" /></p>
                
                
            </div>
            );
    }
}

module.exports = ContentNotFound;