const React = require('react');
var Menu = require('./Menu.jsx');
var MainContent = require('./MainContent.jsx');
var WorkContent = require('./WorkContent.jsx');
var LiveContent = require('./LiveContent.jsx');
var LinkContent = require('./LinkContent.jsx');

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
        this.state = {
            main:true,
            work:false,
            live:false,
            link:false
        }
    }
    
    refresh(data) {
        this.setState(data);
    }
    
    render() {
        return (<div>
                    <Menu refresh={this.refresh}/>
                    <MainContent visibility={this.state.main} />
                    <WorkContent visibility={this.state.work} />
                    <LiveContent visibility={this.state.live} />
                    <LinkContent visibility={this.state.link} />
            </div>    );
    }
}

module.exports = Main;