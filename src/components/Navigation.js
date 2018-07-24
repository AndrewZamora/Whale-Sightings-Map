import React, { Component } from 'react';
import './Navigation.css'

class Navigation extends Component {
    render() {
        const {links, onClick} = this.props;
        const navBarLinks = links.map((link) =>
            <li key={link}><a onClick={() => onClick(link)}>{link}</a></li>
        );
        const NavStyle = {"fontSize":"0.9em",
        "backgroundColor": "#333",
        "color": "#fff"};
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