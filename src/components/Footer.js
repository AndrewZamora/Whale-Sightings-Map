import React from 'react';
import './Footer.css';

const footerStyle = {
    "display": "flex"
};
const pStyle = { "margin": "auto 0 0.3em 0.3em" }
const aStyle = { "textDecoration": "none", "fontWeight": "bold", "color": "#3217b7" };


const Footer = () => (
    <footer style={footerStyle}>
        <p style={pStyle}>Data provided by  <a
            style={aStyle}
            href="https://whalemuseum.org/" target="_blank"
            rel="noopener noreferrer">The Whale Museum</a> and code by <a style={aStyle} 
            target="_blank"
            rel="noopener noreferrer" href="https://github.com/AndrewZamora">Andrew Zamora</a></p>
    </footer>
);

export default Footer;