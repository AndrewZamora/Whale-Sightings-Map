import React, { Component } from 'react';
import './Navigation.css';
import Accordion from './Accordion';

class Navigation extends Component {
    render() {
        const { btnNames, onClick } = this.props;
        const NavStyle = {
           
        };
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
            <div key={name}><button style={btnStyle} ><a onClick={() => onClick(name)}>{name}</a></button><Accordion num={i} links={this.props.animalLinks}/></div>
        );
        return (
            <nav style={NavStyle}>
                {navBarBtn}
            </nav>
        );
    }
}

export default Navigation;