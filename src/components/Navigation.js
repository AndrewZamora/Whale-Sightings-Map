import React, { Component } from 'react';
import './Navigation.css';
import Accordion from './Accordion';

class Navigation extends Component {
    render() {
        const { titles,items,onClick } = this.props;
        return (
            <nav>
                <Accordion 
                titles={titles}
                onClick={onClick} 
                items={items}/>
            </nav>
        );
    }
}

export default Navigation;