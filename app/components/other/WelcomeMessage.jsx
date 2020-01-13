//Компонент приветсвия. Говорит добрый день||ночь||утро||вечер в зависимости от времени
const React = require('react');

class WelcomeMessage extends React.Component {
    render() {
        let hour = new Date().getHours();
        if (hour < 4) return <h1>Доброй ночи</h1>;
        if (hour > 3 && hour < 12) return <h1>Доброе утро</h1>;
        if (hour > 15) return <h1>Добрый вечер</h1>;
        return <h1>Добрый день</h1>;
    }
}

module.exports = WelcomeMessage;