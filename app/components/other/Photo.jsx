//Коипонент для вставки фото
const React = require('react');

class Photo extends React.Component {
    
    render() {
        return(
            <div className='photo' style={{background: 'url(' + this.props.image + ') no-repeat center center / cover', width: this.props.width, height:this.props.height, float:this.props.float}}>
            </div>
        );
    }
    
}

Photo.defaultProps = {
    float: 'left',
    width: '200px',
    height: '300px'
}

module.exports = Photo;