import React from 'react';
import './Footer.css';

const footerStyle = {
    "display": "flex",
    "height": "100%"
};
const pStyle = { "margin": "auto 0 0.3em 0.3em" }
const aStyle = { "textDecoration": "none", "fontWeight": "bold", "color": "#50C878" };


const Footer = () => (
    <footer style={footerStyle}>
        <p style={pStyle}>Data provided by  <a
            style={aStyle}
            href="https://whalemuseum.org/" target="_blank"
            rel="noopener noreferrer">The Whale Museum</a> and code by Andrew Zamora</p>
    </footer>
);

export default Footer;