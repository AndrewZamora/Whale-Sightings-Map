import React, { Component } from 'react';
import './Navigation.css';
import Accordion from './Accordion';

class Navigation extends Component {
    render() {
        const { btnNames, onClick, isOpen } = this.props;

        const btnStyle = {
            "display": "block",
            "width": "100%",
            "textTransform": "capitalize",
            "fontSize": "1.1em",
            "backgroundColor": "#333",
            "color": "#fff", 
            "border": "none",
            "outline": "none",
            "textAlign":"left",
            "cursor":"pointer"
        }
        const navBarBtn = btnNames.map((name,i) =>
            <div key={name}><button style={btnStyle} ><a onClick={() => onClick()}>{name}</a></button><Accordion toggle={isOpen} num={i} links={this.props.animalLinks}/></div>
        );
        return (
            <nav>
                {navBarBtn}
            </nav>
        );
    }
}

export default Navigation;