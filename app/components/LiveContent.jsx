const React = require('react');
const Content = require('./Content.jsx');

class LiveContent extends Content {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='bg_div'>
            <div className={((this.state.visibility)?'visibility':'hiden') + ' content'} >
                <h1>О жизни</h1>
                <p>Родился, вырос и живу, я в городе Кызыл, Республика Тыва. Уезжать в другой регион я не намерен, но готов к удаленной работе, благо для этого у меня есть все условия (в частности личный кабинет, в котором я могу спрятоться от всех домочадцев).</p>
            </div>
            </div>
            );
    }
}

module.exports = LiveContent;