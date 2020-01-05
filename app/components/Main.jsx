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
                    <Menu refresh={this.refresh} data={this.state}/>
                    <MainContent refresh={this.refresh} visibility={this.state.main} />
                    <WorkContent refresh={this.refresh} visibility={this.state.work} />
                    <LiveContent refresh={this.refresh} visibility={this.state.live} />
                    <LinkContent refresh={this.refresh} visibility={this.state.link} />
            </div>    );
    }
}

module.exports = Main;