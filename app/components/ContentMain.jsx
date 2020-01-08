//Контент главного раздела
const React = require('react');
const Content = require('./Content.jsx');
const ButtonAncor = require('./ButtonAncor.jsx');
const WelcomeMessage = require('./WelcomeMessage.jsx');

class ContentMain extends Content {
    
    render() {
        return (
            <div className={((this.state.visibility)?'visibility':'hiden') + ' content'} >
                <WelcomeMessage />
                <p>Приветствую Вас на сайте, который является моим резюме.</p>
                <p>Сайт небольшой, состоит всего из трех разделов. В разделе <ButtonAncor title='О работе' refresh={this.props.refresh} contentName="work" /> я расскажу о своей рабочей деятельности. О том, какими технологиями я владею. В каких проектах учувствовал. Что умею и чему стремлюсь научиться.</p>
                <p>Так же, я считаю, что если брать человека в команду, важна и его личностная составляющая. Поэтому в разделе <ButtonAncor title='О жизни' refresh={this.props.refresh} contentName="live" /> я расскажу о своих увлечениях, не связанных с ИТ. Там же я изложу свою краткую биографию. К прочтению необязательно, но вдруг интересно.</p>
                <p>Раздел <ButtonAncor title='Контакты' refresh={this.props.refresh} contentName="link" /> содержит ссылки на мои аккаунты в различных ИТ-сообществах. Так же этот раздел поможет Вам связаться со мной(там есть форма связи). Ну если вдруг захочется предложить мне, что-нибудь очень заманчивое.</p>
            </div>
        );
    }
}

module.exports = ContentMain;