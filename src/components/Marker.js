import React, { Component } from 'react';
import './Marker.css';

class Marker extends Component {
    render(){
        const {lng,lat,text,key} = this.props;
        const style = {"width":"1em",
        "height":"1em","background":"red","border-radius":"50%"};

        return(
           <div style={style} >
           </div>
        );
    }

}

export default Marker;