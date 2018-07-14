import React, { Component } from 'react';
import './AnimalSightings.css';
import Sighting from './Sighting'

class AnimalSightings extends Component {

    render() {

        const AllSightings = this.props.whaleData.map((sight, index) => {
            return <Sighting key={index} sight={sight} />
        })
        return (
            <div id="all-sightings">
                <h2>50 Most Recent Whale Sightings:</h2>
                {AllSightings}
            </div>
        );
    }

}

export default AnimalSightings;