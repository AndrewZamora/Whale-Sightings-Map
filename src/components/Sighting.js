import React, { Component } from 'react';
import './Sighting.css';

class Sighting extends Component {
    render() {
        const sight = this.props.sight.id;
        const animal = this.props.sight.species;
        const location = "Latitude: " + this.props.sight.latitude + " Longitude: " + this.props.sight.longitude;
        const description = this.props.sight.description;
        return (
            <div className="sighting-cards">
                <h3 key={sight}>{animal}</h3>
                <p><strong>Location:</strong> {location}</p>
                <p><strong>Description: </strong> {description}</p>
            </div>
        );
    }

}

export default Sighting; 