const React = require('react');
var Button = require('./Button.jsx');

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
        
    render() {
        return(
            <nav>
               <ul>
                   <Button title='О сайте' refresh={this.props.refresh} contentName="main"/>
                   <Button title='О работе' refresh={this.props.refresh} contentName="work"/>
                   <Button title='О жизни' refresh={this.props.refresh} contentName="live"/>
                   <Button title='Ссылки' refresh={this.props.refresh} contentName="link"/>
               </ul>
            </nav>
        );
    }
}

module.exports = Menu;