import React, { Component } from 'react';
import './Navigation.css'

class Navigation extends Component {
    render() {
        const links = this.props.links;
        const navBarLinks = links.map((link) =>
            <li key={link}><a href={"/" + link}>{link}</a></li>
        );
        const NavStyle = {"fontSize":"1.3em"};
        return (
            <nav style={NavStyle}>
                <ul className="nav-links">
                    {navBarLinks}
                </ul>
            </nav>
        );
    }
}

export default Navigation;