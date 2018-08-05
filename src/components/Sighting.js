import React, { Component } from 'react';
import './Sighting.css';
import Marker from './Marker';

class Sighting extends Component {
    render() {
        const AllSightings = this.props.speciesData.map((sight) => {
            return <Marker lat={sight.latitude}lng={sight.longitude}text={sight.species}/>
        })
        return (
            <React.Fragment>
                {AllSightings}
            </React.Fragment>
        );
    }

}

export default Sighting; 