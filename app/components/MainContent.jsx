const React = require('react');
const Content = require('./Content.jsx');
const Ancor = require('./Ancor.jsx');

class MainContent extends Content {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='bg_div'>
            <div className={((this.state.visibility)?'visibility':'hiden') + ' content'} >
                <h1>Здравствуйте</h1>
                <p>Приветствую Вас на сайте, который является моим резюме.</p>
                <p>В разделе <Ancor title='О работе' refresh={this.props.refresh} contentName="work" /> я расскажу о своей рабочей деятельности. О том, какими технологиями я владею. В каких проектах учувствовал. Что умею и чему стремлюсь научиться.</p>
                <p>Так же, я считаю, что если брать человека в команду, важна и его личностная составляющая. Поэтому в разделе <Ancor title='О жизни' refresh={this.props.refresh} contentName="live" /> я расскажу о своих увлечениях, не связанных с ИТ.</p>
                <p>Раздел <Ancor title='Ссылки' refresh={this.props.refresh} contentName="link" /> содержит ссылки на мои аккаунты в различных ИТ-сообществах. Так же этот раздел поможет Вам связаться со мной. Ну если вдруг захочется.</p>
            </div>
            </div>
            );
    }
}

module.exports = MainContent;