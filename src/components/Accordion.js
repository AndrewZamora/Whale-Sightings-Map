import React, { Component } from 'react';
import AccordionItem from './AccordionItem';

class Accordion extends Component {
  render() {
    const { items, titles } = this.props;
    const allItems = items.map((item, i) =>
      <AccordionItem title={titles[i]} key={item}>
          {item}
        </AccordionItem>);
    return (
      <div>
        {allItems}
      </div>
    );
  }
}

export default Accordion;
