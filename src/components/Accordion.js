import React, { Component } from 'react';




class Accordion extends Component {
    render() {
        const allLinks = this.props.links[this.props.num].map(link => {
            return <li key={link}><a>{link}</a></li>
        })
        return (
         <ul>{allLinks}</ul>
        );
    }

}

export default Accordion; 

