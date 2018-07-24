import React, { Component } from 'react';
import './Marker.css';

class Marker extends Component {
    render(){
        const {lng,lat,text,key} = this.props;
        const style = {"width":"1em",
        "height":"1em","background":"red","borderRadius":"50%"};

        return(
           <div style={style} lng={lng} lat={lat} text={text}
           key={key}>
           </div>
        );
    }

}

export default Marker;