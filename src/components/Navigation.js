import React, { Component, Fragment } from 'react';
import './Navigation.css';
import styles from './Navigation.module.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
const Navigation = ({ titles, items, onClick }) => {
  const [open, setOpen] = React.useState(null);
  const handleClick = (index) => {
    open === index ? setOpen(null) : setOpen(index);
  };
  const handleItems = (items) => {
    return items.map(item => {
      return (
        <List component="div" disablePadding >
          <ListItem button>
            <ListItemText primary={item} onClick={() => onClick(item)} />
          </ListItem>
        </List>
      )
    });
  };
  return (
    <nav>
      <List>
        {
          titles.map((title, index) => {
            return (
              <Fragment>
                <ListItem button onClick={() => handleClick(index)} >
                  <ListItemText primary={title} className={styles['list-tab']}/>
                  {open === index ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open === index} timeout="auto" unmountOnExit>
                  {handleItems(items[index])}
                </Collapse>
              </Fragment>
            )
          })
        }
      </List>
    </nav>
  );
}

export default Navigation;