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
      species: ["orca", "minke", "gray whale", "humpback", "atlantic white-sided dolphin", "pacific white-sided dolphin", "dalls porpoise", "harbor porpoise", "harbor seal", "northern elephant seal", "southern elephant seal", "california sea Lion", "steller sea lion", "sea otter", "other","unknown"],
      whaleData: [0],
      speciesData:[]
    };
  }

  componentDidMount() {
    fetch('api.json?species=orca')
    .then(response => response.json())
    .then((data) => {
      this.setState({
        speciesData: data
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
    };
    const loadingStyle = {"margin":"40vh auto","color":"#333"};

    

    return (
      <div className="app">
        {this.state.whaleData.length  ? (
          <main>
            <div className="map-navigation">
            <Navigation links={this.state.species} />
              <Footer />
            </div>
            <div className="map">
              <GoogleMapReact
                bootstrapURLKeys=
                {{ key: apiKey }}
                center={center}
                zoom={7}>
              </GoogleMapReact>
            </div>
          </main>
        ) : (<div style={{"display":"flex"}}><h1 style={loadingStyle}>Loading...</h1></div>)}
      </div>
    );
  }
}

export default App;
