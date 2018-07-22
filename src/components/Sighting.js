import React, { Component } from 'react';
import './Sighting.css';
import Marker from './Marker';

class Sighting extends Component {
    render() {
        const AllSightings = this.props.speciesData.map((sight, index) => {
            return <React.Fragment><Marker lat={sight.latitude}lng={sight.longitude}text={sight.species}/></React.Fragment>
        })
        return (
            <React.Fragment>
                {AllSightings}
            </React.Fragment>
        );
    }

}

export default Sighting; 