import React, { Component } from 'react';
import './Navigation.css';
import Accordion from './Accordion';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleToggle=()=>{
        this.setState({
          isOpen: !this.state.isOpen
        })
      }
    

    render() {
        
        const { btnNames, onClick} = this.props;

        const btnStyle = {
            "display": "block",
            "width": "100%",
            "textTransform": "capitalize",
            "fontSize": "1.1em",
            "backgroundColor": "#333",
            "color": "#fff",
            "border": "none",
            "outline": "none",
            "textAlign": "left",
            "cursor": "pointer"
        }
        const navBarBtn = btnNames.map((name, i) =>
            <div key={name}><button style={btnStyle} ><a onClick={() => this.handleToggle}>{name}</a></button><Accordion toggle={this.state.isOpen} num={i} links={this.props.animalLinks} /></div>
        );
        return (
            <nav>
                {navBarBtn}
            </nav>
        );
    }
}

export default Navigation;