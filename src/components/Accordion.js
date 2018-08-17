import React, { Component } from 'react';




class Accordion extends Component {
    render() {
        const ulStyle = {
            "listStyle": "none",
            "margin": "0.2em 0 0.2em 0.3em",
            "padding": "0",
            "text-transform":"capitalize"
        };
        const allLinks = this.props.links[this.props.num].map(link => {
            return <li key={link}><a>{link}</a></li>
        })
        return (
         <ul style={ulStyle}>{allLinks}</ul>
        );
    }

}

export default Accordion; 

