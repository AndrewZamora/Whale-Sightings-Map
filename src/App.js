import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';
import './components/Navigation';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Marker from './components/Marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ["whales", "dolphins", "porpoises", "sea lions", "seals", "other"],
      species:
        [["orca", "minke", "gray whale", "humpback"],["atlantic white-sided dolphin", "pacific white-sided dolphin"],
        ["dalls porpoise", "harbor porpoise"],
        ["harbor seal", "northern elephant seal", "southern elephant seal"],
        ["california sea lion", "steller sea lion"], ["sea otter", "other", "unknown"]],
      whaleData: [],
      speciesData: [],
      isOpen: false
    };
  }

  componentDidMount() {
  }

  getSpeciesData = animal => {
    fetch('api.json?species=' + animal)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          speciesData: data
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleToggle=()=>{
    this.setState({
      isOpen: !this.state.isOpen
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

    const AllSightings = this.state.speciesData.map((sight) => {
      return <Marker lat={sight.latitude} lng={sight.longitude} text={sight.species} key={sight.id} />
    })

    return (
      <div className="app">
        <main>

          <div className="map-navigation">
            <h1 style={{ "margin": "0.1em 0 0.1em 0.3em" }}>Whale Sightings Map</h1>
            <Navigation btnNames={this.state.category} onClick={this.handleToggle} animalLinks={this.state.species} isOpen={this.state.isOpen} />
            <Footer />
          </div>

          <div className="map">
            <h1 style={{ "zIndex": "1", "textAlign": "center", "marginTop": "40vh" }}>Loading...</h1>
            <GoogleMapReact
              bootstrapURLKeys=
              {{ key: apiKey }}
              center={center}
              zoom={7} style={{ "zIndex": "-1" }}>
              {AllSightings}
            </GoogleMapReact>
          </div>

        </main>
      </div>
    );
  }
}

export default App;
