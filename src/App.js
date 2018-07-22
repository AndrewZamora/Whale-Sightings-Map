import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';
import './components/Navigation';
import Navigation from './components/Navigation';
import Sighting from './components/Sighting';
import Footer from './components/Footer';
import Marker from './components/Marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: ['Home', 'About'],
      species: ["orca", "minke", "gray whale", "humpback", "atlantic white-sided dolphin", "pacific white-sided dolphin", "dalls porpoise", "harbor porpoise", "harbor seal", "northern elephant seal", "southern elephant seal", "california sea Lion", "steller sea lion", "sea otter", "other", "unknown"],
      whaleData: [0],
      speciesData: []
    };
  }

  componentDidMount() {


  }

  getSpeciesData = () => {
    fetch('api.json?species=orca')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          speciesData: data
        })
        console.log(this.state.speciesData)
      })
      .catch((error) => {
        console.error(error);
      })
      ;
  }


  render() {
    // Google Maps API Key is needed for map
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    // Coordinates to San Juan Island
    const center = {
      lat: 48.636669,
      lng: -122.916611
    };
    const loadingStyle = { "margin": "40vh auto", "color": "#333" };

    const AllSightings = this.state.speciesData.map((sight, index) => {
      return <Marker lat={sight.latitude} lng={sight.longitude} text={sight.species} />
    })

    return (
      <div className="app">
          <main>
            <div className="map-navigation">
              <h1 onClick={this.getSpeciesData.bind(this)}>Title</h1>
              {this.state.speciesData.length > 0 &&
                <div>
                  {this.state.speciesData[0].species}
                </div>
              }
              <Navigation links={this.state.species} />
              <Footer />
            </div>
            <div className="map">
              <GoogleMapReact
                bootstrapURLKeys=
                {{ key: apiKey }}
                center={center}
                zoom={7}>
                {this.state.speciesData.length &&
                  AllSightings}
              </GoogleMapReact>
            </div>
          </main>
      </div>
    );
  }
}

export default App;
