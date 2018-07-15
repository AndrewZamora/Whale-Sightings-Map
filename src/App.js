import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';
import './components/Navigation';
import Navigation from './components/Navigation';
import AnimalSightings from './components/AnimalSightings';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: ['Home', 'About'],
      whaleData: []
    };
  }

  componentDidMount() {
    fetch('http://hotline.whalemuseum.org/api.json')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          whaleData: data
        })
      })
      .catch((error) => {
        console.error(error);
      })
  }


  render() {
    // Google Maps API Key is needed for map
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    // Coordinates to San Juan Island
    const center = {
      lat: 48.636669,
      lng: -122.916611
    }

    return (
      <div className="app">
        <main>
          <div className="animal-sightings">
            <Navigation links={this.state.links} />
            <AnimalSightings whaleData={this.state.whaleData} />
            <Footer />
          </div>
          <div className="map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: apiKey }}
              center={center}
              zoom={7}>
            </GoogleMapReact>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
