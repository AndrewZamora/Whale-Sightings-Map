import React, { Component } from 'react';
import './Navigation.css'

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
        const navBarBtn = btnNames.map((name) =>
            <button style={btnStyle} key={name}><a onClick={() => onClick(name)}>{name}</a></button>
        );
        return (
            <nav style={NavStyle}>
                {navBarBtn}
            </nav>
        );
    }
}

export default Navigation;