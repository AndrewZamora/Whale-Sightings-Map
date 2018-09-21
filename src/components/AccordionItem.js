import React, { Component } from 'react';
import './AccordionItem.css';


class AccordionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
  }

  handleClick = (event) => {
    event.preventDefault()
    this.setState({
      active: !this.state.active,
      height: this.refs.inner.clientHeight
    })
  }

  render() {
    const { title, children, onClick } = this.props;
    const { active, height } = this.state;
    const currentHeight = active ? height : 0;
    const childrenList = children.map(child =>
      <a onClick={() => onClick(child)}
        key={child}>
        {child}</a>);
    return (
      <ul className="accordion">
        <li>
            <a onClick={(event) => { this.handleClick(event) }} className="tab">{title}<div><i className="arrow"></i></div></a>
          <div className="panel" style={{ height: currentHeight }}>
            <div className="content" ref='inner'>
              {childrenList}
            </div>
          </div>
        </li>
      </ul>
    );
  }
}

export default AccordionItem;
