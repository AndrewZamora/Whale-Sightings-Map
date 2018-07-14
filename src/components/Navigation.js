import React, { Component } from 'react';
import './Navigation.css'

class Navigation extends Component {
    render() {
        const links = this.props.links;
        const navBarLinks = links.map((link) =>
       <li key={link}><a href={"/" + link}>{link}</a></li>
    );  
        return (
            <nav>
                <h3>Whale Sighting Map</h3>
                <ul className="nav-links">
                    {navBarLinks}
                </ul>
            </nav>
        );
    }
}

export default Navigation;